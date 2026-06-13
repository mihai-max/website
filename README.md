# LAUDAT

The website for **LAUDAT** — Mihai Laudat's production practice and self-hosted
infrastructure stack in Munich. The site covers three things the LAUDAT brand
spans: **production** (film, aerial, and web), **infrastructure** (a full
self-hosted platform), and **policy** (the Terms, Privacy, and Acceptable Use
documents that govern the services).

Built with **Next.js** (App Router) and statically exported for **GitHub
Pages**. Animations are powered by [Framer Motion](https://www.framer.com/motion/) —
an animated aurora background, a sticky nav, a fade/slide-in hero, and
scroll-revealed sections.

## Demo

https://mihai.laudat.org

## Tech

- [Next.js 14](https://nextjs.org/) with `output: "export"` (fully static).
- [Framer Motion](https://www.framer.com/motion/) for animations.
- Deployed to GitHub Pages via GitHub Actions.

## Local development

```sh
npm install
npm run dev      # http://localhost:3000
```

## Build

```sh
npm run build    # outputs a static site to ./out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and deploys it to GitHub Pages.

> One-time setup: in the repository settings, set **Settings → Pages → Build
> and deployment → Source** to **GitHub Actions**.

The custom domain is configured via `public/CNAME`.

## Project structure

- `app/page.js` — Landing page (hero, about, work, the stack, contact).
- `app/legal/` — Legal & policy pages (Terms, Privacy, Acceptable Use).
- `app/components/Background.js` — Animated aurora background.
- `app/components/Nav.js` — Sticky top navigation.
- `app/components/Footer.js` — Shared footer with legal links.
- `app/components/Reveal.js` — Scroll-triggered reveal wrapper.
- `app/globals.css` — Global styles.
- `app/layout.js` — Root layout and metadata.
- `public/CNAME` — Custom domain configuration.
- `next.config.mjs` — Static export configuration.

## License

mihai-max/website © 2026 by Mihai Laudat is licensed under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International.

## Contact

For any questions or suggestions, please contact [tckp@duck.com](mailto:tckp@duck.com).
