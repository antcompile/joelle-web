# Joelle Trad — Interior Architecture Website

## Context

Joelle Trad is a freelance interior architect specializing in both residential and commercial projects, targeting an international/European clientele. She needs a prestigious, gallery-like portfolio website that communicates luxury, craftsmanship, and refined taste. The site will use the same Astro + Tailwind stack proven in the danysbees project, enhanced with Motion.dev animations for a polished, immersive experience.

## Tech Stack

- **Astro 5** — static site generator with islands architecture
- **Tailwind CSS 4** — CSS-first utility configuration
- **TypeScript** — type-safe throughout
- **Motion.dev** (motion for React) — scroll animations, transitions, hover effects
- **React** (islands only) — used exclusively where Motion.dev requires client-side JS
- **Formspree** — contact form submission handling (no backend)
- **Static deployment** — GitHub Pages, Vercel, or Netlify
- **Self-hosted fonts** — no external CDN dependencies
- **PWA optional** — service worker for offline caching

## Internationalization

- **Default language:** French
- **Supported:** French (fr), English (en), Arabic (ar)
- **URL structure:** `/fr/`, `/en/`, `/ar/` — root `/` redirects to `/fr/`
- **Translation files:** `src/i18n/{fr,en,ar}.json` — namespace-organized
- **RTL support:** Arabic gets `dir="rtl"` on `<html>`, logical CSS properties (`ps-`, `ms-`, `me-`, `pe-`), mirrored layouts
- **Language switcher:** Header component — FR | EN | عربي
- **Data model:** All content uses `Record<Lang, string>` pattern for multilingual fields
- **Arabic fonts:** Noto Naskh Arabic (serif headlines), Noto Sans Arabic (body)

## Theme System

**Style:** "Nature Distilled" (UI/UX Pro Max recommendation — rated Excellent performance, WCAG AA accessible)

Blends the Architecture/Interior palette (minimal black + gold accent) with the Nature Distilled style (terracotta, sand, olive, cream). Inspired by Norm Architects' "soft minimalism" and Vincent Van Duysen's material warmth.

### Light Mode (Default)

```
--bg:              #F5F0E1  (soft cream — Nature Distilled)
--surface:         #FFFFFF  (white cards/overlays)
--surface-alt:     #EDE7D9  (warm sand section backgrounds)
--text-primary:    #1C1917  (near-black, warm — Architecture palette)
--text-secondary:  #57504A  (warm gray, readable)
--text-muted:      #8C8279  (captions, metadata)
--accent:          #C67B5C  (terracotta — Nature Distilled primary)
--accent-hover:    #A8654A  (deeper terracotta on interaction)
--accent-secondary:#6B7B3C  (olive green — organic accent)
--accent-gold:     #D4AF37  (gold — Architecture/Interior CTA, used sparingly)
--border:          #D4C4A8  (sand beige border — Nature Distilled)
--footer-bg:       #1C1917  (warm near-black)
```

### Dark Mode (Toggle)

```
--bg:              #1C1917  (warm charcoal)
--surface:         #2A2522  (dark card)
--surface-alt:     #342E2A  (elevated surface)
--text-primary:    #F5F0E1  (soft cream)
--text-secondary:  #BFB5A8  (muted warm)
--text-muted:      #7A6F65  (captions)
--accent:          #D4896A  (lighter terracotta for dark contrast)
--accent-hover:    #E09A7A  (brighter on interaction)
--accent-secondary:#8FA872  (lighter olive)
--accent-gold:     #E5C553  (brighter gold for dark backgrounds)
--border:          #3D3632  (subtle warm border)
--footer-bg:       #0F0D0B  (deepest charcoal)
```

### Design Tokens & Rationale

| Choice | Source | Why |
|--------|--------|-----|
| Terracotta #C67B5C | Nature Distilled style | Warm, organic, evokes clay/earth materials |
| Sand #D4C4A8 | Nature Distilled | Natural warmth without competing with imagery |
| Olive #6B7B3C | Nature Distilled | Secondary organic accent for balance |
| Gold #D4AF37 | Architecture/Interior palette | Prestige CTA, used sparingly (CTAs only) |
| Cream #F5F0E1 | Nature Distilled | Softer than white, gallery-wall warmth |
| Near-black #1C1917 | Luxury/Premium palette | High contrast text without harsh pure black |

### Theme Toggle Behavior
- Sun/moon icon in header (React island with Motion.dev rotation)
- Respects `prefers-color-scheme` on first visit
- Stored in `localStorage` key: `theme`
- Inline `<script>` in `<head>` to prevent FOUC (Flash of Unstyled Content)
- Grain texture overlay (SVG, 3-5% opacity) on --bg surfaces

## Typography

