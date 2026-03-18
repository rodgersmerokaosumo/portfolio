# Portfolio Revamp V2 — Design Spec

## Overview

Complete redesign of Rodgers Meroka Osumo's portfolio website, repositioning from a personal portfolio to a **data consulting practice** site. The design is "Bold Minimal" — typography-driven with maximum whitespace, inspired by godly.website's premium feel and Pula Advisors' welcoming warmth.

**Target audience:** Organizations seeking data consulting services (data collection, analytics, AI strategy, geospatial intelligence).

**Secondary audience:** Blog readers following Rodgers' spiritual reflections and data science insights.

## Design System

### Color Palette — "Warm Earth Minimal"

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#FAFAF5` | Page background, cream off-white |
| `--color-surface` | `#FFFFFF` | Cards, inputs, elevated surfaces |
| `--color-primary` | `#0B7A5E` | Forest green — CTAs, links, accents |
| `--color-primary-hover` | `#096B52` | Darker green for hover states |
| `--color-text` | `#1a1a1a` | Near-black — headings, primary text |
| `--color-text-secondary` | `#555555` | Body text, descriptions |
| `--color-text-muted` | `#888888` | Meta text, dates, captions |
| `--color-sand` | `#E8D5B5` | Warm sand — subtle backgrounds |
| `--color-sage` | `#D4E7DC` | Sage green — tag backgrounds, highlights |
| `--color-ice` | `#E4F4FF` | Ice blue — geospatial category accent |
| `--color-warm-bg` | `#F5F0E8` | Warm section backgrounds |
| `--color-border` | `#EEEEEE` | Subtle borders |
| `--color-footer-bg` | `#1a1a1a` | Dark footer background |
| `--color-footer-text` | `#CCCCCC` | Footer text |

### Category Colors

| Category | Background | Text |
|----------|-----------|------|
| Faith/Spiritual | `#D4E7DC` | `#0B7A5E` |
| Data Science | `#E4F4FF` | `#005580` |
| Career/Education | `#FFF3E0` | `#E65100` |
| Web Development | `#F3E8FF` | `#7C3AED` |
| AI Strategy (service) | `#D4E7DC` | `#0B7A5E` |
| Geospatial (service) | `#E4F4FF` | `#005580` |
| Data Collection (service) | `#F5F0E8` | `#8B7355` |
| Analytics & BI (service) | `#FFF3E0` | `#E65100` |

### Typography

| Element | Font | Weight | Size (desktop) | Size (mobile) |
|---------|------|--------|---------------|---------------|
| Hero heading | Inter | 300 (light) | 3.5rem | 2rem |
| Section heading (h2) | Inter | 600 | 1.5rem | 1.25rem |
| Card heading (h3) | Inter | 600 | 1.125rem | 1rem |
| Body text | Inter | 400 | 1rem | 0.9375rem |
| Meta/caption | Inter | 400 | 0.75rem | 0.75rem |
| Nav links | Inter | 400 | 0.75rem | 0.875rem |
| Nav brand | Inter | 700 | 0.875rem | 0.75rem |
| Letter-spacing (nav) | — | — | 1px | 1px |
| Letter-spacing (labels) | — | — | 2-3px | 2px |

**Font loading:** Google Fonts — Inter (300, 400, 600, 700). Single font family for cohesion. This intentionally replaces the current Inter + Playfair Display + Georgia pairing for a cleaner, more minimal aesthetic.

### Spacing Scale

```
--space-xs:  0.25rem   (4px)
--space-sm:  0.5rem    (8px)
--space-md:  1rem      (16px)
--space-lg:  1.5rem    (24px)
--space-xl:  2rem      (32px)
--space-2xl: 3rem      (48px)
--space-3xl: 4rem      (64px)
--space-4xl: 6rem      (96px)
```

### Layout

| Token | Value |
|-------|-------|
| `--content-max` | `1100px` |
| `--content-reading` | `800px` |
| `--navbar-height` | `60px` |
| `--border-radius-sm` | `3px` |
| `--border-radius-md` | `6px` |
| `--border-radius-lg` | `8px` |

### Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| Mobile | `< 480px` | Single column, stacked layout |
| Tablet | `480px - 768px` | Adjusted spacing, some 2-col |
| Desktop | `> 768px` | Full layout with side-by-side sections |
| Wide | `> 1200px` | Max-width content centering |

---

## Page Designs

### Navigation (all pages)

- Sticky white top bar, 60px height
- Left: brand name "RODGERS OSUMO" in caps, letter-spaced, weight 700
- Right: nav links — SERVICES · WORK · **BLOG** (green, weight 600) · ABOUT · CONTACT
- **Active state:** determined by matching `page.url` against each nav link's `href`. Active link gets green color + weight 600. Applied automatically via Jekyll/Liquid template logic.
- **Focus states:** all interactive elements (links, buttons, inputs) use `outline: 2px solid #0B7A5E; outline-offset: 2px` on `:focus-visible`. No custom focus ring removal.
- Mobile: hamburger menu → full-screen overlay with stacked links. Close via: X button (top-right), tapping outside nav area, tapping any nav link, or pressing Escape key.
- Subtle bottom border `#eee`, no shadow by default
- Scroll behavior: add subtle shadow (`0 1px 3px rgba(0,0,0,0.05)`) after scrolling past hero

### Footer (all pages)

- Dark background `#1a1a1a`
- Center-aligned: email address in white, regular weight
- Below: "Nairobi, Kenya · Available for consulting" in muted gray
- Social icons row (Twitter, GitHub, LinkedIn) — subtle, small
- Copyright at bottom
- Minimal — no multi-column grid. Matches the Bold Minimal aesthetic.

### Homepage

**Section order:** Hero → Services List → Blog + Work (side-by-side) → CTA Footer

#### 1. Hero Section
- Full-width cream background `#FAFAF5`
- Large heading: "Data Consulting" on line 1, "& AI Strategy" in green on line 2
- Weight 300 (light), size 3.5rem desktop / 2rem mobile
- Description paragraph below: 1-2 sentences, `--color-text-secondary`, max-width 70%
- Single green CTA button: "Explore Services →"
- Generous vertical padding: 6rem top, 4rem bottom

#### 2. Services List
- Four rows, each separated by `1px solid #eee` top border
- Each row: service name (left, 1rem, weight 400) + arrow "→" (right, green)
- Services: Data Collection & Pipelines · Analytics & BI Dashboards · AI/ML Strategy & Implementation · Geospatial Intelligence
- Hover: text shifts right slightly, arrow animates
- Links to dedicated Services page

#### 3. Blog + Work Side-by-Side
- Two-column layout on desktop, stacked on mobile
- **Left column — "Blog":**
  - Section heading "Blog" (h2, weight 600)
  - 3 recent posts as minimal list items:
    - Post title (weight 600, 0.875rem)
    - Below: view count · comment count (muted, 0.75rem)
    - Separated by subtle borders
  - "View All →" link at bottom in green
- **Right column — "Selected Work":**
  - Section heading "Selected Work" (h2, weight 600)
  - Featured project with gradient thumbnail (border-radius 6px)
  - Project title, service category label
  - Key metric in bold green (e.g., "23% less defaults")
  - "View Case Study →" link in green

#### 4. CTA Section
- Separate green `#0B7A5E` band above the dark footer (NOT part of the footer — lives in the homepage layout only)
- "Ready to turn your data into decisions?" — white, light weight
- "Let's Talk" button — white bg, green text, links to /contact/

### Services Page (`/services/`)

- Page heading: "Services" — large, light weight
- Subtitle: brief description of consulting practice
- Four service sections, each containing:
  - Service name (h2)
  - Description paragraph (2-3 sentences)
  - Key deliverables as a minimal bullet list
  - Related case study link (connects to projects page)
  - Subtle divider between services
- Bottom CTA: "Discuss Your Project" → Contact page

### Projects Page (`/projects/` → "Work")

**Layout: Alternating Showcase**

- Page heading: "Selected Work"
- Service category filter tabs: All · AI Strategy · Geospatial · Data Collection · Analytics & BI
  - Active tab: green bg, white text, rounded pill
  - Inactive: plain text
