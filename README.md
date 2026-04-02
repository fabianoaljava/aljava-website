# AI Studio — Agency Website Template by Aljava Studio

A premium, production-ready website template for digital agencies and SaaS products. Built with **Astro**, **React**, **TypeScript**, and **Tailwind CSS** by [Aljava Studio](https://github.com/fabianoaljava).

---

## Overview

**AI Studio** is a dark-mode, high-performance landing page template designed specifically for agencies that want to launch fast without compromising quality. It ships with a complete design system, animated sections, responsive layout, and a clean component architecture — ready to be customised and deployed in hours, not weeks.

### Who is this for?

- Digital agencies building client sites or internal products
- Founders launching a SaaS or AI-powered product
- Studios who want a premium starting point they fully own

---

## What's Included

### Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Full landing page (11 sections) |
| 404 | `/404` | Custom not-found page with header + footer |
| Blog Posts | `/posts/*` | Markdown-powered article pages |
| Blog Index | `/posts` | Paginated post listing |

### Sections (Home)

- **Navbar** — Scroll-triggered transparent → solid, with mobile burger menu
- **Hero** — Rounded card with image, headline, dual CTAs
- **Trusted By** — CSS marquee logo carousel
- **How it Works** — 3-step numbered grid
- **Features** — 3-column icon cards
- **Feature Showcase** — Z-pattern alternating text/image
- **Pricing** — 3-tier plans with Monthly/Yearly toggle
- **Integrations** — Integration badge grid
- **Testimonials** — 6-card review grid with star ratings
- **FAQ** — Native `<details>` accordion
- **Blog Preview** — 3 latest posts with image + hover effects
- **CTA** — Ambient glow call-to-action banner
- **Footer** — Brand, nav columns, legal links

### Design System

| Token | Value |
|---|---|
| Background Primary | `#091722` |
| Background Secondary | `#0F2433` |
| Primary Blue | `#1F4E79` |
| Teal (Secondary) | `#2A9D8F` |
| Amber (Accent) | `#F4A261` |
| Heading Font | Outfit (300–900) |
| Body Font | Inter (300–600) |

---

## Tech Stack

- **[Astro 4](https://astro.build/)** — Static site generation, zero JS by default
- **[React](https://react.dev/)** — Interactive components (`client:load`)
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe throughout
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first styling
- **[ESLint](https://eslint.org/)** — Airbnb style guide, Astro + TS compatible
- **[Prettier](https://prettier.io/)** — Formatting for `.astro`, `.tsx`, `.ts`
- **[Husky](https://typicode.github.io/husky/)** + **lint-staged** — Pre-commit hooks
- **[Commitlint](https://commitlint.js.org/)** — Conventional commits enforced
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** — Cloudflare Pages deployment

### Animations & Effects

- Scroll-reveal fade + slide-up via `IntersectionObserver`
- SVG `feTurbulence` grain texture overlay
- CSS `@keyframes marquee` infinite logo scroll
- Card hover micro-lift (`translateY`)
- Navbar scroll-driven background opacity (0 → 100% over 80px)

---

## Requirements

- **Node.js** v16+ (tested with v16.15.1 via Volta)
- **npm** v8+

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fabianoaljava/aljava-website.git
cd aljava-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## Customisation

### Colours & Design Tokens

Edit `tailwind.config.js` to adjust brand colours, fonts, and spacing tokens.

### Content

All page sections are standalone React components in `src/partials/`. Edit each file to update copy, images, and links.

### Fonts

Fonts are loaded via Google Fonts in `src/templates/Base.astro`. Replace the `<link>` href to swap typefaces.

### Hero Image

Replace `public/assets/images/hero.png` with your own image. The component applies a gradient overlay automatically.

---

## Commands

Run all commands from the project root:

| Command | Action |
|:---|:---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove `./dist/` folder |
| `npm run lint` | Run ESLint and report issues |
| `npm run deploy` | Deploy to Cloudflare Pages via Wrangler |

---

## Deployment

### Cloudflare Pages (recommended)

```bash
npm run build
npm run deploy
```

Configure your `wrangler.json` with your Cloudflare account ID and project name before deploying.

### Manual / Any Host

All generated files land in `./dist/`. Upload this folder to any static hosting provider (Cloudflare Pages, Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

```
/
├── public/
│   └── assets/images/     # Static images (hero.png, etc.)
├── src/
│   ├── pages/             # Astro pages (index, 404, posts)
│   ├── partials/          # React section components
│   ├── templates/         # Base layout templates
│   └── utils/             # AppConfig, helpers
├── tailwind.config.js     # Design tokens
└── astro.config.mjs       # Astro configuration
```

---

## License

MIT © [Aljava Studio](https://github.com/fabianoaljava)

---

Made with ♥ by **Aljava Studio** — building great things on the web.
