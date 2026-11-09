---
name: Warm Atelier Management OS
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#574238'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#8a7267'
  outline-variant: '#ddc1b3'
  surface-tint: '#9e4300'
  primary: '#9a4100'
  on-primary: '#ffffff'
  primary-container: '#bd5611'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb690'
  secondary: '#795745'
  on-secondary: '#ffffff'
  secondary-container: '#fed1b9'
  on-secondary-container: '#795845'
  tertiary: '#79533e'
  on-tertiary: '#ffffff'
  tertiary-container: '#956b55'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcb'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783100'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#e9bda7'
  on-secondary-fixed: '#2d1608'
  on-secondary-fixed-variant: '#5e402f'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#eebca2'
  on-tertiary-fixed: '#2f1405'
  on-tertiary-fixed-variant: '#623e2b'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display:
    fontFamily: Vollkorn
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Vollkorn
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Vollkorn
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Vollkorn
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Vollkorn
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  title-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system drives a mission-critical Super Admin platform management suite, blending architectural precision with the tactile warmth of a high-end design atelier. Rather than adopting the cold, sterile blues and grays common in conventional enterprise SaaS, the interface utilizes warm ivory canvas surfaces, rich espresso and walnut structural elements, and calibrated terracotta-amber operational accents.

The emotional goal is composure, authoritative control, and bespoke craftsmanship. Operations teams, platform directors, and executive managers interact with high-density data without visual fatigue. The visual approach pairs a **Refined Modern SaaS** structure with an **Editorial Warm Minimalist** sensibility: razor-thin warm-border delineations, subtle tonal shifts instead of heavy dropshadows, crisp tabular data, and distinct visual anchors for state and permission hierarchies.

## Colors

The palette establishes an immediate sense of curated luxury and operational rigor through four cohesive color tiers:

- **Primary (`#D96B27`)**: Vibrant terracotta-amber. Used intentionally for focal primary calls-to-action, active selection states, system alert notifications, high-priority operational highlights, and key metric trend markers.
- **Secondary (`#3D2314`)**: Deep walnut espresso. Anchors the structural foundation: primary navigation bars, contextual sub-headers, top-level headings, key metric values, and high-emphasis interface chrome.
- **Tertiary (`#5A3825`)**: Mid-tone warm walnut. Drives secondary typography, table headers, supporting icons, and active structural borders.
- **Neutral (`#FBF9F5`)**: Refined warm ivory canvas. Serves as the base application background, paired with `#FFFFFF` for elevated data cards and `#F3EFEA` for hover, table alternating fills, and inset regions.

### Functional States & Semantic Accents
- **Success / Healthy**: `#2D6A4F` (Forest Green on `#EAF4EE` warm tint).
- **Warning / Review Needed**: `#D97706` (Warm Ochre on `#FEF3C7` warm tint).
- **Destructive / Revoked**: `#B91C1C` (Burnt Crimson on `#FEE2E2` warm tint).
- **Subtle Outline / Divider**: `#E6DFD5` (Warm hairline separator).

## Typography

The type system balances the intellectual, storied presence of **Vollkorn** with the razor-sharp legibility of **Inter**. 

- **Vollkorn** is reserved for high-level editorial headers, platform view titles, system tenant greetings, and executive metric summaries. Its literary serifs instill confidence and human craftsmanship into the admin console.
- **Inter** handles all operational workflows, including navigation structures, input forms, interactive controls, status chips, and tabular data sets. All numeric dashboard metrics and audit logs mandate `font-feature-settings: "tnum"` (tabular figures) to ensure clean alignment during real-time data streaming.

## Layout & Spacing

The interface employs a dense, structured **fluid grid** anchored by a persistent vertical rail or horizontal multi-tier console shell:

- **Desktop (>= 1280px)**: 12-column grid layout with `1.5rem` gutters and `2.5rem` canvas margins. Side navigation rails are fixed at `260px` or collapsible to an icon-only `68px` state.
- **Tablet (768px - 1279px)**: 8-column layout with `1.25rem` gutters and `1.5rem` margins. Complex operational tables switch to horizontal scroll wrappers with pinned action columns.
- **Mobile (< 768px)**: 4-column layout with `1rem` gutters and `1rem` margins. The primary navigation collapses into a dedicated warm-ivory drawer overlay; dense metric cards wrap to single-column card stacks.

