# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Joelle Trad — Interior Architecture Portfolio
**Generated:** 2026-05-02
**Style:** Nature Distilled + Architecture/Interior
**Category:** Luxury Portfolio / Architecture

---

## Global Rules

### Color Palette (Light Mode)

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Background | `#F5F0E1` | `--bg` | Soft cream (Nature Distilled) |
| Surface | `#FFFFFF` | `--surface` | White cards/overlays |
| Surface Alt | `#EDE7D9` | `--surface-alt` | Warm sand sections |
| Text Primary | `#1C1917` | `--text-primary` | Warm near-black |
| Text Secondary | `#57504A` | `--text-secondary` | Warm gray, readable |
| Text Muted | `#8C8279` | `--text-muted` | Captions, metadata |
| Accent (Terracotta) | `#C67B5C` | `--accent` | Primary interactive color |
| Accent Hover | `#A8654A` | `--accent-hover` | Deeper on interaction |
| Secondary (Olive) | `#6B7B3C` | `--accent-secondary` | Organic accent |
| Gold CTA | `#D4AF37` | `--accent-gold` | Prestige CTA, sparingly |
| Border | `#D4C4A8` | `--border` | Sand beige border |
| Footer | `#1C1917` | `--footer-bg` | Warm charcoal |

### Color Palette (Dark Mode)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background | `#1C1917` | `--bg` |
| Surface | `#2A2522` | `--surface` |
| Surface Alt | `#342E2A` | `--surface-alt` |
| Text Primary | `#F5F0E1` | `--text-primary` |
| Text Secondary | `#BFB5A8` | `--text-secondary` |
| Text Muted | `#7A6F65` | `--text-muted` |
| Accent | `#D4896A` | `--accent` |
| Accent Hover | `#E09A7A` | `--accent-hover` |
| Secondary | `#8FA872` | `--accent-secondary` |
| Gold CTA | `#E5C553` | `--accent-gold` |
| Border | `#3D3632` | `--border` |
| Footer | `#0F0D0B` | `--footer-bg` |

### Typography

- **Heading Font:** Cinzel (inscriptional, architectural gravitas)
- **Body Font:** Josefin Sans (geometric elegance, excellent readability)
- **Arabic Heading:** Noto Naskh Arabic
- **Arabic Body:** Noto Sans Arabic
- **Mood:** luxury, elegant, architectural, real estate, sophisticated, premium
- **Self-hosted:** All fonts served from `/public/fonts/` (no CDN)

**Tailwind Config:**
```javascript
fontFamily: {
  serif: ['Cinzel', 'Georgia', 'serif'],
  sans: ['Josefin Sans', 'system-ui', 'sans-serif'],
  'ar-serif': ['Noto Naskh Arabic', 'serif'],
  'ar-sans': ['Noto Sans Arabic', 'sans-serif']
}
```

### Type Scale (Fluid)

| Token | Value | Usage |
|-------|-------|-------|
| Hero | `clamp(3rem, 6vw, 6rem)` | Homepage hero headline |
| Section | `clamp(2.5rem, 4vw, 3.5rem)` | Section headings |
| Project | `clamp(1.75rem, 3vw, 2.5rem)` | Project titles |
| Body | `1rem–1.125rem` | Paragraphs (min 16px mobile) |
| Caption | `0.8125rem–0.875rem` | Metadata, labels |

### Spacing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Component padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |
| `--space-4xl` | `80px` / `5rem` | Section vertical |
| `--space-5xl` | `120px` / `7.5rem` | Major breaks |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(28,25,23,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(28,25,23,0.08)` | Cards |
| `--shadow-lg` | `0 10px 15px rgba(28,25,23,0.1)` | Dropdowns, elevated |
| `--shadow-xl` | `0 20px 25px rgba(28,25,23,0.12)` | Hero images, featured |

---

## Component Specs

### Buttons

```css
/* Primary CTA (Gold) — use sparingly */
.btn-primary {
  background: var(--accent-gold);
  color: #1C1917;
  padding: 14px 28px;
  border-radius: 0;  /* sharp edges = architectural */
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #BFA030;
  transform: translateY(-1px);
}

/* Secondary Button (Terracotta outline) */
.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--accent);
  padding: 14px 28px;
  border-radius: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.875rem;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--accent);
  color: #FFFFFF;
}