**Recommended by UI/UX Pro Max:** Cinzel + Josefin Sans (Real Estate Luxury pairing).
**Alternative:** Cormorant + Montserrat (Luxury Serif pairing).
**Selected:** Cinzel (architectural gravitas, Roman inscriptional feel) + Josefin Sans (geometric elegance, light weight for body).

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Headlines (LTR) | Cinzel | 500, 600, 700 | Georgia, serif |
| Body (LTR) | Josefin Sans | 300, 400, 500 | system-ui, sans-serif |
| Headlines (AR) | Noto Naskh Arabic | 700 | serif |
| Body (AR) | Noto Sans Arabic | 400, 500 | sans-serif |

### Type Scale

- Hero headline: clamp(3rem, 6vw, 6rem) — 48px to 96px
- Section headline: clamp(2.5rem, 4vw, 3.5rem) — 40px to 56px
- Project title: clamp(1.75rem, 3vw, 2.5rem) — 28px to 40px
- Body: 1rem–1.125rem (16–18px, minimum 16px on mobile per UX guidelines)
- Caption/meta: 0.8125rem–0.875rem (13–14px)
- Letter-spacing on logo: 0.2em
- Line height: 1.5–1.75 (body, per UI/UX Pro Max guidelines), 1.2 (headlines)
- Line length: 65–75 characters max per line

## Pages & Sections

### Homepage (`/[lang]/`)

**Section 1 — Hero:**
- Full viewport height
- Background: featured project image with warm gradient overlay
- Animated headline: "Architecture Interieure" / "Interior Architecture" (word-by-word reveal)
- Subtitle: Joelle's tagline
- Scroll indicator (animated chevron)
- Navigation overlaid (transparent)

**Section 2 — Selected Projects:**
- Horizontal scroll gallery (desktop) / vertical stack (mobile)
- 3-5 featured projects as large cards
- On hover: image subtle scale (1.02), project name + category overlay fades in
- Staggered entrance animation on scroll
- "View All Projects" link at end

**Section 3 — About Teaser:**
- Two-column layout (text left, image right)
- Large serif pull-quote from Joelle
- Brief intro paragraph
- CTA: "En savoir plus" / "Learn more" → About page
- Image: portrait or workspace shot with subtle parallax

**Section 4 — Services:**
- Three columns: Residential / Commercial / Consultation
- Minimal line icons (terracotta stroke)
- Short 2-sentence descriptions per service
- Staggered fade-in on scroll
- CTA to Services page

**Section 5 — Contact CTA:**
- Full-width section with terracotta background (light) or accent surface (dark)
- Large serif headline: "Creons quelque chose de remarquable"
- Email link + "Get in Touch" button
- Subtle background texture (grain overlay like danysbees)

**Footer:**
- Dark warm charcoal (both themes)
- Logo + tagline
- Quick links (all pages)
- Social: Instagram, LinkedIn, Pinterest (essential for architects)
- Email + phone
- Language switcher (secondary placement)
- Copyright

### Projects Page (`/[lang]/projects/`)

- Category filter: All / Residential / Commercial / Hospitality (animated tab indicator)
- Masonry grid layout (2-col desktop, 1-col mobile)
- Cards: project thumbnail, name, location, year
- Staggered scroll-reveal (items enter with fade + rise)
- Hover: image scale 1.02, overlay with project name
- Click → project detail page

### Project Detail (`/[lang]/projects/[slug]`)

- Full-bleed hero image (16:9 or custom aspect)
- Project metadata bar: Location | Year | Scope | Area (m2)
- Image gallery: scrolling sequence with subtle parallax between images
- Brief project narrative (2-3 paragraphs)
- Before/after slider (if applicable, via React island)
- "Next Project" navigation at bottom (with preview thumbnail)
- Back to projects link

### About Page (`/[lang]/about`)

- Large portrait of Joelle (half-width)
- Philosophy statement in large serif typography (animated reveal)
- Sections: Background, Philosophy, Approach
- Process visualization (4-5 steps with connecting line)
- Optional: awards, press mentions, education
- CTA to contact

### Services Page (`/[lang]/services`)

- Three service categories with detailed descriptions:
  - **Residential:** Homes, apartments, villas
  - **Commercial:** Offices, retail, showrooms
  - **Consultation:** Color consulting, space planning, material selection
- Per service: scope description, deliverables, typical timeline
- Process section: 5 steps (Discovery → Concept → Design → Execution → Handover)
- Animated step-by-step with connecting line
- CTA to contact

### Contact Page (`/[lang]/contact`)

- Two-column layout: form left, info right
- Form fields:
  - Name (text input)
  - Email (email input)
  - Project type (dropdown: Residential / Commercial / Consultation / Other)
  - Message (textarea)
  - Submit button (terracotta, full-width)
