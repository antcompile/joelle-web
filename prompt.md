# Joelle Trad — Interior Architecture Portfolio Website

## Stitch Prompt (Generative Brief)

Build a prestigious, gallery-like portfolio website for **Joelle Trad**, a freelance interior architect specializing in residential and commercial projects. The site targets international/European clientele and must communicate luxury, craftsmanship, and refined taste through its design and interactions.

---

## 1. Project Overview

- **Brand:** Joelle Trad (personal name brand)
- **Industry:** Interior Architecture & Design
- **Specialization:** Mixed residential + commercial
- **Target Market:** International / European clients
- **Languages:** French (default), English, Arabic (RTL)
- **Purpose:** Portfolio showcase, service presentation, client acquisition
- **No e-commerce** — inquiry-based via contact form (Formspree)
- **Design Concept:** "Material Gallery" — the site feels like walking through a curated exhibition

---

## 2. Technical Architecture

### Stack
- **Framework:** Astro 5 (static site generator, islands architecture)
- **Styling:** Tailwind CSS 4 (CSS-first configuration via `@theme`)
- **Language:** TypeScript (strict)
- **Animations:** Motion.dev (React) — used in Astro islands for scroll-triggered animations
- **Forms:** Formspree (POST endpoint, no backend)
- **Deployment:** Static output → GitHub Pages / Vercel / Netlify
- **Fonts:** Self-hosted (no CDN), preloaded via `<link rel="preload">`

### Key Dependencies
```json
{
  "astro": "^5.x",
  "@astrojs/react": "^4.x",
  "@astrojs/sitemap": "^3.x",
  "@tailwindcss/vite": "^4.x",
  "tailwindcss": "^4.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "motion": "^12.x",
  "typescript": "^5.x"
}
```

### Output
- Fully static HTML/CSS/JS
- No server-side rendering at runtime
- PWA-capable (optional service worker)

---

## 3. Internationalization (i18n)

### URL Structure
```
/          → redirects to /fr/
/fr/       → French (default)
/en/       → English
/ar/       → Arabic (RTL)
```

### Implementation
- Translation files: `src/i18n/{fr,en,ar}.json`
- Utility functions: `useTranslation(lang)`, `getLocalizedPath(lang, path)`, `getDirection(lang)`, `isRTL(lang)`
- All content uses `Record<'fr' | 'en' | 'ar', string>` for multilingual fields
- Language switcher in header: FR | EN | عربي
- Arabic: `dir="rtl"` on `<html>`, logical CSS properties (`ps-`, `ms-`, `me-`, `pe-`)
- Numbers and contact info wrapped in `dir="ltr"` even in Arabic context

### Translation Namespaces
```
nav.*        — navigation labels
hero.*       — homepage hero
about.*      — about page
services.*   — service details
contact.*    — form labels, placeholders, messages
common.*     — shared (back, next, loading, view all, etc.)
footer.*     — footer content
projects.*   — filter labels, metadata labels
```

---

## 4. Theme System

### Light Mode (Default) — "Nature Distilled" style
```css
:root {
  --bg: #F5F0E1;              /* soft cream */
  --surface: #FFFFFF;          /* white cards */
  --surface-alt: #EDE7D9;     /* warm sand sections */
  --text-primary: #1C1917;    /* warm near-black */
  --text-secondary: #57504A;  /* warm gray */
  --text-muted: #8C8279;      /* captions */
  --accent: #C67B5C;          /* terracotta */
  --accent-hover: #A8654A;    /* deeper terracotta */
  --accent-secondary: #6B7B3C;/* olive green */
  --accent-gold: #D4AF37;     /* gold CTA (sparingly) */
  --border: #D4C4A8;          /* sand beige */
  --footer-bg: #1C1917;       /* warm charcoal */
}
```

### Dark Mode
```css
[data-theme="dark"] {
  --bg: #1C1917;              /* warm charcoal */
  --surface: #2A2522;          /* dark card */
  --surface-alt: #342E2A;     /* elevated surface */
  --text-primary: #F5F0E1;    /* soft cream */
  --text-secondary: #BFB5A8;  /* muted warm */
  --text-muted: #7A6F65;      /* captions */
  --accent: #D4896A;          /* lighter terracotta */
  --accent-hover: #E09A7A;    /* brighter on hover */
  --accent-secondary: #8FA872;/* lighter olive */
  --accent-gold: #E5C553;     /* brighter gold */
  --border: #3D3632;          /* subtle border */
  --footer-bg: #0F0D0B;       /* deepest black */
}
```

