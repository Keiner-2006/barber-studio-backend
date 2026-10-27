# Credenciales de acceso — Barber Studio Backend

## Usuarios creados en la base de datos `barber_studio_db` (Render)

### 1. Admin de la SaaS (plataforma)

| Campo | Valor |
|-------|-------|
| Email | `admin@saas.com` |
| Contraseña | `adimsaas` |
| Rol | `owner` / administrador de plataforma |
| Tabla | `public.platform_users` |

### 2. Dueño del negocio "El Tano" (barbería)

| Campo | Valor |
|-------|-------|
| Email | `carlos@eltano.com` |
| Contraseña | `eltano` |
| Rol | `owner` del tenant |
| Tabla | `public.users` |

### Base de datos (Render — PostgreSQL)

| Campo | Valor |
|-------|-------|
| Host | `dpg-dbb3gfjrjlhs73b98fog-a.oregon-postgres.render.com` |
| Puerto | 5432 |
| Nombre | `barber_studio_db` |
| Usuario | `barber_studio_db_user` |
| Contraseña | `IkOpScbebgre0v2gTonpOiYvnAXn0G9q` |
| SSL | Requerido (`rejectUnauthorized: false`) |

> **Nota:** Las contraseñas están hasheadas con bcrypt (costo 10) en la base de datos. Los valores mostrados aquí son las contraseñas en texto plano para el primer inicio de sesión.
