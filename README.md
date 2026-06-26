# NeuralFlow AI 🚀

A premium AI-powered SaaS landing page built for **FrontEnd Battle 3.0** organized by the **Web & Design Society, IIT Bhubaneswar**.

<p align="center">
  <a href="https://github.com/spoorti-k-d/iitbbs-frontend-battle-neuralflow" target="_blank" rel="noreferrer">
    <img alt="NeuralFlow AI" src="https://img.shields.io/badge/NeuralFlow-AI%20SaaS-FFC801?style=flat&logo=react" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-purple?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

---

## Project Overview

NeuralFlow AI is a fast, polished landing page implemented as a single-page React app (Vite + TypeScript). It includes a **dynamic pricing matrix** with **currency + monthly/annual billing logic**, a **Bento Grid that transforms into a mobile Accordion**, and **scroll-reveal animations** powered by `IntersectionObserver`.

The page also ships with a dedicated SEO setup in `index.html` (Open Graph, Twitter cards, and `application/ld+json` structured data).

---

## Live Demo

🔗 **Deployment URL:** `https://asset-manager--ignitron2025.replit.app/`

---

## Features

- **Hero Section** (copy, social proof, and a dashboard-style preview)
- **Feature Showcase**
- **Bento Grid** (desktop)
- **Mobile Accordion** (responsive transformation at `768px`)
- **Dynamic Pricing Engine** (tier × currency × monthly/annual)
- **Currency Switcher** (USD / EUR / INR)
- **Annual Billing Logic** (20% annual discount)
- **Testimonials**
- **CTA**
- **Footer**
- **Responsive Design** (layout changes via CSS breakpoints)
- **SEO** (title/description, canonical, OG, Twitter, robots, schema.org JSON-LD)
- **Accessibility** (ARIA labels/attributes for navigation, controls, and pricing/toggles)
- **Animations**
  - Scroll reveal via `IntersectionObserver`
  - CSS keyframe animations
  - Pricing value flash animation on updates
- **Performance Optimizations** (notably for pricing)

---

## Tech Stack

Generated from `package.json` / repo configuration:

| Area | What’s used |
|---|---|
| Frontend | React + TypeScript |
| Bundler | Vite |
| Workspace/Package Manager | **pnpm workspaces** |
| Styling | CSS (with Tailwind present in deps, and `index.css` is hand-written CSS) |
| UI/Utilities | Project includes a `src/components/ui/*` component library folder |

---

## Folder Structure

Exact folder tree from the repository (as observed):

