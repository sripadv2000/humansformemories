# Humans for Memories

Website for the Humans for Memories Initiative — an Alzheimer's awareness and caregiver support nonprofit.

**Live site:** https://humansformemories.com

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (JavaScript)
- [React Router v6](https://reactrouter.com/) for client-side routing
- CSS Modules for component styles
- [Embla Carousel](https://www.embla-carousel.com/) for the Caregiver Stories carousel
- [Formspree](https://formspree.io/) for the contact form
- Deployed to GitHub Pages with a custom domain

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Before going live

1. **Formspree form ID** — in `src/pages/SupportOurCause.jsx`, replace `PLACEHOLDER_ID` in the `FORMSPREE_ENDPOINT` constant with your actual Formspree form ID.
2. **GoFundMe link** — in the same file, replace `https://www.gofundme.com` with your campaign URL.
3. **Instagram handle** — in `src/components/Navbar.jsx`, update the `href` on the Instagram link if the handle differs from `humansformemories`.
4. **Images** — swap out the `picsum.photos` placeholder URLs in each page with your real assets. Put image files in `src/assets/` and import them, or reference files in `public/`.
5. **About Us content** — fill in `src/pages/AboutUs.jsx` once copy is ready.
6. **GitHub Pages setup** — in your repo settings, enable GitHub Pages with source set to "GitHub Actions". The workflow at `.github/workflows/deploy.yml` handles builds on every push to `main`.
7. **Custom domain DNS** — point your domain registrar's CNAME record for `www` (or an A record for the apex) to GitHub Pages per the [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Project structure

```
src/
  components/
    Layout.jsx / .module.css   — persistent wrapper (Navbar + Outlet + Footer)
    Navbar.jsx / .module.css   — fixed top nav with mobile hamburger
    Footer.jsx / .module.css   — 3-column footer
    Carousel.jsx / .module.css — Embla carousel with lightbox
  pages/
    Home.jsx / .module.css
    AlzheimersSignsAndSymptoms.jsx / .module.css
    CaregiverStories.jsx / .module.css
    SupportOurCause.jsx / .module.css
    AboutUs.jsx / .module.css
  App.jsx    — React Router setup
  main.jsx   — entry point
  index.css  — global variables, reset, shared utilities

public/
  CNAME      — custom domain for GitHub Pages
  404.html   — SPA redirect fallback for direct URL navigation

.github/workflows/deploy.yml  — GitHub Actions deploy pipeline
```