/* Text Link */
.text-link {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 200ms ease;
  cursor: pointer;
}

.text-link:hover {
  border-bottom-color: var(--accent);
}
```

### Cards (Project)

```css
.project-card {
  background: var(--surface);
  overflow: hidden;
  transition: all 300ms ease;
  cursor: pointer;
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
}

.project-card:hover img {
  transform: scale(1.02);
}

.project-card img {
  transition: transform 400ms ease-out;
}
```

### Inputs (Contact Form)

```css
.form-input {
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid var(--border);
  background: transparent;
  font-size: 16px;
  font-family: 'Josefin Sans', sans-serif;
  color: var(--text-primary);
  transition: border-color 200ms ease;
  width: 100%;
}

.form-input:focus {
  border-bottom-color: var(--accent);
  outline: none;
}

.form-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted);
}
```

---

## Style Guidelines

**Style:** Nature Distilled — muted earthy tones, organic materials feel, warm textures, artisan quality

**Keywords:** Terracotta, sand, olive, warmth, organic, handmade warmth, natural textures, gallery

**Key Effects:**
- Subtle parallax on images (natural easing, ease-out)
- Texture/grain overlays (3-5% opacity SVG noise)
- Soft shadows (warm-tinted, never cool gray)
- Scroll-triggered reveals (fade + rise)
- 150-300ms micro-interactions

### Page Pattern: Portfolio Grid + Horizontal Scroll Journey

**Section Order:**
1. Hero (Name/Role + featured project image)
2. Selected Projects (horizontal scroll gallery)
3. About Teaser (pull-quote + portrait)
4. Services Strip (3 columns)
5. Contact CTA (terracotta background)

**CTA Placement:** Project Card Hover + Footer Contact + Section CTAs

**Color Strategy:** Neutral cream background lets project photography shine. Accent colors used only for interactive elements and CTAs.

---

## Anti-Patterns (Do NOT Use)

- ❌ Flat design without depth — use subtle shadows and grain texture
- ❌ Text-heavy pages — imagery first, text secondary
- ❌ Emojis as icons — use Lucide SVG icons exclusively
- ❌ Missing `cursor: pointer` — all clickable elements must have it
- ❌ Layout-shifting hovers — only transform + opacity
- ❌ Low contrast text — 4.5:1 minimum ratio (WCAG AA)
- ❌ Instant state changes — always transition 150-300ms
- ❌ Invisible focus states — 2px terracotta outline on focus-visible
- ❌ Pure black (#000000) — use warm near-black (#1C1917)
- ❌ Cool grays — only warm-tinted neutrals
- ❌ Rounded buttons — use sharp edges (architectural aesthetic)
- ❌ Decorative continuous animations — only for loading indicators
- ❌ Horizontal scroll on mobile — content must fit viewport width

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use Lucide SVG)
- [ ] All icons from Lucide, consistent 24x24 viewBox
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Dark mode: text contrast 4.5:1 minimum
- [ ] Focus states visible (2px --accent outline)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbar (account for height)
- [ ] No horizontal scroll on mobile
- [ ] Touch targets 44x44px minimum
- [ ] Line height 1.5-1.75 for body text
- [ ] Line length 65-75 characters max
- [ ] Body text minimum 16px on mobile
- [ ] `scroll-behavior: smooth` on html
- [ ] Grain texture visible but subtle (3-5%)
- [ ] Self-hosted fonts loading correctly
- [ ] RTL layout correct in Arabic (`dir="rtl"`, logical properties)
- [ ] Theme toggle works without FOUC
