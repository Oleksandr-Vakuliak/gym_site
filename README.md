# SECTOR FITNESS

Concept website of a fictional local gym in Lviv, built as a portfolio piece.
The gym, address, phone and people are invented; the site is written as if the gym were real.

Core idea: the gym as a map of marked sectors (A–G). A beginner can see the whole floor before coming in and book a free trial session with a coach.

> Built with the help of AI (Claude Code). Photos and videos are free stock and/or AI-generated — sources and licenses are listed in [docs/media-credits.md](docs/media-credits.md).

## Stack

- [Astro](https://astro.build) — static site, minimal client-side JS
- Plain CSS with design tokens (no UI framework)
- Hosting: Vercel (planned)

Why Astro: the site is mostly content (sections, schedule, news), so static HTML is fast and cheap to host. News can live as Markdown files, and a simple admin for the owner can be added later without changing the stack.

## Getting started

Requires Node.js 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to dist/
npm run preview   # serve the build locally
```

## Project structure

```
src/pages/        pages (home, schedule, news, 404, privacy)
src/components/   page sections
src/styles/       design tokens and global styles
public/           static files served as-is
docs/             brief notes, content drafts, references, design directions
assets/originals/ owner's original media (not committed)
```

## Checks before merging

- Layout at 375 px and desktop width
- No console errors
- Keyboard navigation works (Tab, visible focus)
- Sufficient text contrast
- Before release: Lighthouse

## Known limitations

- Content is fictional (see footer note on the site).
- English version will be added after the Ukrainian version is complete.
- Media are placeholders until real files are provided.
