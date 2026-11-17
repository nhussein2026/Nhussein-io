# Delivery log

What was delivered, when, and where to find it. Newest first. One entry per work session or release.

How this file fits with the others:

| File | Answers |
| --- | --- |
| `doc/2026-11-16-portfolio-rebuild-plan.md` | What we intend to build. Section 14 is the **progress tracker**: what is done and what remains. |
| `doc/delivery.md` (this file) | What was actually delivered, session by session, with the branch, PR and tag. |
| `doc/questions.md` | What is waiting on an answer from me. |
| `doc/backlog.md` | Ideas parked for later, with the decision behind each and what done means. |
| `CHANGELOG.md` | What changed per released version, for visitors and GitHub Releases. |

Each entry: date, version or branch, then **Delivered**, **Updated** (changes to existing work), and **Notes** (decisions, follow-ups) where needed.

---

## 2026-11-17 (evening) · design system, `v2-design` → `v2` (PR #3)

Approved after a side-by-side preview in Chrome, with one direction from me: human, professional and simple, nothing that looks generated.

**Delivered**
- `src/styles/tokens.css`: every colour as an OKLCH token with light and dark values. Base, one accent blue (hue 261), status (success, warning, danger; info uses the accent), focus and selection, six colour-blind-safe chart colours, a 5-step sequential and a 7-step diverging scale, graph and chart chrome, AI demo surfaces, and the Shiki code theme.
- `scripts/check-contrast.mjs` (`bun run check:contrast`): 104 checks, every pair in both themes; also checks the hex copies in `favicon.svg` and the `theme-color` meta tags. Added to CI and the deploy workflow. Colour maths shared with the style guide in `src/lib/color.ts`.
- Type scale: seven sizes, ratio 1.2 on 17px; every loose size replaced.
- `/styleguide`: tokens with both hex values and contrast, type scale, links and buttons, project list, status messages, code, charts, AI demo. `noindex`, kept out of the sitemap and the nav.
- Story pages: one metadata line (role · team · dates · status), "Built with …" as text, "Next: …" and a contact line at the end.
- Home: Experience strip after Selected work (three lines from `profile.ts`, "Full history" to `/about/#experience`), from the review's content-hierarchy point.

**Updated**
- Project cards became plain rows with hairlines; Hop leads on Home and gets its screenshot once one exists. Pill tags (`Tag.astro`) removed.
- Timeline: a date column beside the text instead of dots on a rail. Skill groups in sentence case.
- Heatmap uses the sequential tokens and fits the desktop column without scrolling.
- Header links 44px tall; current page underlined through `aria-current`. Standalone link lists at least 24px tall.
- `Figure` renders nothing until an image exists.
- Favicon, preview image and icons re-rendered from the tokens; `og-image.html` and `icon.html` read `tokens.css`.
- Light background moved from warm `#fbfbf9` to `#f9fafc`, tinted toward the accent.
- `trailingSlash` back to `"ignore"`: with `"always"`, the local dev and preview servers showed Astro's default 404 for any address without a slash. The canonical URL now always ends in `/` (`Base.astro`), so search engines still see one address per page.
- 404 page redesigned: centred between header and footer, a small "404", a larger title, and Home as the main button with Work and Journey beside it. Same wording.
- GitHub and LinkedIn links (Home, footer, About) open in a new tab, with `rel="me noopener"` and a screen-reader note.
- Story pages laid out as a case study instead of a chat answer: section names are quiet labels (a left column from 640 px), and each key decision is a title line with its sentence below, without bullets. Decision titles lose their full stop; Eskici's three decisions rephrased into the same title-then-sentence shape, same meaning.
- Hop story: status first in the metadata line; "How AI was used" box removed from Hop ("My part" already says it); divider above "Next" as wide as the text. Open points in `doc/questions.md` section J.
- Route art redrawn to show progress, by my own phases: stop 1 passed (B.Sc. and first work), "now" partway toward stop 2 (İTÜ M.Sc. and a full-time job; it fills in when I decide the phase is complete, not when it starts), three stops ahead. Preview image re-rendered to match.