- Projects listed as alternating rows:
  - Odd rows: image/gradient left, text right
  - Even rows: text left, image/gradient right
  - Each project shows:
    - Service category tag (colored pill)
    - Project title (h2, weight 600)
    - Client name (muted)
    - Description (2-3 sentences)
    - Tech stack tags (small, muted bg pills)
    - Outcome metrics (bold green numbers)
    - "Read Case Study →" link
  - Separated by generous whitespace (3rem+)
- Pagination at bottom if needed
- Client-side filtering via JavaScript (smooth fade transitions)
- **Empty state:** When a category filter has no matching projects, show: "No projects in this category yet." centered, muted text, with a "View All Projects" link below.

### Blog Page (`/blog/`)

**Layout: Magazine-Style Hub (Option D)**

- Page heading: "Blog" or "Insights"
- **Featured article** at top:
  - Two-column: large featured image/gradient left, content right
  - Category tag pill, title (h2), excerpt, engagement stats (views · comments · reading time)
- **Article feed** below:
  - Single-column list
  - Each article row: title (weight 600) + category tag on right
  - Below title: date · view count · comment count (muted)
  - Separated by subtle `1px solid #eee` borders
  - Clean, scannable, editorial feel
- **Stats bar** (above the feed, NOT a sidebar — blog page stays single-column):
  - Horizontal bar showing: total blog views · total comments · latest post date
  - "Most Read" section: top 3 posts by views, shown as a horizontal card row below the stats bar
- Category filter: clickable category tags at top, client-side JavaScript filtering (same approach as projects page — smooth fade transitions). Does NOT use jekyll-archives for separate pages.
- Pagination at bottom

### Individual Blog Post (`/blog/:slug`)

- Reading-width container (800px max)
- Back link: "← Back to Blog"
- Category tag + date + reading time + view count
- Post title (h1, large, weight 600)
- Featured image (full reading width, rounded corners)
- Post content with proper typography hierarchy
- Engagement bar at bottom: view count, share buttons
- Comments section (Disqus integration, existing)
- "Related Posts" section: 2-3 posts from same category
- Previous/Next post navigation

### Individual Project Page (`/projects/:slug`)

- Reading-width container (800px max)
- Back link: "← Back to Work"
- Service category tag + client name
- Project title (h1)
- Featured image
- Key metrics bar: 2-3 outcome numbers in bold green
- Full project writeup
- Tech stack section with tag pills
- "Other Projects" section at bottom
- CTA: "Have a similar challenge? Let's talk →"

### About Page (`/about/`)

- Two-column hero: text left, avatar photo right (stacks on mobile)
- Personal introduction — INTP-J data scientist, spiritual, MSc pursuit
- "What I Bring" section: core expertise areas
- Personal interests section
- Resume download button
- CTA: "Get In Touch →"

### Contact Page (`/contact/`)

- Clean, minimal form (existing Formspree integration)
- Fields: name, email, company (optional), subject, message
- Green submit button
- Social links below form
- Brief text: "Available for consulting projects"

---

## Engagement Features

### View Tracking

- **Google Analytics 4** (existing, ID: G-XSTELV0HPS) for actual analytics
- **Display view counts** on blog posts and project pages using localStorage-based counters
- **Implementation decision: localStorage approach.** Each page visit increments a counter stored in the browser's localStorage. Counts are per-browser (not global), which is acceptable for a portfolio site — the numbers serve as social proof indicators rather than precise analytics. GA4 provides the real numbers.
- **Fallback:** If localStorage is unavailable, view counts are hidden (not shown as "0")
- **Storage key format:** `views_${page.url}` — e.g., `views_/portfolio/blog/2025/08/24/walking-without-fainting.html`
- View counts shown as "👁 342 views" format on blog cards and post pages
- **Loading state:** View counts render immediately from localStorage on page load — no async loading state needed

### Comments

