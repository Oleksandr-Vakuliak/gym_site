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
src/pages/        pages (home, schedule, news list + article, 404, privacy)
src/components/   page sections
src/data/         editable content as JSON (prices, coaches, events, bar menu, gallery, FAQ, schedule, ticker)
src/content/news/ news & events as Markdown
src/styles/       design tokens and global styles
public/           static files served as-is
docs/             brief notes, content drafts, references, design directions
assets/originals/ owner's original media (not committed)
```

## Editing the ticker

The running line under the hero is filled from `src/data/ticker.json`:

- `slogans` — always shown.
- `promos` — shown first, in amber, until the `until` date (inclusive, `YYYY-MM-DD`). Expired promos are skipped at build time and also hidden in the browser, so an old promo never appears even if the site is not rebuilt. An empty list (`[]`) leaves only the slogans.

A visual editor for this file can be added later together with the news admin.

## Editing content

Most blocks read their text from `src/data/*.json`, so copy changes don't touch markup.

- **Events** (`events.json`): past events hide themselves, same as ticker promos; with no upcoming events the block shows a note linking to news.
- **News** (`src/content/news/*.md`): one file = one article at `/news/<file-name>`. Front matter: `title`, `date`, `kind` (`news` or `event`), `excerpt`, optional `cover` (image path) and `coverAlt`.
- **Gallery** (`gallery.json`): three rows; an item with `photo` (path under `src/assets/`) opens in the lightbox, an item with `placeholder` shows a grey stand-in.

## Trial form

The gym is fictional, so the form is a demo: it validates name and phone and shows sending, success and error states, but sends nothing. Open the page with `?demo=error` to see the error state. To make it real, pass `endpoint` (a form service URL that accepts POST FormData) to `<BookingForm />` in `src/pages/index.astro`.

## Fonts

Sofia Sans and Sofia Sans Extra Condensed (Google Fonts, OFL) are downloaded at build time via Astro's fonts API and served from the site itself, so there is no render-blocking request to Google. Only the two files the first screen needs are preloaded.

## Checks before merging

- Layout at 375 px and desktop width
- No console errors
- Keyboard navigation works (Tab, visible focus)
- Sufficient text contrast
- Before release: Lighthouse on mobile, every category ≥ 90 (last run: performance 91–99, accessibility/best practices/SEO 100)

## Known limitations

- Content is fictional (see footer note on the site).
- English version will be added after the Ukrainian version is complete.
- Media are placeholders until real files are provided; the gallery and the protein bar temporarily reuse sector photos.
- Sitemap, canonical URLs and the social preview image need the final domain and are added with the deploy task.
