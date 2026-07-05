# Chrysal Core Front-end

Portfolio website with all my live projects and templates

[![Next.js](https://img.shields.io/badge/Next.js_16.2.9-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19.2.4-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Polyform_Perimeter_License_1.0.0-red)](LICENSE.md)

## Preview

Live Link: [https://chrysalcore.com](https://chrysalcore.com)

## Description

Chrysal Core is a website that serves as a portfolio for the organization of the same name, which specializes in developing professional, fast, and customized websites for local businesses.

The website features three main pages:

- **Homepage**: Brief summary of the problems solved, advantages, services offered, completed projects, and the process to follow to contract these services
- **Projects**: Showcase of completed projects and templates
- **Contact**: Contact form and information

It's built with the Next.js App Router, using Server Components by default and Client Components only where interactivity is required (sliders, the FAQ accordion, the mobile menu, and the contact form).

## Main Features

- **App Router**: File-system based routing and layouts (`/`, `/projects`, `/contact`)
- **Server-first Components**: Client Components are scoped to the few places that need interactivity
- **Component-Based Architecture**: Modular and reusable components, colocated with the routes that use them
- **Tailwind CSS 4**: Utility-first styling with a small set of shared design tokens (colors, fonts) and custom classes for the few patterns Tailwind utilities can't express directly (multi-stop gradients, keyframe animations)
- **Responsive UI/UX**: Interface designed to adapt to all devices
- **Cyclic Slider Animations**: Auto-advancing sliders (problems, process) built on a shared `useAutoSlider` hook
- **SEO Optimized**: `metadata` API, `sitemap.ts`, `robots.ts`, `manifest.ts`, and Open Graph image, plus Google Analytics
- **Optimized Images**: `next/image` and `next/font` for image and font optimization

## Technologies Used

| Category | Technologies |
| :--- | :--- |
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Fonts | Work Sans, Montserrat (`next/font/google`) |
| Analytics | Google Analytics (gtag.js via `next/script`) |
| Code Quality | ESLint 9 |
| Version Control | Git, GitHub |

## Project Structure

```text
chrysal-core/
├── public/                      # Static assets served as-is
│   ├── icons/                   # Icon assets used across sections
│   ├── imgs/                    # Project/background images
│   └── favicon/                 # Web manifest icons
├── src/
│   ├── app/                     # App Router routes
│   │   ├── layout.tsx           # Root layout: fonts, metadata, analytics
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Tailwind import, design tokens, shared CSS
│   │   ├── favicon.ico, icon.svg, apple-icon.png, opengraph-image.png
│   │   ├── manifest.ts          # Web app manifest
│   │   ├── robots.ts            # robots.txt
│   │   ├── sitemap.ts           # sitemap.xml
│   │   ├── _components/         # Home-only sections (problems, advantages,
│   │   │                          services, process, faq)
│   │   ├── _lib/data/           # Static data for the sections above
│   │   ├── projects/            # /projects route, components and data
│   │   └── contact/             # /contact route, components and data
│   ├── components/              # Shared across routes (header, hero, footer,
│   │                              nav, sliders, main section wrapper)
│   ├── hooks/                   # Shared hooks (e.g. useAutoSlider)
│   └── lib/data/                # Shared data (navigation, sections, contact info)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

Route segments use a `_components`/`_lib` prefix convention to colocate section-specific code with the page that uses it, while anything reused across multiple routes lives in the top-level `src/components`, `src/hooks`, and `src/lib`.

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with hot reload (Turbopack) |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs ESLint to check code quality |

## Local Installation and Use

Follow these steps to run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/es/) (v20 or higher recommended)
- [NPM](https://www.npmjs.com) (comes with Node.js)

### Installation Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/chrysalcore/chrysalcore.git
    cd chrysalcore
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run development mode**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`

4. **Build for production**

    ```bash
    npm run build
    ```

5. **Run the production build**

    ```bash
    npm run start
    ```

## Development

### Code Style

This project uses ESLint for code quality. Run the linter with:

```bash
npm run lint
```

### Adding New Pages

1. Create a new route folder under `src/app/` with a `page.tsx`
2. Add its data under a colocated `_lib/data/` folder if needed
3. Update navigation data in `src/lib/data/navigation.ts` if it should appear in the header/footer nav

### Adding New Home Sections

1. Create the section's components under `src/app/_components/[section-name]/`
2. Add its data file under `src/app/_lib/data/`
3. Add the section's copy to `src/lib/data/sections.ts` and its background variant to `sectionClasses` in `src/components/main/section.tsx`
4. Compose it into `src/app/page.tsx` with `<Section type="...">`

## Browser Support

This project supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the [Polyform Perimeter License 1.0.0](LICENSE.md)

## Contact

For questions or inquiries, visit [https://chrysalcore.com](https://chrysalcore.com) or use the contact form on the website.