```text
.
├─ artifacts/
│  ├─ api-server/
│  │  ├─ build.mjs
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ src/
│  │     ├─ app.ts
│  │     ├─ index.ts
│  │     ├─ lib/
│  │     │  ├─ .gitkeep
│  │     │  └─ logger.ts
│  │     ├─ middlewares/
│  │     │  └─ .gitkeep
│  │     └─ routes/
│  │        ├─ health.ts
│  │        └─ index.ts
│  ├─ ai-platform/
│  │  ├─ components.json
│  │  ├─ index.html
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  ├─ vite.config.ts
│  │  ├─ public/
│  │  │  ├─ favicon.svg
│  │  │  ├─ opengraph.jpg
│  │  │  ├─ robots.txt
│  │  │  └─ svgs/
│  │  │     ├─ arrow-path.svg
│  │  │     ├─ arrow-trending-up.svg
│  │  │     ├─ chart-pie.svg
│  │  │     ├─ chevron-down.svg
│  │  │     ├─ chevron-left.svg
│  │  │     ├─ chevron-right.svg
│  │  │     ├─ chevron-up-solid.svg
│  │  │     ├─ chevron-up.svg
│  │  │     ├─ cog-8-tooth.svg
│  │  │     ├─ cube-16-solid.svg
│  │  │     ├─ link-solid.svg
│  │  │     ├─ link.svg
│  │  │     ├─ search.svg
│  │  │     └─ x-mark.svg
│  │  └─ src/
│  │     ├─ App.tsx
│  │     ├─ index.css
│  │     ├─ main.tsx
│  │     ├─ components/
│  │     │  ├─ BentoFeatures.tsx
│  │     │  ├─ CTA.tsx
│  │     │  ├─ Features.tsx
│  │     │  ├─ Footer.tsx
│  │     │  ├─ Header.tsx
│  │     │  ├─ Hero.tsx
│  │     │  ├─ Partners.tsx
│  │     │  ├─ Pricing.tsx
│  │     │  └─ Testimonials.tsx
│  │     │  └─ ui/
│  │     │     ├─ accordion.tsx
│  │     │     ├─ alert-dialog.tsx
│  │     │     ├─ alert.tsx
│  │     │     ├─ aspect-ratio.tsx
│  │     │     ├─ avatar.tsx
│  │     │     ├─ badge.tsx
│  │     │     ├─ breadcrumb.tsx
│  │     │     ├─ button-group.tsx
│  │     │     ├─ button.tsx
│  │     │     ├─ card.tsx
│  │     │     ├─ carousel.tsx
│  │     │     ├─ chart.tsx
│  │     │     ├─ checkbox.tsx
│  │     │     ├─ collapsible.tsx
│  │     │     ├─ command.tsx
│  │     │     ├─ context-menu.tsx
│  │     │     ├─ dialog.tsx
│  │     │     ├─ drawer.tsx
│  │     │     ├─ dropdown-menu.tsx
│  │     │     ├─ empty.tsx
│  │     │     ├─ field.tsx
│  │     │     ├─ form.tsx
│  │     │     ├─ hover-card.tsx
│  │     │     ├─ input-group.tsx
│  │     │     ├─ input-otp.tsx
│  │     │     ├─ input.tsx
│  │     │     ├─ item.tsx
│  │     │     ├─ kbd.tsx
│  │     │     ├─ label.tsx
│  │     │     ├─ menubar.tsx
│  │     │     ├─ navigation-menu.tsx
│  │     │     ├─ pagination.tsx
│  │     │     ├─ popover.tsx
│  │     │     ├─ progress.tsx
│  │     │     ├─ radio-group.tsx
│  │     │     ├─ resizable.tsx
│  │     │     ├─ scroll-area.tsx
│  │     │     ├─ select.tsx
│  │     │     ├─ separator.tsx
│  │     │     ├─ sheet.tsx
│  │     │     ├─ sidebar.tsx
│  │     │     ├─ skeleton.tsx
│  │     │     ├─ slider.tsx
│  │     │     ├─ sonner.tsx
│  │     │     ├─ spinner.tsx
│  │     │     ├─ switch.tsx
│  │     │     ├─ table.tsx
│  │     │     ├─ tabs.tsx
│  │     │     ├─ textarea.tsx
│  │     │     ├─ toast.tsx
│  │     │     ├─ toaster.tsx
│  │     │     ├─ toggle-group.tsx
│  │     │     ├─ toggle.tsx
│  │     │     └─ tooltip.tsx
│  │     ├─ hooks/
│  │     │  ├─ use-mobile.tsx
│  │     │  ├─ use-toast.ts
│  │     │  └─ useScrollReveal.ts
│  │     ├─ lib/
│  │     │  └─ utils.ts
│  │     └─ pages/
│  │        ├─ LandingPage.tsx
│  │        └─ not-found.tsx
│  └─ mockup-sandbox/
│     ├─ components.json
│     ├─ index.html
│     ├─ mockupPreviewPlugin.ts
│     ├─ package.json
│     ├─ tsconfig.json
│     ├─ vite.config.ts
│     └─ src/
│        ├─ App.tsx
│        ├─ index.css
│        ├─ main.tsx
│        ├─ components/
│        │  └─ mockups/
│        ├─ hooks/
│        │  ├─ use-mobile.tsx
│        │  └─ use-toast.ts
│        └─ lib/
│           └─ utils.ts
├─ attached_assets/
├─ lib/
│  ├─ api-client-react/
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ src/
│  │     ├─ custom-fetch.ts
│  │     ├─ index.ts
│  │     └─ generated/
│  │        ├─ api.schemas.ts
│  │        └─ api.ts
│  ├─ api-spec/
│  │  ├─ openapi.yaml
│  │  └─ orval.config.ts
│  ├─ api-zod/
│  │  ├─ package.json
│  │  └─ src/
│  │     └─ generated/
│  │        └─ types/
│  └─ db/
│     └─ src/
│        └─ schema/
└─ scripts/
   ├─ package.json
   └─ src/
      └─ hello.ts
```

---

## Architecture

### Component organization

The landing page is composed in:
- `artifacts/ai-platform/src/pages/LandingPage.tsx`
- It renders sections in order:
  - `Header`
  - `Hero`
  - `Partners`
  - `Features`
  - `BentoFeatures`
  - `Pricing`
  - `Testimonials`
  - `CTA`
  - `Footer`

### State management

- Most sections are **pure/function components** with static content.
- Interactive logic:
  - **Bento/Accordion**: `BentoFeatures.tsx` uses React `useState(activeIndex)` to coordinate both desktop hover state and mobile accordion open state.
  - **Pricing engine**: `Pricing.tsx` stores `currency` + `billing` in **refs** and updates the DOM via a global updater registry to avoid React re-rendering the pricing UI.

### Pricing architecture

`artifacts/ai-platform/src/components/Pricing.tsx` uses:
- Pricing tiers (`starter`, `pro`, `enterprise`)
- Currency tariff multipliers (`USD`, `EUR`, `INR`)
- Billing multipliers (monthly vs annual discount)
- A shared `updaters` registry used to update price text nodes.

### Responsive implementation

