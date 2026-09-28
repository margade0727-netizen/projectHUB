---
name: Serene Sanctuary
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcac6'
  outline: '#859490'
  outline-variant: '#3c4947'
  primary: '#4fdbc8'
  primary-container: '#14b8a6'
  secondary: '#ffb2b9'
  secondary-container: '#891933'
  error: '#ffb4ab'
  error-container: '#93000a'
  background: '#0b1326'
typography:
  headline-xl: { fontFamily: Plus Jakarta Sans, fontSize: 32px, fontWeight: '600', lineHeight: 40px, letterSpacing: -0.02em }
  headline-lg: { fontFamily: Plus Jakarta Sans, fontSize: 26px, fontWeight: '600', lineHeight: 34px, letterSpacing: -0.015em }
  headline-md: { fontFamily: Plus Jakarta Sans, fontSize: 20px, fontWeight: '600', lineHeight: 28px, letterSpacing: -0.01em }
  body-lg: { fontFamily: Plus Jakarta Sans, fontSize: 17px, fontWeight: '400', lineHeight: 26px }
  body-md: { fontFamily: Plus Jakarta Sans, fontSize: 15px, fontWeight: '400', lineHeight: 22px }
  body-sm: { fontFamily: Plus Jakarta Sans, fontSize: 13px, fontWeight: '400', lineHeight: 18px }
  label-lg: { fontFamily: Inter, fontSize: 14px, fontWeight: '500', lineHeight: 20px }
  label-md: { fontFamily: Inter, fontSize: 12px, fontWeight: '500', lineHeight: 16px }
  label-sm: { fontFamily: Inter, fontSize: 11px, fontWeight: '600', lineHeight: 14px }
rounded: { sm: 0.5rem, DEFAULT: 1rem, md: 1.5rem, lg: 2rem, xl: 3rem, full: 9999px }
spacing: { gutter: 1rem, gutter-sm: 0.75rem, margin: 1.25rem, margin-sm: 1rem, space-xs: 0.25rem, space-sm: 0.5rem, space-md: 1rem, space-lg: 1.5rem, space-xl: 2.25rem }
---

## Brand & Style

This design system establishes a tranquil, protective environment tailored for anonymous peer-to-peer connection. It balances the discretion of confidential messaging with the warmth of genuine human presence. The visual style merges **Minimalism** with subtle **Glassmorphism**, relying on deep midnight surfaces, muted ambient glows, and spacious layouts to eliminate social pressure, urgency, and cognitive overload.

### Key Tenets

- **Calm & Unhurried:** Eliminate aggressive notification badges, hyper-gamified counters, and high-frequency visual noise.
- **Trust Through Discretion:** Reinforce privacy with soft edge transitions, shielded avatar containers, and low-contrast borders.
- **Organic Softness:** Use pill geometries and generous radii to evoke safety and touch-readiness.

## Colors

Use a dark-mode-first slate palette. The canvas is `#0b1326`; elevated surfaces are `#171f33`, `#222a3d`, and `#2d3449`. Primary teal (`#14b8a6` / `#4fdbc8`) communicates active presence and primary actions. Coral is reserved for emotional markers and exit actions. Primary reading text is `#dae2fd`; annotations use `#bbcac6`.

## Typography

Use Plus Jakarta Sans for headlines and conversation bodies, and Inter for system statuses, privacy meta-tags, and action labels. Keep the mobile headline scale at 32px or below, use generous body leading, and limit hierarchy weights to medium (500) and semi-bold (600).

## Layout & Spacing

Use a single-column, mobile-first container capped at 480px on wide displays. Standard phone margins are 20px, tightening to 16px below 360px. Conversation groups use 24px spacing; consecutive messages use 4px spacing. Floating input docks retain 16px bottom elevation plus safe-area space.

## Elevation & Depth

Avoid harsh directional shadows. Use translucent, blurred surfaces with low-contrast perimeter strokes:

- **Tier 0:** `#0b1326` base canvas.
- **Tier 1:** `#171f33` at 85% opacity, 16px blur, hairline `#334155` border.
- **Tier 2:** `#2d3449` at 90% opacity, 12px blur, and subtle teal ambient glow for user-initiated objects.
- **Tier 3:** `#0b1326` at 80% opacity, 24px blur, and a delicate top-edge highlight.

## Shapes

Micro UI uses pill geometry. Cards and modals use 16–24px radii. Chat bubbles use 16px on three corners and 4px on their anchor corner.

## Components

### Buttons

- **Primary Pill:** Teal `#14b8a6` fill, dark text, semi-bold, and a soft teal glow.
- **Subtle / Ghost:** Slate surface with fine border; text brightens on press.
- **Heart / Resonance Action:** Soft coral tint with coral iconography.

### Chips & Badges

- Status chips use a translucent slate background and muted text.
- Presence dots are 6px teal circles with a slow 3s non-distracting breath pulse.

### Inputs & Chat Bar

The message composer is a floating full-pill bar on Tier 3 elevation, with bright text and muted placeholders. The send action stays dormant until text exists.

### Cards & Shields

Connection and profile cards use 24px radius, a 1px translucent border, and algorithmic abstract gradient avatars rather than photos. Safety prompts use an unobtrusive teal left accent.

### Checkboxes & Radio Controls

Use circular nodes with smooth 200ms transitions. Selected states fill teal with a centered white check or dot.
