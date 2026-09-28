# SECTOR FITNESS — project notes

Concept website of a fictional local gym, built for practice and portfolio.
Communicate with the owner in Ukrainian; code, commits, PRs and README in English.

## Current stage

**Where we stopped (2026-09-28, late):** #6 Prices + Coaches in progress on branch feat/prices-coaches (commit 575060e), shown to owner, waiting for feedback. Prices = amber free-trial plate + wall board with dashed leaders (`Prices.astro`, `src/data/prices.json`); corporate line drafted by Claude without numbers. Coaches = 4 cards with sector plates (A/D/B/E — coach↔sector mapping invented by Claude), swipe row on phones (`Coaches.astro`, `src/data/coaches.json`), photos = placeholders. Section titles «Ціни без дрібного шрифту.» / «Люди, які будуть поруч.» are Claude drafts. Earlier: #4 (PR #20) and #5 (PR #21) merged. Owner confirms every merge by hand. #5: steps on a dashed amber track → trial button (`StartSteps.astro`); services asymmetric, personal training = lead block with «Для старту» tag (`Services.astro`); `ServiceVideo.astro` = muted loop, preload none, plays in view, all 3 service videos in (Pexels clips from owner, cropped with ffmpeg-static in scratchpad — no system ffmpeg; gym clip = 3:2 close-up, owner's choice). Video authors not recorded — owner decided it is unnecessary (Pexels needs no attribution). Next after merge: #6 Prices + Coaches.
**#4 notes:** Owner compared live prototypes (flat floor plan vs isometric 2.5D) and chose the **flat plan**. Component `src/components/Sectors.astro`, content + plan coordinates in `src/data/sectors.json` (layout of sectors in the gym invented by Claude — owner may move them). Mobile < 900 px = letter tabs. After merge: #5 How we help you start + Services. Earlier #3 notes: Ticker done: content in `src/data/ticker.json` (permanent slogans + amber promos with `until` date, auto-hidden when expired — owner's idea: promo in the line hooks visitors, owner can add/remove promos), no pause on hover (owner asked), ~4 s per item. Interior block done with placeholder (21:9 desktop, 4:5 mobile) + amber plate «A–G ┆ Подивитися зал по секторах →» → #sectors.
**Interior photo (2026-09-28):** owner chose Pexels 17211446 (Eyecon Design) as a *working* photo — liked none of 5 candidates, #4 least bad. It looks like a 3D render and has «WORK HARD OR GO HOME» on the wall (clashes with the beginner-friendly tone) — offered to keep looking / consider a video; committed on ticker-interior.
**Next:** ticker speed approved; demo promo «Приведи друга — тиждень безкоштовно для обох» (until 2026-10-31, written by Claude with owner's permission); expiry verified (past-date promo hidden). #3 merged 2026-09-28. Owner agreed to a visual admin (Keystatic) for ticker later, together with news.
**Sector photos (2026-09-28):** owner generated B–G in ChatGPT (A added later, same chat), finds them «plastic» and does NOT want more AI images — he will search photos himself from now on; don't suggest AI generation again. Optimized copies in `src/assets/sectors/sector-{a..g}-*.jpg`, committed with #4, credits in `docs/media-credits.md`. Owner approved the «less plastic» treatment for sector photos: saturate(.7) contrast(1.08) brightness(.95) + amber soft-light .14 + SVG film grain and vignette (overlay blend); preview was scratchpad sectors.html — rebuild it in the sectors section. `docs/ai-prompts.html` stays as reference only.
**Media:** owner finds photos very hard to get (videos easier). 2026-09-28: owner keeps the Pexels interior photo and will generate the rest with ChatGPT using `docs/ai-prompts.html` (step-by-step page with copy buttons; owner is a beginner — give ready-to-paste steps, not assembly instructions) (asked for prompts for all sections at once, same look as the interior photo). Keep building with placeholders at final aspect ratios. Work photo by photo, one section at a time (owner asked «по порядку» — don't dump a full shot list). Show candidates as live previews with our grade, not descriptions.
Dev server: may already be running from an earlier session (Astro says «Another astro dev server is already running») — then just reuse http://localhost:4321.
`docs/design/sample-photo.jpg` (used only in directions.html) has unknown source → stays local, gitignored. Not for the site. Resolved, don't ask again.

## Hero (approved 2026-09-27)

- Photo: Pexels, Tima Miroshnichenko (cable crossover, dark gym), see `docs/media-credits.md`. Owner accepted it as the working hero photo, knowing he's quite muscular vs. the brief; can be swapped later without layout changes.
- Framing chosen by owner after trying variants (centred text over the person, zoomed/shifted, full-height) — final: **original framing**, text left, person centre; desktop `object-position: 28% 30%`, mobile `48% 30%`, text at bottom.
- Photo grade (use for all site photos): `saturate(0.82) contrast(1.02)` + amber soft-light overlay at 0.14. Owner rejected the heavier grade (0.55 / 0.35) as «low quality» — it amplified grain.
- Headline: placeholder until owner writes it; keep it short (2–5 words) — longer text covers the person.
- Header: transparent over the hero on the home page (`<Base overlayHeader>`), solid graphite after scrolling; mobile = logo + «Пробне» CTA + burger with full-screen menu (Esc closes, focus returns).
- Spacing and type scales are tokens in `src/styles/global.css` (`--space-*`, `--fs-*`, `--header-h`).

## Technology (approved 2026-09-27)

- **Astro** (static, plain CSS with tokens, no UI framework) + **Vercel** hosting. Chosen over Next.js: content site, minimal JS, news as Markdown (optional Keystatic admin later), built-in i18n for EN later, different stack from vetcare-clinic (Next.js) for portfolio range.
- Form sending (real vs demo) — decide at the form section.
- Tasks: GitHub Issues in `Oleksandr-Vakuliak/gym_site`, tracked on the board https://github.com/users/Oleksandr-Vakuliak/projects/5 (Todo / In Progress / Done — move cards as work progresses). Substantial changes via branch + PR.
- Dev server: `npm run dev` → http://localhost:4321 (launch config `dev`).
- `assets/originals/` (owner's media) is gitignored; optimized copies go to `src/assets/`.

### Stage log

Stage 1 — Brief: approved (2026-09-27).
Stage 2 — References: single reference Gold's Gym (https://www.goldsgym.com/), notes in `docs/references.md`. Owner's 2nd site — keep experiments moderate (bigger experiments planned for site #3). Approved (2026-09-27).
Stage 3 — Content: in progress. Draft copy v1 in `docs/content.md` (menu, schedule, coaches, FAQ filled with demo data by owner's permission; sectors A–G accepted as working list; ticker = slogans, to try).
Missing from owner: hero headline (owner writes it), photos/videos (placeholders until then). Stage closed (2026-09-27).
English translation: only after the UA site is 100% done.
Stage 4 — Design system: owner chose **A «Sectors»** (2026-09-27). Comparison kept in `docs/design/directions.html`.

Stage 5 — Structure: approved (2026-09-27), see «Structure» below. Checkpoint «structure + visual direction» passed.

## Structure (approved)

**Home page (in order):**
1. Hero — photo, [owner's headline], «Записатися на пробне» + «Подивитися зал» (→ map)
2. Ticker — slogans
3. Wide gym interior photo (full width, empty gym, warm light) with plate «Подивитися зал по секторах» — entry to the map (inspired by Gold's block after hero)
4. Sectors map A–G (mobile: list/tabs). F and G link to bar / events blocks
5. How we help you start — 3 steps
6. Services — 3 blocks with video
7. Prices + one line about corporate memberships
8. Coaches — 4 people (no separate page)
9. Events — big full-width atmospheric block (DJ on balcony), 2–3 upcoming events → link to News & events
10. Protein bar — compact block: photo + menu
11. Gallery — 3 rows, mouse-wheel horizontal scroll, lightbox without cropping
12. FAQ
13. Trial booking form + contacts + stylized map (all «Записатися» buttons lead here). Form states: filling, sending, success, error
14. Footer with fictional-content note

**Other pages:** Schedule (mobile: day tabs) · News & events (list + article template; events and articles merged) · 404 · Privacy policy (form collects name/phone).

**Navigation:** sticky header — logo, Сектори · Послуги · Ціни · Розклад · Новини · Контакти, CTA «Пробне безкоштовно», later UA/EN switch. Mobile: logo + CTA + burger.

**Owner's note:** finds it hard to imagine layouts from text — expects many corrections once things are on screen. Show visuals early, keep changes cheap.

## Design system — direction A «Sectors»

- **Idea:** the gym as a map of marked sectors. Big outlined sector letters (A–G), sign-plate tags («A · Вільні ваги»), dashed lines as floor markings. Strength comes from typography and texture, motion is minimal.
- **Colors:** graphite #1D2023 (bg, rubber floor) · concrete #34393E (surfaces, dividers) · chalk #E7E8E6 (text) · amber #F2A516 (main action, accents; text on amber = graphite) · rust #C2462A (rare accent only).
- **Photo treatment:** slight desaturation + warm amber soft-light tint; dark gradient from the text side; smooth fade into the next section (owner likes it).
- **Fonts (Google Fonts, OFL, Cyrillic):** Sofia Sans Extra Condensed 700/900 — headlines, sector letters, ticker; Sofia Sans 400/600 — body, buttons.
- **Buttons:** primary amber / graphite text, radius 2px; secondary = chalk outline; focus = 3px chalk outline with offset; disabled = concrete bg, muted text.
- **Ticker:** slogans between dashed amber lines, ▸ separators.
- Spacing scale, type scale and component details — fixed during Hero layout.
Preview: `npx http-server docs/design -p 8081` → http://127.0.0.1:8081/directions.html

## Content decisions (agreed)

- Copy: Claude writes drafts from the brief, owner edits and approves. Tone: «ти», short, no fluff.
- English: translate after UA copy is approved; owner reviews.
- Logo: typographic «SECTOR FITNESS» wordmark (+ optional simple sector mark), SVG, made at Design system stage.
- Prices: invented approximate values allowed (demo; covered by footer disclosure).
- No "History" block (a new fictional gym has none). Replaced by "How we help you start".
- Owner-editable content (e.g. a future History block, news): owner wants the site owner to be able to fill such blocks later → consider at Technology stage (content in separate files / simple CMS).

## Services (agreed)

1. Gym floor — free training, weights, cardio.
2. Personal training — with a coach; the base path for beginners.
3. Group classes — functional, stretching, etc.
Each gets one short video.

## Candidate key visual idea: gym sectors map (to confirm at Structure / Design stages)

- The gym is split into named **sectors** (plays on the name SECTOR FITNESS), e.g. free weights, machines, cardio, group studio, protein bar, balcony (events/DJ). Exact list — later.
- Interactive map of the gym: click/tap a sector → photo(s) + short description.
- Also solves the media problem: each sector may have its own look, so photos from different sources don't need to match perfectly.
- Recommended form: isometric (2.5D) SVG illustration with clickable zones, not real 3D (Three.js) — lighter, faster, works on phones; on mobile falls back to a list/tabs of sectors; keyboard accessible.
In parallel: owner is searching for photos/videos (stock + AI) into `assets/originals/`.

## Brief

- **Name:** SECTOR FITNESS
- **Address:** Lviv, vul. Atletychna, 12 (fictional; street confirmed not to exist in Lviv)
- **Goal:** portfolio piece that shows clients we can build a site for a local business; written as if the gym were real, with real visitor scenarios.
- **Character:** open gym for everyone, no premium snobbery and no "closed club" vibe. Core idea: a beginner is not afraid to come in, because staff help pick the right training. Tone: "starting alone at home is hard — here you won't have to".
- **Audience:**
  1. Primary — anyone willing, first of all beginners who feel scared or awkward about going to a gym.
  2. Secondary — people who trained at home or quit and want to come back.
- **Visual message:** show an *achievable* result, not babysitting. Hero = strong, fit, confident person in motion (not a competition bodybuilder); support for beginners comes through headline, copy and CTA. ("Result in the picture, support in the text.")
- **Main visitor action:** book a free trial session with a coach (coach shows the gym and picks a program).
- **Pages:** long home page with all key blocks + 2–3 separate pages (e.g. news/article, possibly schedule, coaches). Final list — at Structure stage.
- **Languages:** Ukrainian (primary) + English.

## Fictional-content disclosure (agreed)

- Footer note: «Концепт-сайт для портфоліо. Зал, адреса, телефон і люди вигадані.» (+ EN version)
- Phone clearly fake: `+380 00 000 00 00`
- Map without a real marker, or a stylized image.

## Media sources (preliminary, finalize at Content stage)

- Photos/videos: AI-generated and/or free stock (Pexels, Unsplash, Pixabay, Mixkit). No real people's personal photos.
- Record the source and license of every file (`docs/media-credits.md`); mention AI/stock origin in README.
- Keep one consistent color grade across all media so mixed sources look like one shoot.
- Media collection must not block development: build with visible placeholders (e.g. `[ФОТО: hero, людина в русі, місце під текст зліва]`, `[ВІДЕО: послуга 1, 5–10 с]`), keep sizes/aspect ratios final so real files drop in later without layout changes.
- Minimum source quality: photos ≥ 2000 px wide, hero ≥ 2500 px wide; videos at least 1080p. Prefer shots with space around people (no cut-off heads).

## Already decided from references (details in `docs/references.md`)

- No shop, no franchise. Corporate memberships — decide at Structure stage.
- **Protein bar** (in brief): bar counter with protein shakes and drinks — replaces the shop block.
- **Events** (in brief): occasional special evenings, e.g. a DJ playing from a balcony above the gym floor. Framed as open, friendly events ("come with a friend"), not a club party, so beginners are not scared off. Real dates/content — placeholders until provided.
- Wanted sections: prices, schedule, coaches, trial booking, contacts, FAQ, gallery, news (placeholders first), 3 services with a short video each.
- Gallery: 3 rows of photos; opened photo must never be cropped (no cut-off heads); horizontal scroll with mouse wheel.
- Running ticker line: wanted, but not Gold's orange-yellow-black stripe — needs a more interesting experiment.