### Theme Toggle Behavior
- Sun/moon icon in header (React island with Motion.dev rotation)
- Respects `prefers-color-scheme` on first visit
- Stored in `localStorage` key: `theme`
- Inline `<script>` in `<head>` to prevent flash of wrong theme (FOUC)

---

## 5. Typography

### Fonts (validated by UI/UX Pro Max — "Real Estate Luxury" pairing)
| Context | Font | Weights | Usage |
|---------|------|---------|-------|
| LTR Headlines | Cinzel | 500, 600, 700 | All headings, logo, pull quotes — Roman inscriptional elegance |
| LTR Body | Josefin Sans | 300, 400, 500 | Paragraphs, navigation, buttons, captions — geometric clarity |
| AR Headlines | Noto Naskh Arabic | 700 | Arabic headings |
| AR Body | Noto Sans Arabic | 400, 500 | Arabic body text |

### Type Scale (Fluid with clamp)
```
Hero:       clamp(3rem, 6vw, 6rem)        — 48px to 96px
Section:    clamp(2.5rem, 4vw, 3.5rem)    — 40px to 56px
Project:    clamp(1.75rem, 3vw, 2.5rem)   — 28px to 40px
Body:       1rem to 1.125rem              — 16px to 18px
Caption:    0.8125rem to 0.875rem         — 13px to 14px
```

### Logo Treatment
- Text: "JOELLE TRAD" in Cinzel, weight 600
- Letter-spacing: 0.2em
- All uppercase
- No graphic mark — pure typographic logo
- Inspired by Norm Architects' spaced-letter heading approach

---

## 6. Visual Design Language

### Aesthetic: "Nature Distilled Gallery"

**Style source:** UI/UX Pro Max "Nature Distilled" style + "Architecture/Interior" palette
**Competitive inspiration:** Norm Architects' soft minimalism, Van Duysen's material warmth, Faye Toogood's intentional curation

Key principles:
- Feels like a physical gallery space: generous white space, large imagery, subtle textures
- Warm color temperature throughout (no cool grays — only warm neutrals)
- Terracotta #C67B5C as primary accent (buttons, links, active states)
- Olive #6B7B3C as secondary accent (used sparingly for organic variety)
- Gold #D4AF37 reserved strictly for CTA buttons (prestige signifier, never overused)
- Paper grain texture overlay (SVG, 3-5% opacity) on --bg and --surface-alt surfaces
- Confident restraint: show LESS, not more — let photography dominate
- No emojis as icons (use Lucide SVG icons only)
- All clickable elements: `cursor-pointer`
- Hover transitions: 150-300ms, never layout-shifting

### Imagery
- Full-bleed project photography (hero, project detail)
- Warm-toned, naturally lit, material-focused (textures: wood, stone, fabric, clay)
- Aspect ratios: 16:9 (landscape hero), 4:5 (portrait/gallery), 3:4 (project cards)
- Placeholder images from Unsplash during development:
  - Queries: "interior architecture", "luxury apartment", "modern villa interior", "commercial space design"
- All images: `loading="lazy"`, WebP + AVIF via `<picture>`, `alt` text required

### Spacing System (from UI/UX Pro Max tokens)
```
--space-xs:  4px / 0.25rem   (tight gaps)
--space-sm:  8px / 0.5rem    (icon gaps)
--space-md:  16px / 1rem     (standard padding)
--space-lg:  24px / 1.5rem   (component padding)
--space-xl:  32px / 2rem     (large gaps)
--space-2xl: 48px / 3rem     (section margins)
--space-3xl: 64px / 4rem     (hero padding)
--space-4xl: 80px / 5rem     (section vertical padding)
--space-5xl: 120px / 7.5rem  (major section breaks)
```
- Based on 8px grid
- Section padding: 80–120px vertical (responsive via clamp)
- Content max-width: 1280px
- Line length: 65-75 characters max (per UX guidelines)
- Touch targets: minimum 44x44px

---

## 7. Page Specifications

### 7.1 Homepage (`/[lang]/`)

