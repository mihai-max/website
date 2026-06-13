# Personal Website

A personal website for Mihai Laudat — student, builder, and filmmaker in
Munich, co-founder of KEEL and creator of the LAUDAT brand. Built with
**Next.js** (App Router) and statically exported for **GitHub Pages**.
Animations are powered by [Framer Motion](https://www.framer.com/motion/) —
an animated aurora background, a sticky nav, a fade/slide-in hero, and
scroll-revealed sections (About, Work, Interests, Contact).

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

The custom domain (`public/CNAME`) and the `dino.html` easter egg are served
straight from the `public/` directory.

## Project structure

- `app/page.js` — Main page (hero, about, work, interests, contact).
- `app/components/Background.js` — Animated aurora background.
- `app/components/Nav.js` — Sticky top navigation.
- `app/components/Reveal.js` — Scroll-triggered reveal wrapper.
- `app/globals.css` — Global styles.
- `app/layout.js` — Root layout and metadata.
- `public/dino.html` — Chrome T-Rex game easter egg.
- `public/CNAME` — Custom domain configuration.
- `next.config.mjs` — Static export configuration.

## License

mihai-max/website © 2024 by Mihai Laudat is licensed under Creative Commons
Attribution-NonCommercial-ShareAlike 4.0 International.

## Contact

For any questions or suggestions, please contact [tckp@duck.com](mailto:tckp@duck.com).
