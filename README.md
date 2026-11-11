# Jaber Khan Afrooz — Portfolio

A responsive, single-page portfolio for AI/ML Engineer Jaber Khan Afrooz. The project is built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React. Content and project outcomes are sourced from the supplied resume.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local development

```bash
npm install
npm run dev
```

Vite prints a local URL after the development server starts.

## Production build

```bash
npm run build
npm run preview
```

The production site is written to `dist/`. `npm run preview` serves that build locally.

## Deploy to Vercel

Import the project into Vercel or run `vercel` from the project directory. The checked-in `vercel.json` configures the Vite build command and `dist` output directory. No environment variables or backend services are required.

## Deploy to GitHub Pages

The `main` branch is built and deployed automatically by `.github/workflows/deploy.yml`. Pull requests to `main` run the production build without publishing it. The Vite base path is configured for the `Portfolio` repository, so the site is published at `https://jaberkhan011.github.io/Portfolio/`.

In the repository settings, choose **Pages → Build and deployment → GitHub Actions** as the publishing source.

## Content and assets

- Update portfolio information in `src/data/portfolio.ts`.
- The current resume PDF is served from `public/Jaber-Khan-Afrooz-Resume.pdf`.
- The site uses a consistent dark theme.