Vertical baseline rhythm relies on a consistent 4px/8px incremental scale, ensuring tables, form fields, and toolbar controls maintain exact horizontal alignment across adjacent containers.

## Elevation & Depth

Visual hierarchy is maintained through **tonal layering and low-contrast warm outlines** rather than heavy drop shadows:

- **Canvas (Level 0)**: The base ivory canvas (`#FBF9F5`) holds the page background and master workspace.
- **Surface Cards & Insets (Level 1)**: Pure white (`#FFFFFF`) surfaces framed with crisp 1px borders (`#E6DFD5`). Ambient warmth is introduced with an ultra-soft shadow: `0 1px 3px rgba(61, 35, 20, 0.04), 0 1px 2px rgba(61, 35, 20, 0.02)`.
- **Dropdowns & Popovers (Level 2)**: Crisp overlays bordered with `#D8CEC1` and elevated with `0 8px 24px rgba(61, 35, 20, 0.08)`.
- **Modals & Slide-over Panels (Level 3)**: Deep operational overlays framed with warm walnut shadows: `0 16px 40px rgba(61, 35, 20, 0.14)`. Backdrop scrims use `#3D2314` at 40% opacity with a slight 2px blur to keep contextual awareness.

## Shapes

The design system embraces an architectural, slightly softened corner profile (`roundedness: 1`). 

- Standard inputs, buttons, status chips, and table row groupings feature subtle `0.25rem` (4px) radii, projecting exactitude and density.
- Cards, modal containers, and elevated operational widgets use `0.5rem` (8px).
- Status badges and avatar elements use full-pill styling (`9999px`) to create clear differentiation from actionable data containers.

## Components

### Buttons
- **Primary**: Solid Terracotta-Amber (`#D96B27`) with pure white text, 4px border radius, medium weight typography (`label-md`). Hover transitions to `#C45A1A`; active state engages `#B04D12`.
- **Secondary / Studio**: Deep Walnut (`#3D2314`) with ivory text (`#FBF9F5`), used for high-impact actions like "Publish Production Release" or "Create Tenant".
- **Outline / Ghost**: Pure white background with `#E6DFD5` border, `#3D2314` typography. Hover initiates `#F3EFEA` background tint.
- **Destructive**: Ivory background with `#B91C1C` border and text, shifting to filled `#B91C1C` with white text on deliberate intent.

### Status Chips & Badges
- Pill-shaped (`rounded-full`), padding `2px 8px`, typography `label-sm`.
- **Active / Operational**: Warm ivory tint background with Forest Green (`#2D6A4F`) text and subtle 1px border.
- **Maintenance / Suspended**: Warm ochre tint with `#D97706` text.
- **Super Admin Role Tag**: Dark walnut fill (`#3D2314`) with warm ivory lettering and a miniature 6px terracotta status pip.

### Operational Data Tables
- Crisp `#E6DFD5` divider grid. Header rows feature subtle `#F3EFEA` tinting with uppercase tracked labels (`label-sm`, `#5A3825`).
- Rows feature interactive hover highlighting (`#F9F6F0`). Pinned ID and quick-action columns ensure frictionless tenant audits.
- Tabular figures enabled throughout for precise numerical comparison across platform quotas, throughput, and billing.

### Input Fields & Controls
- Form fields utilize a `#FFFFFF` fill with a persistent 1px `#E6DFD5` border.
- Text uses `#3D2314`, with placeholder text settled at `#9E9182`.
- Focus ring: 2px offset ring in vibrant amber (`#D96B27`), ensuring accessible visual feedback without layout shift.
- Checkboxes and radios feature deep walnut borders with solid terracotta fill upon selection.

### Metric & KPI Cards
- White `#FFFFFF` card containers with 1px `#E6DFD5` borders.
- Top section houses the metric title in Inter `label-sm` (`#5A3825`) accompanied by optional category badges.
- Central value displayed in high-impact Vollkorn `headline-lg` (`#3D2314`), flanked by subtle inline trend badges (e.g., terracotta-tinted pill indicating `+12.4%`).