- Submission: Formspree POST
- Success state: inline confirmation message with checkmark animation
- Error state: inline error with retry option
- Info card (right column):
  - Email address
  - Phone (optional)
  - Location/availability
  - Social links (Instagram, LinkedIn, Pinterest)
  - Response time note: "Typically responds within 48h"

## Animation Strategy (Motion.dev)

### Library Setup

- `motion` package (React) used within Astro islands (`client:visible` or `client:load`)
- Shared animation variants in `src/animations/variants.ts`
- Respect `prefers-reduced-motion` — disable all non-essential animation

### Animation Inventory

| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Hero headline | Word-by-word fade+rise | Page load | 0.8s stagger 0.1s | easeOut |
| Navigation | Fade from top | Load (0.5s delay) | 0.6s | easeOut |
| Scroll indicator | Gentle Y bounce | Continuous | 2s loop | easeInOut |
| Project cards | Stagger fade+rise | inView | 0.7s stagger 0.15s | easeOut |
| Image hover | Scale 1 → 1.02 | Hover | 0.4s | easeOut |
| Image reveal | clipPath wipe (bottom→top) | inView | 0.9s | easeInOut |
| Service cards | Stagger from left | inView | 0.6s stagger 0.1s | easeOut |
| About quote | opacity + letterSpacing | inView | 1.0s | easeOut |
| Page transition | Fade + 20px Y slide | Navigation | 0.4s | easeInOut |
| Form success | Scale + fade checkmark | Submit success | 0.5s | spring |
| Theme toggle | Rotate icon | Click | 0.3s | spring |
| Mobile menu | Full-screen slide from right | Click | 0.4s | easeOut |

### Motion Principles

- Entrance animations: always `easeOut` (fast start, gentle stop)
- Hover animations: 0.3–0.4s, subtle (never jarring)
- No animation below 768px viewport for performance
- Stagger delays: 0.1–0.15s between siblings
- InView threshold: 0.2 (triggers when 20% visible)
- Never animate layout-causing properties (width, height) — use transform/opacity only

## Component Architecture

### Layout
- `BaseLayout.astro` — HTML shell, theme script, font preloading, i18n attributes

### Islands (React + Motion.dev)
- `HeroAnimation.tsx` — word-by-word headline reveal
- `ProjectGallery.tsx` — horizontal scroll gallery with hover effects
- `ScrollReveal.tsx` — reusable wrapper for inView animations
- `ImageReveal.tsx` — clip-path image entrance
- `MobileMenu.tsx` — animated full-screen menu
- `ThemeToggle.tsx` — theme switch with icon rotation
- `ContactForm.tsx` — form with submission + success animation

### Astro Components (Static)
- `Header.astro` — navigation, language switcher, theme toggle island
- `Footer.astro` — dark footer grid
- `ProjectCard.astro` — project thumbnail card
- `ServiceCard.astro` — service description card
- `SectionHeading.astro` — consistent section headers
- `SEO.astro` — meta tags, OG, hreflang, JSON-LD
- `LanguageSwitcher.astro` — FR | EN | عربي

### Data Layer
- `src/content/projects/` — project JSON files (multilingual fields)
- `src/content/testimonials/` — (optional future)
- `src/data/siteConfig.ts` — brand info, contact, social links, Formspree IDs
- `src/data/navigation.ts` — nav items with localized hrefs
- `src/data/services.ts` — service descriptions

## Content Model

### Project Schema
```typescript
{
  id: string;
  slug: string;
  data: {
    title: Record<Lang, string>;
    description: Record<Lang, string>;
    location: Record<Lang, string>;
    category: 'residential' | 'commercial' | 'hospitality';
    year: number;
    area_sqm: number;
    scope: Record<Lang, string>;
    images: string[];        // paths in /public/projects/[slug]/
    featured: boolean;       // shown on homepage
    order: number;           // display order
  }
}
```

### Translation Schema (per language JSON)
```
nav.*           — navigation labels
hero.*          — homepage hero content
about.*         — about page content
services.*      — service descriptions
contact.*       — contact page labels + form
common.*        — shared labels (back, next, loading, etc.)
footer.*        — footer content
projects.*      — project page labels (filter, view, etc.)
```

## Accessibility

- Skip link (visually hidden, focus-visible)
- `prefers-reduced-motion` respected — animations disabled
- Focus-visible outlines (2px terracotta)
- Semantic HTML (nav, main, article, section, header, footer)
- ARIA labels on interactive elements (menu toggle, theme toggle, language switcher)
- Alt text on all images
- Color contrast: WCAG AA minimum on all text (verified for both themes)
- Form labels associated with inputs, error messages linked via aria-describedby

