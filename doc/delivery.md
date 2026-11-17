# Delivery log

What was delivered, when, and where to find it. Newest first. One entry per work session or release.

How this file fits with the others:

| File | Answers |
| --- | --- |
| `doc/2026-11-16-portfolio-rebuild-plan.md` | What we intend to build. Section 14 is the **progress tracker**: what is done and what remains. |
| `doc/delivery.md` (this file) | What was actually delivered, session by session, with the branch, PR and tag. |
| `doc/questions.md` | What is waiting on an answer from me. |
| `CHANGELOG.md` | What changed per released version, for visitors and GitHub Releases. |

Each entry: date, version or branch, then **Delivered**, **Updated** (changes to existing work), and **Notes** (decisions, follow-ups) where needed.

---

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