- **Disqus** (existing, shortname: portfolio-iuncitmsgs)
- Show comment count on blog listing cards and magazine feed
- Disqus `count.js` script loaded in `head.html` for pulling comment counts onto listing pages
- Comment count links use Disqus's `data-disqus-url` attribute on each post link element; `count.js` replaces the text content asynchronously
- **Loading state:** Show "💬 Comments" as default text; Disqus replaces it with the actual count (e.g., "💬 12 Comments") once loaded. If Disqus fails to load, the default text remains — no broken state.
- Comments enabled on blog posts (existing behavior)
- Comments NOT added to project pages (keep projects focused on case study content)

### "Most Read" Feature

- Display top 3 posts by view count on blog page sidebar/header
- Fire emoji (🔥) or similar indicator for popular posts

---

## Technical Architecture

### Stack (unchanged)

- Jekyll 4.3.4 static site generator
- GitHub Pages hosting
- Custom theme: jekyll-theme-journal-clone
- SCSS compiled to CSS
- Vanilla JavaScript (no frameworks)

### File Changes

#### New Files
- `services/index.md` — Services page (front matter: `layout: services`)

#### Rewritten Files (existing paths, complete content replacement)
- `_sass/_variables.scss` — Complete rewrite with new design tokens
- `_sass/_base.scss` — Rewrite typography and reset
- `_sass/_layout.scss` — Rewrite layout (navbar, footer, grid)
- `_sass/_components.scss` — Rewrite all components

**Note:** `assets/css/main.scss` is kept as-is — it already imports `_variables`, `_base`, `_components`, `_layout` in the correct order. No changes needed to the import chain.

#### Modified Files
- `_config.yml` — Add services to nav, update site description
- `index.md` — Complete rewrite for Bold Minimal homepage
- `about/index.md` — Restructure content for new layout
- `blog/index.md` — Magazine-style layout
- `projects/index.md` — Alternating showcase layout
- `contact/index.md` — Minimal form styling updates
- `_layouts/blog.html` — Magazine feed layout
- `_layouts/post.html` — Updated post layout with engagement
- `_layouts/project.html` — Updated project layout
- `_layouts/projects.html` — Alternating showcase
- `themes/journal-clone/_layouts/default.html` — New nav + footer structure
- `themes/journal-clone/_includes/header.html` — Bold minimal navbar
- `themes/journal-clone/_includes/footer.html` — Minimal dark footer
- `themes/journal-clone/_includes/head.html` — Update fonts (Inter only), add Disqus count.js

#### New Layouts
- `_layouts/services.html` — Services page layout
- `_layouts/home.html` — Homepage layout (replaces `themes/journal-clone/_layouts/home.html`). The homepage `index.md` uses `layout: home` in its front matter. This layout is unique (hero + services list + side-by-side blog/work + CTA) and cannot share the generic `page` layout.

### Mobile-First Responsive

- Base styles target mobile (< 480px)
- `@media (min-width: 480px)` — tablet adjustments
- `@media (min-width: 768px)` — desktop two-column layouts
- `@media (min-width: 1200px)` — max-width centering
- Hamburger menu on mobile → full-screen overlay
- Side-by-side sections stack to single column on mobile
- Service list stays single column at all sizes
- Blog + Work section stacks on mobile (Blog first)

### Animations

- Subtle fade-in-up on scroll for sections (respect `prefers-reduced-motion`)
- Service list items: slight right-shift on hover
- Project filter: smooth opacity/transform transitions
- Nav hamburger: smooth three-line → X animation
- No heavy animations — matches minimal aesthetic

---

## Out of Scope

- Newsletter/email subscription system
- User accounts or authentication
- Server-side view tracking (using client-side or GA only)
- E-commerce or payment integration
- CMS or admin panel
- Multi-language support
- Dark mode toggle (site has one consistent light theme)

---

## Success Criteria

1. All existing content (all blog posts, all projects, about, contact) renders correctly
2. New Services page with 4 consulting pillars
3. Homepage loads in Bold Minimal layout with services list, blog + work side-by-side
4. Blog page renders magazine-style with engagement metrics
5. Projects page renders alternating showcase with category filters
6. Mobile responsive — all pages usable on 375px viewport
7. Lighthouse performance score > 90
8. No SCSS compilation errors
9. `bundle exec jekyll build` succeeds cleanly
10. Existing integrations work: Disqus comments, Google Analytics, Formspree contact form, RSS feed
