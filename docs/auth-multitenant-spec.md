# Spec: Auth (Better Auth) + multitenant identity unification

Status: **proposal** (no schema/data changes applied by this spec). Review before B2/B3/D1/D2 implementation.

## Verified current state (evidence)
- Deploy stable on Render with `DEMO_AUTH=false` after raising TypeORM/BA pool `connectionTimeoutMillis` to 30s (`main` in backend repo). No `DB_SSL`/URL changes.
- Better Auth tables exist: `"user","session","account","verification"`. Credentials validated via `signInEmail` (scrypt, `providerId='credential'`).
- `POST /auth/login` (C1 applied on `main`): **authenticate first**, resolve/authorize `expectedRole` **post-auth**, generic `401 "Credenciales inválidas"` to prevent enumeration; `403 "Acceso no autorizado..."` post-auth.
- Data: `admin@saas.com` has `platform_users` active + `platform_memberships` **1 row** `role='owner'`, `tenant_id=7151a758 (El Tano)`, `status='active'` (no `platform_admin`). `carlos@eltano.com` exists in app `users` (tenant `7151a758`) and was seeded into Better Auth (id `e95f0f19-...`); tenant has no `database_host/name` (shared DB path). `RoleResolverService` today resolves by email, prefers tenant-DB path when `tenantId`+host/name exist, else platform membership (first row).

## D1 — Role semantics (DECISION REQUIRED)
**Question:** Is `platform_admin` a **global platform** role or a role **within a tenant**?

### Option A — Global platform role
- Represent explicitly (auditable): e.g. a `platform_admins` table, or a membership with `tenant_id NULL` + `role='platform_admin'` **only if** the schema/constraints allow and semantics are documented. **Do NOT grant platform privileges via ad-hoc `UPDATE` on `platform_memberships`.**
- Creation must write an **audit record** (actor, target, reason, timestamp) and be reversible.
- `expectedRole=platform_admin` valid only for identities holding that explicit global grant.

### Option B — `admin@saas.com` is owner of El Tano (not platform admin)
- **403 for `expectedRole=platform_admin` is correct.** Use `expectedRole=company_member` (or the owner flow) + appropriate `tenantId`/resolution.
- No privilege escalation.

**Default until decided:** treat as Option B for existing data; do not elevate privileges.

## D2 — Multiple memberships (deterministic; PROPOSED)
- **1 active membership** → use it.
- **>1 memberships and no `tenantId`** → respond `400` asking to specify tenant (do not pick the first).
- **`tenantId` provided** → resolve membership for that tenant; 403/404-equivalent post-auth authorization as appropriate (generic where needed pre-auth is no longer applicable post-auth, but do not leak cross-tenant data).
- Filter by `status='active'` (and tenant active) per business rules.
- *Implementation note:* `RoleResolverService` currently returns the first membership; change to deterministic selection + `tenantId` awareness. Update tests/matrix.

## B2 — Schema link `auth_user_id` (PROPOSED, before implementation)
### Backfill (required plan)
1. **Normalize** emails: `lower(trim(email))`; detect null/empty/invalid.
2. **Detect/report duplicates** (same normalized email across/within `platform_users` and `users`) **before** migrating; resolve manually. Produce a report (counts, ids) — no silent merges.
3. Add nullable `auth_user_id` (type matching `"user".id`) + unique index (partial/where not null as needed) to `platform_users` and to `users` (confirm whether `users` is global or tenant-scoped in this schema).
4. Backfill by normalized email join to `"user"`; set only unambiguous matches. Record unmatched/ambiguous.
5. **Verify:** every active business user that can log in is linked or explicitly listed as exception.

### Rollback
- Reversible migration (drop column/index) only if no dependent logic shipped; otherwise compensate. Take backup/snapshot before data migration. Keep backfill idempotent and report-driven.

## B3 — Credential unification & user creation (PROPOSED)
- **Better Auth is the sole credential store.** Business tables keep `auth_user_id` reference, **no password/hash**.
- Create auth identities via `auth.api.signUpEmail()` (or controlled wrapper). Manual hash inserts are diagnostic-only and risky.
- **Existing users (bcrypt in `platform_users/users`, passwords unknown):** cannot migrate bcrypt→scrypt without plaintext. Realistic paths: **password reset** or **invitation** per user. Never invent passwords.
- **Users missing in Better Auth:** create via invitation/reset flow, not a known shared password.
- **Seed verification (required):** delete the manually-seeded test admin in BA and recreate with `signUpEmail`; verify login still works. If it fails, fix before migrating others.

## D2 (resolver) — tenant DB path (debt/risk)
- `RoleResolverService` may open a per-tenant `DataSource` with fixed credentials (`postgres/postgres`) when `database_host/name` set — **security/operability risk**. El Tano currently has null host/name (shared path). Before enabling dedicated tenant DBs: use secret refs/proper config, pooling, and timeouts consistent with Render stability (keep 30s/connect behavior that works).

## Test/verification matrix (minimum)
- Login: valid creds (admin, carlos+correct tenant) 200; wrong password and nonexistent email → **identical generic 401**; `expectedRole` mismatch post-auth → 403; multi-membership without `tenantId` → 400 (once D2 implemented); `tenantId` scoping.
- Regression: `/auth/session`, `/auth/logout`, rate limit, protected routes by role/tenant.
- Gates: no `DB_SSL`/URL/timeout regressions; `DEMO_AUTH=false` boots live.

## Open items for owner decision
1. D1 Option A or B for `admin@saas.com` / platform admins.
2. Confirm `users` table scope (global vs per-tenant schema) and `platform_memberships` null-`tenant_id` support/intent.
3. Chosen reset/invitation mechanism for existing passwords.