**Hero (Section 1):**
- Full viewport height (100vh, min-height: 600px)
- Background: featured project image, warm gradient overlay (rgba(44, 36, 32, 0.4))
- Content centered vertically:
  - Animated headline: "Architecture Interieure" (FR) / "Interior Architecture" (EN) / "العمارة الداخلية" (AR)
  - Animation: word-by-word fade + rise (Motion.dev, stagger 0.1s)
  - Subtitle: tagline in DM Sans, 1.125rem, --text-secondary on dark
- Scroll indicator: chevron with infinite Y bounce animation (2s loop)
- Navigation: overlaid, transparent background, white text

**Selected Projects (Section 2):**
- Heading: "Projets Selectionnes" / "Selected Projects" / "مشاريع مختارة"
- Layout: horizontal scroll (desktop), vertical stack (mobile)
- 3-5 featured projects (filtered by `featured: true`)
- Card size: 400px × 500px (desktop)
- Hover state: image scale 1.02, overlay with project title + category (fade in 0.3s)
- Entrance: staggered fade + rise (0.7s, stagger 0.15s) on scroll into view
- End: "Voir tous les projets" / "View All Projects" link

**About Teaser (Section 3):**
- Two-column layout (50/50)
- Left: large serif pull-quote + intro paragraph + CTA link
- Right: portrait/workspace image with subtle parallax (0.95 speed)
- Background: --surface-alt

**Services (Section 4):**
- Three equal columns (responsive → stack on mobile)
- Per column: minimal line icon (terracotta stroke), service name (serif), 2-sentence description
- Icons: custom SVG (house, building, compass)
- Entrance: stagger from left (0.6s, stagger 0.1s)

**Contact CTA (Section 5):**
- Full-width, --accent background (terracotta)
- Large serif headline: "Creons quelque chose de remarquable" / "Let's create something remarkable"
- White text, "Get in Touch" button (white bg, terracotta text)
- Subtle grain texture overlay