**Notes**
- `bun run check`, build, link check and contrast check pass. No horizontal scroll at 360, 768 or 1280 px; one `h1` per page; standalone links at least 24 px.
- Lighthouse (phone): accessibility, best practices, SEO 100 on every page. Performance 75–98 locally, all from total blocking time on a slow CPU (Lighthouse warns about it); 100 with no CPU slowdown.

## 2026-11-17 (afternoon) · `v2-answers-1`, uncommitted

Fixes from the Claude in Chrome review of the alpha. Open points from the review are in `doc/questions.md` section I and plan section 14.

**Updated**
- `robots.txt` names `/sitemap-index.xml`.
- `trailingSlash: "always"`; every internal link and redirect target ends in `/`. Canonicals now match the served address.
- 404 page has `noindex` and no canonical (new `noindex` prop on `Base.astro`).
- Heatmap: fixed weekday column outside the scroll area; scroll starts at the newest weeks through `flex-row-reverse`, no JavaScript.
- Header links have 24 px+ tap targets.
- Reading width: `--container-measure: 60ch` (`max-w-measure`), about 70 characters a line, replaces the 62ch and 68ch values.
- Skills: Ghiras removed as proof.

**Notes**
- `bun run check`, build and link check pass. Checked at 360 and 1280 px in headless Chrome.

## 2026-11-17 · `v2-answers-1` → `v2` (PR #2, open)

**Delivered**
- `doc/delivery.md` (this log) and the progress tracker in plan section 14.

**Updated**
- Package manager switched from npm to Bun (`bun.lock`).
- Tooling on the latest stable versions: Node 26 LTS (`.nvmrc`), Bun 1.4.4, Astro 7.4.12. TypeScript stays on 6.0.3 until `@astrojs/check` supports 7.
- Story facts: Hop starts Sep 2026; Eskici ends Jul 2025; Safha is safha.dev (role, team, start Dec 2023, "My part").
- About uses the LinkedIn About word for word.
- Six unreviewed repositories hidden from Journey (`HIDDEN` list in `scripts/fetch-repos.mjs`): 27 shown instead of 33.
- `doc/questions.md` records the first round of answers and what is still open.

## 2026-11-17 · `v2.0.0-alpha.1` (pre-release, tagged on `v2`)

**Delivered**
- Astro 7 site with Tailwind CSS 4, strict TypeScript, self-hosted Inter and JetBrains Mono.
- Pages: Home, Work, one page per story, Journey, About, 404.
- Stories: Hop, Eskici, career-copilot, Safha.
- Journey: 14 milestones (`src/content/journey.yaml`), contribution heatmap drawn at build time, public repository list fetched at build time with `src/data/repos.json` as fallback.
- About: experience, education, languages, skills with proof, CV, contact.
- Components: header, footer, project card, figure, timeline, repository list, skill list, button, tag, route art (one draft).
- Light and dark themes following the device; accent blue `#1f5bc4` / `#84aefc`.
- Search data per page, sitemap, preview image, schema.org Person, favicon set.
- Redirects: `/resources` and `/github-profile` → `/journey`. CV keeps its address.
- CI: version check, `astro check`, build, link check, open content questions. GitHub Pages deploy workflow. release-please for `main`.
- README rewritten; `CHANGELOG.md` entry for 2.0.0-alpha.1.

**Updated**
- Removed the version 1 React site, `docs/`, `.env.example` and the root `CNAME`.

**Notes**
- Ahead of schedule: the plan had alpha.1 on Fri 8 Jan and every page by Sun 24 Jan.

## 2026-11-17 · `v1.0.1` (release, `main`, PR #1)

**Delivered**
- Footer credit line: "Design based on Brittany Chiang's v4".
- New public CV at the same address, without the phone number.
- Deployed to `gh-pages`. This is the last v1 release.

## 2026-11-16 · `v1.0.0` (release)

**Delivered**
- The old site tagged and released as it stood at `e66880d`: "Version 1 (2023–2026), based on Brittany Chiang's v4".
- Rebuild plan written: `doc/2026-11-16-portfolio-rebuild-plan.md`.