- CSS breakpoints in `artifacts/ai-platform/src/index.css`:
  - Desktop vs mobile Bento behavior switches at **`768px`**.
  - Layout grids (features/pricing/testimonials/footer) adapt at **1024px** and **768px**.
- `BentoFeatures.tsx` maintains a single `activeIndex` so that state can remain consistent as the UI shifts.

### Animation approach

- Scroll reveal: `artifacts/ai-platform/src/hooks/useScrollReveal.ts`
  - Observes `.reveal` and `.reveal-stagger`
  - Adds `.revealed` when the element enters the viewport
- CSS animations:
  - Keyframes and transitions live in `src/index.css`
  - Pricing updates trigger `.price-flash`

### SEO implementation

- `artifacts/ai-platform/index.html` contains:
  - `<title>` and `<meta name="description">`
  - `<link rel="canonical" ...>`
  - Open Graph meta tags (`og:*`)
  - Twitter card meta tags (`twitter:*`)
  - `<meta name="robots" ...>`
  - **Structured data** via `application/ld+json` (schema.org `SoftwareApplication`)

---

## Key Technical Highlights

- **Dynamic pricing matrix**
  - Tier × Currency × Billing (Monthly/Annual)
- **Performance-isolated currency/billing switcher**
  - Pricing state is stored in `useRef`
  - Price DOM nodes are updated through a registry of callbacks
- **Responsive Bento → Accordion transformation**
  - Desktop grid uses hover (`onMouseEnter` / `onMouseLeave`)
  - Mobile uses a pure React toggle with CSS `max-height` transitions
  - Both are driven by the same `activeIndex`
- **Scroll reveal without external dependencies**
  - `IntersectionObserver` + CSS transitions
- **Semantic + accessible markup**
  - ARIA labels and `aria-expanded` / `aria-pressed` on interactive controls

---

## Installation

This repo uses **pnpm workspaces**.

```bash
pnpm install
```

---

## Available Scripts

### Root `package.json`

From the repository root:
- `preinstall`
  - Enforces using pnpm (fails if a non-pnpm package manager is detected)
- `typecheck`
  - Runs library typecheck (`tsc --build`) and typecheck on `./artifacts/**` and `./scripts`
- `build`
  - Runs `pnpm run typecheck` then `pnpm -r --if-present run build`

### `artifacts/ai-platform/package.json`

- `dev`
  - `vite --config vite.config.ts --host 0.0.0.0`
- `build`
  - `vite build --config vite.config.ts`
- `serve`
  - `vite preview --config vite.config.ts --host 0.0.0.0`
- `typecheck`
  - `tsc -p tsconfig.json --noEmit`

---

## Running Locally

1) Install dependencies:

```bash
pnpm install
```

2) Start the landing page dev server (Vite):

```bash
pnpm --filter @workspace/ai-platform run dev
```

> Note: `artifacts/ai-platform/vite.config.ts` requires environment variables:
> - `PORT`
> - `BASE_PATH`

---

## Build

Build the whole monorepo:

```bash
pnpm run build
```

Or build only the landing app:

```bash
pnpm --filter @workspace/ai-platform run build
```

---

## Deployment

The project supports Vite builds and can be deployed on common frontend platforms.

Additionally, `replit.md` exists in the repo and provides run instructions for the workspace.

Recommended deployment targets for this type of frontend:
- **Vercel**
- **Netlify**
- **Replit**

---

## Performance

- **Pricing UI avoids React re-renders**
  - `Pricing.tsx` updates only specific DOM nodes via ref-based state and an updater registry.
- Scroll animations are handled by:
  - `IntersectionObserver` (viewport-driven)
  - CSS transitions and keyframes

---

## SEO

Implemented in `artifacts/ai-platform/index.html`:

| SEO Asset | Where |
|---|---|
| Title | `<title>...</title>` |
| Description | `<meta name="description" ... />` |
| Canonical | `<link rel="canonical" ... />` |
| Robots | `<meta name="robots" content="index, follow" />` |
| Open Graph | `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name` |
| Twitter Cards | `twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image` |
| Structured Data | `application/ld+json` (schema.org `SoftwareApplication`) |

Also included:
- `artifacts/ai-platform/public/robots.txt`

---

## Screenshots

Placeholders:

- **Hero:** `./screenshots/hero.png`
- **Features:** `./screenshots/features.png`
- **Pricing:** `./screenshots/pricing.png`
- **Testimonials:** `./screenshots/testimonials.png`
- **Mobile View:** `./screenshots/mobile.png`

---

## Competition

- **Event:** FrontEnd Battle 3.0
- **Organizer:** Web & Design Society, IIT Bhubaneswar
- **Category:** Frontend Development

---

## Developer

- **Name:** Spoorti Kalakappa Dyampur
- **GitHub:** https://github.com/spoorti-k-d
- **Repository:** https://github.com/spoorti-k-d/iitbbs-frontend-battle-neuralflow

---

## License

MIT License

