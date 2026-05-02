---
name: Nature Distilled
colors:
  surface: '#fff8f5'
  surface-dim: '#e0d8d5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ee'
  surface-container: '#f4ece8'
  surface-container-high: '#eee7e3'
  surface-container-highest: '#e9e1dd'
  on-surface: '#1e1b19'
  on-surface-variant: '#53433d'
  inverse-surface: '#33302d'
  inverse-on-surface: '#f7efeb'
  outline: '#86736c'
  outline-variant: '#d8c2ba'
  surface-tint: '#8e4d31'
  primary: '#8b4b2f'
  on-primary: '#ffffff'
  primary-container: '#a86245'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb598'
  secondary: '#556428'
  on-secondary: '#ffffff'
  secondary-container: '#d8eb9f'
  on-secondary-container: '#5b6a2d'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb598'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#71361d'
  secondary-fixed: '#d8eb9f'
  secondary-fixed-dim: '#bcce86'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3e4c12'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fff8f5'
  on-background: '#1e1b19'
  surface-variant: '#e9e1dd'
typography:
  headline-xl:
    fontFamily: Cinzel
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-lg:
    fontFamily: Cinzel
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Cinzel
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Josefin Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Josefin Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Josefin Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-edge: 64px
  section-gap: 128px
---

## Brand & Style

This design system embodies the "Nature Distilled" philosophy, creating a digital sanctuary for Joelle Trad’s interior architecture. The brand personality is one of quiet authority, where luxury is felt through texture and proportion rather than excess. It targets a sophisticated clientele who values the intersection of organic materials and classical Roman elegance.

The visual style is a blend of **Minimalism** and **Tactile** design. It prioritizes generous whitespace and a rigorous architectural grid, while introducing a 3-5% paper grain texture to the background to evoke the feeling of high-end stationery or raw stone. The emotional response is intended to be serene, grounded, and curated, positioning the UI as a neutral gallery frame that elevates the photography of physical spaces.

## Colors

The color palette is derived from natural earth pigments. The primary background uses a warm Cream (#F5F0E1), providing a softer, more historical feel than clinical white. Pure White (#FFFFFF) is reserved for surface containers and interactive elements to create subtle depth.

The accent colors—Terracotta and Olive—are used to denote craftsmanship and life. Terracotta is the primary action color, while Olive serves as a secondary accent for subtle highlights or botanical-linked content. Gold is used sparingly for rare, high-value calls to action, maintaining its status as a precious metal. Text is rendered in a "near-black" Stone (#1C1917) to ensure high readability without the harshness of pure black.

## Typography

This design system utilizes a high-contrast typographic pairing to reflect the brand's architectural focus. **Cinzel** is used for headlines, bringing Roman elegance and lapidary proportions. It should always be set with generous letter-spacing to enhance its classical feel.

**Josefin Sans** provides geometric clarity for body copy and UI labels. Its light weights and verticality complement the stone-like qualities of the headlines. Maintain a strict hierarchy where headlines are treated as structural elements of the page, often isolated with significant padding to allow the letterforms to breathe.

## Layout & Spacing

The layout follows a **Fixed grid** philosophy within a 1440px container, utilizing a 12-column system. The "Nature Distilled" aesthetic requires a radical commitment to whitespace; section gaps are unusually large (128px+) to ensure that no two architectural projects compete for the user's attention.

The spacing rhythm is based on an 8px unit, but is applied with a "less is more" approach. Content should be centered or offset to create an asymmetrical, editorial feel reminiscent of a luxury architecture monograph. Photography should frequently break the gutter to touch the edge of the screen or sit within wide margins to emphasize its importance.

## Elevation & Depth

Depth in this design system is achieved through **Tonal layering** and texture rather than shadows. The primary depth mechanism is the contrast between the grain-textured Cream background and the crisp, flat White surfaces. 

Shadows are almost entirely avoided. Instead, visual hierarchy is established through:
1. **The Paper Grain Texture:** A subtle 3-5% overlay that gives the background a physical presence.
2. **Low-contrast Outlines:** A 1px border in a slightly darker cream or muted terracotta used to define boundaries without adding visual weight.
3. **Z-index Transitions:** The navigation header transitions from transparent to a solid White surface on scroll, creating a clear functional separation between the global menu and the content gallery.

## Shapes

The shape language is strictly **Sharp (0)**. Inspired by architectural plans and stone-cutting, all UI elements—including buttons, input fields, and image containers—feature 90-degree corners. This reinforces the precision and structural integrity of Joelle Trad’s work. Any departure from sharp corners would dilute the "distilled" and "architectural" nature of the brand.

## Components

### Buttons
Buttons are primary call-to-action drivers. The standard state features a **Terracotta (#C67B5C)** background with White text, using the all-caps Label-sm typography style. There is no border radius. Hover states should involve a subtle shift to a deeper terracotta or the addition of a Gold underline.

### Inputs
Input fields follow a minimal aesthetic. They consist of a single bottom border (1px) in Near-black or Terracotta, with no side or top borders. The placeholder text uses Josefin Sans in a muted weight.

### Navigation
The header is fixed at the top of the viewport. Initially, it is transparent to allow hero photography to fill the screen. Upon scrolling, it transitions via a smooth CSS opacity change to a solid White surface with a subtle 1px bottom border in Cream.

### Cards & Gallery
Project cards are defined by their photography. Typography (Project Title in Cinzel) should sit below the image with significant padding. Images should use a "zoom-on-hover" effect within their sharp-edged containers to provide a sense of tactile discovery.

### Rare CTAs
For high-conversion moments (e.g., "Book a Consultation"), use a Gold (#D4AF37) border or text link to differentiate from standard architectural navigation.