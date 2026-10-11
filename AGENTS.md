# AGENTS.md — Assistant Guide for GWS World Travel

This file provides project instructions, development commands, and coding standards for the **GWS World Travel** website.

---

## 1. Quick Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:4321)
npm run dev
# Or background mode:
astro dev --background

# Check types and syntax
npm run astro check

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Tech Stack

- **Astro 7.x**: Static Site Generator (SSG) with islands architecture.
- **React 19**: Interactive components mounted with `client:load`.
- **Tailwind CSS 4.x**: Styling via `@tailwindcss/vite` plugin.
- **GSAP 3.x**: Scroll-triggered animations and kinetic effects.
- **Lucide React**: Modern vector icons.
- **TypeScript**: Strict type checking.

---

## 3. Project Architecture

```text
src/
├── components/          # Reusable React UI components
│   ├── AttractionsGallery.tsx    # 3D interactive flip cards
│   ├── EnquirySection.tsx        # Booking & inquiry form
│   ├── ExploreIndia.tsx          # Bento grid experience section
│   ├── Footer.tsx                # Luxury footer with branding
│   ├── Header.tsx                # Sticky navigation header
│   ├── Hero.tsx                  # Cinematic landing hero
│   ├── InteractiveMapSection.tsx # SVG India map with pinned tooltips
│   ├── PopularPackages.tsx       # Curated packages list
│   ├── QuickViewModal.tsx        # Reusable modal for deep view
│   ├── SocialIcons.tsx           # Social media SVG icons
│   ├── StayConnected.tsx         # Stories & newsletter
│   └── TravelApp.tsx             # Root page state orchestrator
├── data/                # Central data store (TypeScript)
│   ├── attractions.ts            # Landmarks & sights
│   ├── experiences.ts            # 6 core bento categories
│   ├── indianDetailedMapData.ts  # 36 states SVG paths & centroids
│   ├── indianStates.ts           # State culture & highlights
│   ├── packages.ts               # Travel itineraries
│   └── regions.ts                # Regional groupings
├── layouts/
│   └── Layout.astro              # Shell, fonts, SEO, favicons
├── pages/
│   └── index.astro               # Landing page mounting TravelApp
└── styles/
    └── global.css                # Tailwind import & global styles
```

---

## 4. Coding Standards & Best Practices

### Write Simple, Clean English

- Keep code readable, self-documenting, and concise.
- Use meaningful names for variables, props, and functions.
- Keep comments direct and helpful.

### Do Not Duplicate Code (DRY)

- **Data**: All destination info, packages, and categories belong in `src/data/`. Do not hardcode lists inside components.
- **Components**: Reusable parts (cards, badges, modals, buttons) must be extracted into components or sub-components.
- **Modals**: Use the shared `QuickViewModal` for displaying details instead of writing new dialogs.

### Do Not Install Unnecessary Packages

- **Avoid extra npm packages**. Always use what is already in the project.
- Icons: Use `lucide-react`. Do not add other icon libraries.
- Animation: Use `gsap` or Tailwind CSS transitions.
- Utilities: Use native browser APIs (`fetch`, `crypto`, `IntersectionObserver`, SVG DOM methods).

### Type Safety

- Always specify TypeScript interfaces for props, states, and data objects.
- Do not use `any`. Use union types or generics where appropriate.
- Export and import interfaces from `src/data/`.

---

## 5. SEO & Accessibility Standards

- **Page Titles & Meta**: Maintain descriptive, keyword-rich titles and descriptions in `src/layouts/Layout.astro`.
- **Heading Order**: Exactly one `<h1>` on the page. Follow logical `<h2>` and `<h3>` nesting.
- **Semantic Elements**: Use `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- **Images**:
  - Always provide descriptive `alt` text.
  - Use `loading="lazy"` on below-the-fold images.
  - Include `onError` fallbacks for remote images.
- **Buttons & Links**: Provide `aria-label` where text is not visible (such as hamburger or close buttons).
- **Favicons**: All favicon assets are stored in `public/favicon/` and root `public/`.

---

## 6. Design System & Theme Colors

Use the established luxury color palette:

| Token Name           | Hex Code                     | Usage                                  |
| :------------------- | :--------------------------- | :------------------------------------- |
| **Forest Emerald**   | `#173D32`                    | Header, dark section cards, brand base |
| **Midnight Emerald** | `#0F2821`                    | Footer, modal overlay, dark cards      |
| **Terracotta**       | `#C66B45` (hover: `#A95532`) | Primary CTA buttons, accent badges     |
| **Royal Gold**       | `#D8B878`                    | Borders, map pins, highlights          |
| **Alabaster Ivory**  | `#F8F5EF`                    | Backgrounds, light card bodies         |
| **Muted Sage**       | `#DDE5D8`                    | Dividers, subtle borders               |
| **Ocean Blue**       | `#0284C7` (hover: `#0369A1`) | Bento experience buttons               |

### Typography

- Headings: Serif (_Cormorant Garamond_ / _Playfair Display_)
- Body / Controls: Sans-serif (_Manrope_ / _Inter_)

---

## 7. Animation Rules (GSAP)

- Always wrap GSAP code inside `gsap.context()` in React `useEffect`.
- Return `ctx.revert()` in the effect cleanup to avoid memory leaks.
- Ensure animations only run on the client: `if (typeof window === 'undefined') return;`.
- Use CSS transitions for standard hover effects and button states.
