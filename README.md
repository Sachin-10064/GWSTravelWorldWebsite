# 🌍 GWS World Travel — Curated Luxury Journeys & Expeditions

[![Astro](https://img.shields.io/badge/Astro-v7.3.8-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-v19.3.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-v3.15.0-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**GWS World Travel** is a state-of-the-art luxury travel web application tailored for bespoke expeditions across India and premier global destinations. Engineered with modern static-site performance, high-fidelity responsive design, interactive SVG cartography, and fluid kinetic animations.

---

## 🌟 Key Features

### 1. 🧭 Cinematic Hero & Discovery
- High-impact visual storytelling with dynamic gradients and editorial serif typography.
- Quick journey discovery bar with real-time category filters and search shortcuts.
- Seamless entrance animations powered by GSAP and ScrollTrigger.

### 2. 🤿 Bento Grid Experience Hub (`ExploreIndia`)
- Asymmetrical luxury bento grid inspired by high-end travel publications.
- 6 curated expedition categories with full-bleed photography and action buttons:
  - **Scuba & Coral Reefs**: Deep-sea diving across Havelock & Neil Islands (`advanture`).
  - **Luxury Beach Resorts**: High-end beachfront villas & eco-resorts (`heritage-architecture`).
  - **Island Heritage**: Historic ruins & sacred sites (`spiritual`).
  - **Pristine Beaches**: Turquoise lagoons & white sand coasts (`beaches`).
  - **Active Outdoor & Water Sports**: Mangrove kayaking, bioluminescence tours & tiger safaris (`wildlife-nature`).
  - **Culture, Festivals & Culinary Trails**: Panoramic living traditions & royal gastronomy (`culture-fastival-food`).
- Interactive modal inspection on click.

### 3. 🏛️ 3D Flip Attraction Cards (`AttractionsGallery`)
- Horizontal kinetic carousel featuring iconic UNESCO landmarks: Taj Mahal, Amber Fort, Varanasi Ghats, Alleppey Backwaters, and more.
- Two-sided 3D card flipping providing quick facts, entry details, best visiting seasons, and instant enquiry triggers.

### 4. 🗺️ Interactive Political Map of India (`InteractiveMapSection`)
- Ultra-precise custom vector SVG map covering all 36 Indian states and union territories.
- Pinned hover tooltip system anchored directly to each state's geographic centroid coordinates via SVG-to-container coordinate matrix transforms.
- Adaptive tooltip positioning: flips downward for northern states to prevent viewport clipping and auto-clamps along horizontal bounds.
- Pulsing map pin indicators on hover and active selection.
- Regional filtering (North, South, West, East, Central, Northeast) with synchronized state preview panels.

### 5. 🎒 Curated Luxury Packages (`PopularPackages`)
- Filterable itineraries (Golden Triangle, Himalayan Odysseys, Wildlife Safaris, Coastal Retreats).
- Detailed breakdown of pricing tiers, duration, inclusions, and difficulty levels.

### 6. 📝 Bespoke Journey Enquiry Engine (`EnquirySection`)
- Context-aware booking form that auto-prefills selected destinations, states, or packages.
- Comprehensive traveller preference capture (dates, party size, travel style, special requests).

### 7. 📱 Complete Favicon & PWA Suite
- Full multi-resolution favicon bundle: SVG, ICO, 96×96 PNG, 180×180 Apple Touch Icon, and web app manifest (`site.webmanifest`).

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [Astro v7](https://astro.build/) | Static site generation with islands architecture |
| **UI Components** | [React 19](https://react.dev/) | Client-hydrated interactive widgets (`client:load`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Vite-powered modern CSS-first design system |
| **Motion** | [GSAP 3](https://greensock.com/gsap/) | ScrollTrigger, smooth parallax, staggered entrances |
| **Icons** | [Lucide React](https://lucide.dev/) | Minimalist, tree-shakable modern iconography |
| **Type Safety** | [TypeScript](https://www.typescriptlang.org/) | Strict typing across geo data, packages, and components |

---

## 📂 Project Architecture

```text
travalwebsite/
├── public/                       # Static public assets (served at /)
│   ├── favicon/                  # Favicon & PWA asset bundle
│   │   ├── apple-touch-icon.png  # iOS homescreen icon
│   │   ├── favicon-96x96.png     # Modern high-DPI desktop icon
│   │   ├── favicon.ico           # Legacy multi-size ICO
│   │   ├── favicon.svg           # Scalable vector favicon
│   │   └── site.webmanifest      # Progressive web app manifest
│   ├── favicon.ico               # Root favicon fallback
│   ├── favicon.svg               # Root SVG favicon fallback
│   ├── logo.png                  # Official 3D gold embossed GWS logo
│   └── site.webmanifest          # Root web manifest fallback
│
├── src/
│   ├── components/               # React UI components (Islands)
│   │   ├── AttractionsGallery.tsx# 3D interactive flip cards gallery
│   │   ├── EnquirySection.tsx    # Bespoke journey booking & inquiry form
│   │   ├── ExploreIndia.tsx      # Bento grid experience section
│   │   ├── Footer.tsx            # Luxury footer with branding & links
│   │   ├── Header.tsx            # Sticky blurred navigation header
│   │   ├── Hero.tsx              # Cinematic hero section with search
│   │   ├── InteractiveMapSection.tsx # Custom SVG India map with pinned tooltips
│   │   ├── PopularPackages.tsx   # Curated travel itineraries
│   │   ├── QuickViewModal.tsx    # Reusable deep-exploration modal
│   │   ├── SocialIcons.tsx       # Vector brand & social icons
│   │   ├── StayConnected.tsx     # Instagram feed & traveler reviews
│   │   └── TravelApp.tsx         # Main client-side state orchestrator
│   │
│   ├── data/                     # Structured TypeScript data models
│   │   ├── attractions.ts        # Top attractions data & flipcard specs
│   │   ├── experiences.ts        # 6 core bento experience definitions
│   │   ├── indianDetailedMapData.ts # SVG paths & centroid coordinates (36 states)
│   │   ├── indianStates.ts       # Enriched state cultural overviews
│   │   ├── packages.ts           # Tiered luxury travel packages
│   │   └── regions.ts            # Regional category groupings
│   │
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, SEO meta tags, Google Fonts
│   ├── pages/
│   │   └── index.astro           # Single-page entrypoint mounting TravelApp
│   └── styles/
│       └── global.css            # Tailwind v4 import & custom scrollbars
│
├── astro.config.mjs              # Astro configuration (React & Tailwind Vite plugins)
├── package.json                  # Dependencies and execution scripts
├── tsconfig.json                 # TypeScript compiler options
└── README.md                     # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v22.12.0` or higher
- **npm**: `v10.x` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/travalwebsite.git
   cd travalwebsite
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser to view the application.

---

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the Astro dev server at `http://localhost:4321` with hot-module replacement |
| `npm run build` | Compiles and builds the production-ready static site into `./dist/` |
| `npm run preview` | Locally serves and previews the production build from `./dist/` |
| `npm run astro check` | Runs Astro diagnostic check for syntax and type errors |

---

## 🎨 Design System & Palette

The visual identity employs a curated, editorial Indian palette that blends royalty, nature, and modern luxury:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Forest Emerald** | `#173D32` | Primary header background, dark elements, brand anchors |
| **Midnight Emerald** | `#0F2821` | Footer background, dark card backdrop, modal overlays |
| **Signature Terracotta**| `#C66B45` | Primary CTA buttons, badges, key accent highlights |
| **Royal Gold** | `#D8B878` | Embellishments, map pins, borders, typography accents |
| **Alabaster Ivory** | `#F8F5EF` | Page background, card text highlights, modal card body |
| **Muted Sage** | `#DDE5D8` | Subtle card borders, inactive map states, dividers |
| **Ocean Sky Blue** | `#0284C7` | Bento grid action buttons (`EXPLORE NOW`, `BOOK STAY`) |

### Typography
- **Headings & Display**: *Cormorant Garamond* / *Playfair Display* (Editorial Serif)
- **Body & Controls**: *Manrope* / *Inter* (Clean Modern Sans-Serif)

---

## 📄 License & Attribution

- **Branding**: Official logo assets belong to **GWS World Travel**.
- **Imagery**: Curated photography sourced via [Unsplash](https://unsplash.com) under the Unsplash License for editorial presentation.
- **Codebase**: Built with ❤️ for luxury travel discovery across India.