**Footer:**
- Background: --footer-bg (warm charcoal, same in both themes)
- 4-column grid (logo | pages | social | contact)
- Logo: "JOELLE TRAD" + "Architecture & Design Interieur"
- Pages: all nav items
- Social: Instagram, LinkedIn, Pinterest (icon links)
- Contact: email, phone, location
- Bottom bar: copyright + secondary language switcher
- Text color: warm off-white (#F5F0EB), links: --accent

### 7.2 Projects Page (`/[lang]/projects/`)

**Layout:**
- Category filter tabs: Tous / Residentiel / Commercial / Hotellerie
- Active tab: terracotta underline (animated slide)
- Grid: masonry-style, 2 columns (desktop), 1 column (mobile)
- Gap: 24px

**Project Cards:**
- Thumbnail image (aspect 4:5)
- Below image: project title + location + year
- Hover: image scale 1.02, slight shadow elevation
- Entrance: staggered scroll-reveal

**Interactions:**
- Filter: instant, with fade transition between states
- Click card → `/[lang]/projects/[slug]`

### 7.3 Project Detail (`/[lang]/projects/[slug]`)

**Hero:**
- Full-bleed image (max-height: 70vh)
- No overlay text on image

**Metadata Bar:**
- Below hero, horizontal strip
- Fields: Location | Year | Scope | Area (m2)
- Typography: DM Sans 500, --text-secondary, separated by `|`

**Gallery:**
- Vertical sequence of project images
- Alternating: full-width, then 2-column pairs
- Subtle parallax between layers (Motion.dev scroll-linked)
- Image reveal: clipPath wipe (bottom to top) on inView

**Narrative:**
- 2-3 paragraphs describing the project
- Serif typography for first paragraph (drop-cap optional)
- Body typography for rest

**Navigation:**
- "Next Project" section at bottom
- Shows next project's thumbnail + title
- "Back to Projects" link above

### 7.4 About Page (`/[lang]/about`)

**Portrait Section:**
- Large image (50% width on desktop, full on mobile)
- Alongside: philosophy statement in large serif type
- Text animation: fade + subtle letter-spacing expansion on inView

**Sections:**
- Background/Story (where she studied, how she started)
- Philosophy (design principles, what she values)
- Approach (how she works with clients)
- Each section: heading + 2-3 paragraphs

**Process Visualization:**
- 4-5 steps with connecting vertical line
- Steps: Discovery → Concept → Design Development → Execution → Handover
- Each step: number + title + one-sentence description
- Animated: steps reveal sequentially on scroll

**CTA:**
- "Travaillons ensemble" / "Let's Work Together" → Contact page

### 7.5 Services Page (`/[lang]/services`)

**Service Cards (3):**
- **Residentiel / Residential:** Homes, apartments, villas, renovations
- **Commercial:** Offices, retail, restaurants, showrooms, hospitality
- **Consultation:** Color consulting, space planning, material selection, concept direction

Per service:
- Icon (line art, terracotta)
- Title (serif, large)
- Description (3-4 sentences)
- Deliverables list (bulleted)
- Typical timeline

**Process Section:**
- 5-step horizontal timeline (desktop) / vertical (mobile)
- Same steps as About page process but more detailed
- Animated connecting line that draws on scroll

**CTA:**
- "Discutons de votre projet" / "Let's Discuss Your Project" → Contact page

### 7.6 Contact Page (`/[lang]/contact`)

**Layout:** Two columns (60% form / 40% info card)

**Form (left):**
```
Name:         text input, required
Email:        email input, required
Project Type: select dropdown (Residentiel / Commercial / Consultation / Autre)
Message:      textarea (4 rows min), required
Budget Range: select dropdown (optional: <50k / 50-100k / 100-250k / 250k+)
Submit:       button, full-width, terracotta bg
```

**Form Styling:**
- Inputs: transparent background, bottom-border only (1px --border)
- Focus: border-color → --accent, subtle glow
- Labels: uppercase, 0.75rem, DM Sans 500, --text-muted
- Error: red text below input, linked via aria-describedby
- Submit button: --accent bg, white text, hover: --accent-hover, scale 1.02

**Submission:**
- POST to Formspree endpoint
- Success: checkmark animation (Motion.dev spring) + "Message envoyee" text
- Error: inline error message + retry suggestion

**Info Card (right):**
- Background: --surface (light) or --surface-alt (dark)
- Border: 1px --border
- Padding: 40px
- Content:
  - Email: joelle@joelletrad.com (placeholder)
  - Phone: (optional)
  - Location: Beirut, Lebanon / Paris, France
  - Availability: "Currently accepting new projects"
  - Social icons: Instagram, LinkedIn, Pinterest
  - Note: "Typically responds within 48 hours"

---

## 8. Navigation & Header

### Desktop Header
- Position: fixed, top: 0, full width
- Initial state (over hero): transparent bg, white text
- Scrolled state: --surface bg, --text-primary text, subtle shadow
- Transition: background + color 0.3s ease
- Detection: IntersectionObserver on hero element

**Layout:**
- Left: "JOELLE TRAD" logo (Cormorant Garant, 700, letter-spacing: 0.2em)
- Right: nav links (Home, Projects, About, Services, Contact) + language switcher + theme toggle
- Nav links: DM Sans 500, 0.875rem, uppercase, letter-spacing: 0.05em
- Hover: --accent color transition

### Mobile Header
- Same scroll behavior
- Hamburger icon (right side)
- Click → full-screen overlay menu (Motion.dev slide from right)
- Menu: centered nav links, large type (1.5rem), staggered fade-in
- Close: X icon or tap outside

### Language Switcher
- Compact: "FR | EN | عربي"
- Active language: --accent color
- Click: navigates to same page in target language

### Theme Toggle
- React island with Motion.dev
- Icon: sun (light mode) / moon (dark mode)
- Animation: 360deg rotation on toggle (0.3s spring)
- Accessible: `aria-label="Toggle dark mode"`

---

## 9. Animation Strategy (Motion.dev)

### Setup
```typescript
// src/animations/variants.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } }
};

export const imageReveal = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { clipPath: 'inset(0% 0 0 0)' }
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.4, ease: 'easeOut' }
};
```

### Island Pattern
```astro
---
// In .astro file
import ScrollReveal from '../islands/ScrollReveal.tsx';
---
<ScrollReveal client:visible>
  <div class="content">...</div>
</ScrollReveal>
```

### Reduced Motion
```typescript
// Check at component level
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If true, render without animation wrappers
```

### Performance Rules
- Use `client:visible` (not `client:load`) for below-fold animations
- Only animate `transform` and `opacity` (GPU-composited)
- Disable animations below 768px viewport width
- Maximum 3 simultaneous animations in viewport
- InView threshold: 0.2 (trigger at 20% visibility)

---

## 10. Component Specifications

### BaseLayout.astro
- Receives: `lang`, `title`, `description`, `image` (for OG)
- Sets: `<html lang={lang} dir={getDirection(lang)} data-theme={...}>`
- Includes: font preloads, theme initialization script, global CSS
- Structure: Header → `<main>` (slot) → Footer

### SEO.astro
- Props: title, description, image, lang, slug
- Outputs: `<title>`, meta description, OG tags, Twitter card, hreflang links, canonical URL
- JSON-LD: WebSite + Person schema for Joelle

### Header.astro
- Props: lang, currentPath
- Contains: logo, nav items (from navigation.ts), LanguageSwitcher, ThemeToggle island
- Script: IntersectionObserver for scroll-aware styling

### ProjectCard.astro
- Props: project data, lang
- Renders: thumbnail image, title, location, year, category badge
- Wrapped in `<a>` linking to project detail

### ScrollReveal.tsx (React Island)
- Props: children, variant (default: fadeUp), delay, className
- Uses Motion.dev `motion.div` with `whileInView`
- Reusable wrapper for any content needing scroll animation

### ContactForm.tsx (React Island)
- Full form with validation
- Submits to Formspree
- States: idle → submitting → success / error
- Success animation: checkmark scale + fade (spring)

---

## 11. Data Layer

### Content Collections (`src/content/`)

**projects/*.json:**
```json
{
  "slug": "villa-mediterranee",
  "title": { "fr": "Villa Mediterranee", "en": "Mediterranean Villa", "ar": "فيلا البحر المتوسط" },
  "description": { "fr": "...", "en": "...", "ar": "..." },
  "location": { "fr": "Beyrouth, Liban", "en": "Beirut, Lebanon", "ar": "بيروت، لبنان" },
  "category": "residential",
  "year": 2024,
  "area_sqm": 350,
  "scope": { "fr": "Conception complete", "en": "Full design", "ar": "تصميم كامل" },
  "images": ["hero.jpg", "living-01.jpg", "kitchen-01.jpg", "detail-01.jpg"],
  "featured": true,
  "order": 1
}
```

### Site Config (`src/data/siteConfig.ts`)
```typescript
export const siteConfig = {
  name: 'Joelle Trad',
  domain: 'joelletrad.com',
  tagline: { fr: 'Architecture & Design Interieur', en: 'Interior Architecture & Design', ar: 'العمارة الداخلية والتصميم' },
  email: 'contact@joelletrad.com',
  phone: '+961 XX XXX XXX',
  location: { fr: 'Beyrouth, Liban', en: 'Beirut, Lebanon', ar: 'بيروت، لبنان' },
  social: {
    instagram: 'https://instagram.com/joelletrad',
    linkedin: 'https://linkedin.com/in/joelletrad',
    pinterest: 'https://pinterest.com/joelletrad'
  },
  formspree: {
    contact: 'https://formspree.io/f/FORM_ID'
  }
};
```

### Navigation (`src/data/navigation.ts`)
```typescript
export const mainNav = [
  { key: 'home', href: (lang: Lang) => `/${lang}/` },
  { key: 'projects', href: (lang: Lang) => `/${lang}/projects` },
  { key: 'about', href: (lang: Lang) => `/${lang}/about` },
  { key: 'services', href: (lang: Lang) => `/${lang}/services` },
  { key: 'contact', href: (lang: Lang) => `/${lang}/contact` },
];
```

---

## 12. Accessibility Requirements

- Skip navigation link (first focusable element)
- All interactive elements keyboard-accessible
- Focus-visible: 2px outline, --accent color, 2px offset
- `prefers-reduced-motion`: disable all Motion.dev animations
- Images: meaningful alt text (project descriptions), decorative images get `alt=""`
- Form: labels linked to inputs, errors via aria-describedby, aria-invalid on error
- Language switcher: `aria-label="Select language"`, current marked with `aria-current`
- Theme toggle: `aria-label="Switch to dark/light mode"`
- Color contrast: WCAG 2.1 AA (4.5:1 normal text, 3:1 large text) — verified for both themes
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`

---

## 13. Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total JS Bundle | < 50KB (gzipped) |
| Font files | 4 files, < 200KB total |
| CLS | < 0.1 |

### Optimization Strategies
- Static output (0ms TTFB after CDN cache)
- Font subsetting (Latin + Arabic character sets only)
- Image: `<picture>` with AVIF + WebP + JPEG fallback
- Astro islands: `client:visible` (lazy hydration)
- No external scripts (no analytics initially — add later if needed)
- Preload: hero image + display fonts

---

## 14. File Structure

```
joelle-trad-archi/
├── public/
│   ├── fonts/
│   │   ├── cormorant-garant-600.woff2
│   │   ├── cormorant-garant-700.woff2
│   │   ├── dm-sans-400.woff2
│   │   ├── dm-sans-500.woff2
│   │   ├── noto-naskh-arabic-700.woff2
│   │   └── noto-sans-arabic-400.woff2
│   ├── projects/
│   │   ├── villa-mediterranee/
│   │   ├── loft-parisien/
│   │   └── ... (one folder per project)
│   ├── images/
│   │   ├── portrait.jpg
│   │   ├── workspace.jpg
│   │   └── hero-home.jpg
│   ├── icons/
│   │   ├── residential.svg
│   │   ├── commercial.svg
│   │   └── consultation.svg
│   └── favicon.svg
├── src/
│   ├── animations/
│   │   └── variants.ts
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── ProjectCard.astro
│   │   ├── ServiceCard.astro
│   │   ├── SectionHeading.astro
│   │   └── LanguageSwitcher.astro
│   ├── islands/
│   │   ├── HeroAnimation.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── ImageReveal.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ContactForm.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro (redirect → /fr/)
│   │   └── [lang]/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── services.astro
│   │       ├── contact.astro
│   │       └── projects/
│   │           ├── index.astro
│   │           └── [slug].astro
│   ├── content/
│   │   └── projects/
│   │       ├── villa-mediterranee.json
│   │       ├── loft-parisien.json
│   │       └── ... (seed data, 4-5 projects)
│   ├── data/
│   │   ├── siteConfig.ts
│   │   ├── navigation.ts
│   │   └── services.ts
│   ├── i18n/
│   │   ├── languages.ts
│   │   ├── utils.ts
│   │   ├── fr.json
│   │   ├── en.json
│   │   └── ar.json
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── prompt.md (this file)
```

---

## 15. Seed Content (Placeholder Projects)

Create 4-5 placeholder projects for development:

1. **Villa Mediterranee** — Residential, Beirut, 2024, 350m2
2. **Loft Parisien** — Residential, Paris, 2023, 120m2
3. **Boutique Hotel Lobby** — Hospitality, Byblos, 2024, 200m2
4. **Corporate Headquarters** — Commercial, Dubai, 2023, 800m2
5. **Penthouse Renovation** — Residential, Beirut, 2022, 250m2

Each project gets 4-5 placeholder images (from Unsplash: architecture, interior design queries).

---

## 16. RTL-Specific Requirements (Arabic)

- `<html dir="rtl" lang="ar">`
- All directional CSS uses logical properties:
  - `padding-inline-start` (not `padding-left`)
  - `margin-inline-end` (not `margin-right`)
  - Tailwind: `ps-`, `pe-`, `ms-`, `me-`
- Navigation: logo left → logo right, nav right → nav left
- Horizontal scroll gallery: reversed direction
- Icons with directional meaning (arrows): add `rtl:rotate-180`
- Numbers, emails, phone numbers: wrapped in `<span dir="ltr">`
- Font switch: Cormorant → Noto Naskh Arabic, DM Sans → Noto Sans Arabic
- Text alignment: start (not left)
- Pull quotes: border-inline-start (not border-left)

---

## 17. Deployment

### GitHub Pages (default)
- GitHub Actions workflow on push to `main`
- Build: `npm run build`
- Deploy: upload `dist/` to gh-pages

### Alternative: Vercel/Netlify
- Zero-config Astro deployment
- Automatic HTTPS, preview deploys for PRs

---

## 18. Future Enhancements (Not in v1)

- Blog/Journal section (markdown posts about design philosophy)
- Testimonials carousel
- Project before/after sliders
- Analytics (Plausible or Fathom — privacy-first)
- CMS integration (Decap CMS or Tina for non-technical content editing)
- Image gallery lightbox