## Performance

- Static output (no SSR runtime)
- Self-hosted fonts (4 files max: Cormorant 600+700, DM Sans 400+500)
- Font preloading via `<link rel="preload">`
- Lazy loading all below-fold images
- `client:visible` on animation islands (no JS until in viewport)
- Image optimization: WebP with AVIF fallback (via Astro image)
- Minimal JS bundle: only Motion.dev + React for islands

## Competitive References & Insights

| Site | Key Design Patterns to Borrow |
|------|-------------------------------|
| Norm Architects (normcph.com) | "Soft minimalism" philosophy: grid-based modular layout, project cards with category tags + dates, breathing room between elements, spaced letter headings (e.g., "R e c e n t"), content hierarchy over flourish, project photography as hero |
| Vincent Van Duysen (vincentvanduysen.com) | Hierarchical category navigation (Interior/Architecture/Products), minimal palette (neutrals + earthy), generous white space, gateway strategy — curated navigation flow |
| Faye Toogood (fayetoogood.com) | Gateway landing page strategy, centered logo as visual anchor, intentional routing to portfolio, social integration (Instagram direct link) |
| Studio375 (375.studio) | Awwwards Site of the Day — scroll-triggered image reveals, editorial pacing, developer-awarded animation quality |
| DOSS (doss.com) | Awwwards nominee — architectural layout |

### Competitor Patterns Synthesized

1. **Navigation:** Category-based (by project type), minimal items, transparent over hero → solid on scroll
2. **Homepage:** Full-bleed hero image → project grid/gallery → brief about → contact CTA
3. **Project presentation:** Large imagery first, text secondary, category filtering, year + location metadata
4. **Color approach:** Let photography dominate; use neutral/warm backgrounds that don't compete with project images
5. **Typography:** High-contrast serif + sans pairings, generous letter-spacing on headings
6. **Animation:** Subtle scroll-triggered reveals, NO aggressive/decorative animation — let content breathe
7. **Overall feel:** Confident restraint — prestigious sites show LESS, not more

## UI/UX Pro Max Design Intelligence (Applied)

The following recommendations were validated against the UI/UX Pro Max database:

### Validated Choices
- **Typography:** Cinzel + Josefin Sans — confirmed as top pairing for "real estate, luxury, architecture, interior design"
- **Landing Pattern:** Portfolio Grid (Hero → Masonry Grid → About → Contact) + Horizontal Scroll Journey elements
- **Color Strategy:** Neutral background (let work shine), minimal accent usage — adapted from luxury/premium to warm earthy
- **Anti-patterns to avoid:** Flat design without depth, text-heavy pages, emojis as icons, missing cursor-pointer, layout-shifting hovers

### UX Guidelines Enforced
- Touch targets: minimum 44x44px
- Color contrast: 4.5:1 minimum (WCAG AA)
- Animation duration: 150-300ms for micro-interactions
- Only animate transform/opacity (GPU-composited)
- `prefers-reduced-motion`: HIGH severity — must respect
- Smooth scroll: `scroll-behavior: smooth` on html
- No continuous animations except loading indicators
- Focus-visible states on all interactive elements
- Line height: 1.5-1.75 for body text
- Line length: 65-75 characters max

### Pre-Delivery Checklist (from UI/UX Pro Max)
- [ ] No emojis used as icons (use SVG: Lucide icons)
- [ ] All icons from consistent set (Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Dark mode: text contrast verified separately
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbar
- [ ] No horizontal scroll on mobile
- [ ] Touch targets 44x44px minimum

### Design System File
Generated at: `design-system/joelle-trad/MASTER.md` — use as reference during implementation.

## Implementation Prerequisites

1. UI/UX Pro Max skill: already installed (`.claude/skills/ui-ux-pro-max/`)
2. Install Motion.dev: `npm install motion` (React animation library)
3. Set up Formspree account and create form endpoint for contact submissions
4. Download self-hosted fonts: Cinzel (500, 600, 700) + Josefin Sans (300, 400, 500) + Noto Arabic variants

## Verification Plan

1. `npm run dev` — confirm all pages render
2. Navigate all routes in FR, EN, AR — verify translations and RTL layout
3. Toggle dark/light theme on each page — verify contrast and readability
4. Check animations play on scroll (desktop Chrome/Firefox/Safari)
5. Verify `prefers-reduced-motion` disables animations
6. Test mobile nav (hamburger → fullscreen menu)
7. Submit contact form → verify Formspree receives submission
8. Lighthouse audit: target 95+ performance, 100 accessibility
9. Test on real mobile device (iOS Safari, Android Chrome)
10. Validate HTML (no ARIA errors, proper landmark structure)
