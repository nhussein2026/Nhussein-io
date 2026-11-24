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

## 2026-11-22 · quiz-managemnt-system review done

**Delivered** (quiz-managemnt-system `main`, committed and pushed by me as `35cd1a7`)
- My first Java repository (OOP course, Dec 2022 – Jan 2023), 43 commits. Code and history left unchanged on purpose.
- History checked: no real data. The test database holds one test student (me), and the classes hold local-only database settings. Both are kept, as rewriting history would lose the original commits.
- New `README.md` to the README Standard v1.1: built by hand before AI tools, status **Archived** (does not build as committed: 8 classes never added; grade query typo), Learning, honest limitations (plain-text passwords, SQL built from strings).
- The March 2023 README's text and screenshots kept: saved into `docs/images/`, with a private project's schema name covered in the MySQL Workbench sidebar.
- `quiz-management-system` (a March 2023 re-upload with only README commits) deleted; this repository renamed back from `quiz-managemnt-system-old` to its original name.

**Updated**
- `scripts/fetch-repos.mjs`: quiz-managemnt-system added to `SHOWN`.
- `src/content/journey.yaml`: First Java project milestone reworded ("my first university app") and linked to the repository.
- `doc/repo-checklist.md`: both quiz entries done (one deleted); 8 of 43.
- `doc/questions.md`, `doc/delivery.md`: private repository names and a local-password mention removed (24 Nov).

**Notes**
- GitHub settings set 24 Nov: description, topics (`university-project`, `java`, `mysql`, `swing`), wiki off, archived. `src/data/repos.json` refreshed.

---

## 2026-11-22 · brewhaus-practicum-learning-travel-agency review done

**Delivered** (brewhaus-practicum-learning-travel-agency `main`, pushed as `ca662c2`)
- History checked (43 commits): no secrets or `.env` files (only placeholders in `server/.env.example`), no real data. Reviews are labelled samples; the 12 photos are Wikimedia Commons (CC0 / CC BY / CC BY-SA), credited on `/credits`. Week 1 only linked Unsplash images.
- `README.md` rewritten to the README Standard v1.1: Project Journey and Facts (BrewHaus Practicum, Oct – Nov 2026, solo; AI use: bilingual demo with Claude Code), status **Completed** (not deployed yet), technologies, how to run, structure, Learning, limitations, credits, all rights reserved.
- Schema, auth, payments, API, setup, deployment and the week-by-week story moved word for word into `docs/architecture.md`, `docs/running-and-deployment.md` and `docs/development-story.md`.
- The "pitch to a real agency… negotiating" sentence softened to "to show a regional tour agency what a modern site could look like". The old claim that both parts are live was removed.
- GitHub: description set, topics `university-project` + react, express, postgresql, stripe, tailwindcss, drizzle-orm; wiki off; no website yet.

**Updated**
- `scripts/fetch-repos.mjs`: brewhaus-practicum-learning-travel-agency added to `SHOWN`.
- `doc/repo-checklist.md`: done, *on site*; 5 of 43.
- `doc/questions.md`: D-c answered for this repository (shown); the other three assignments stay hidden.

**Notes**
- Commits carry my old email as author; not rewritten (same as DevLab).
- Follow-up when deployed: replace the `YOUR-RAILWAY-APP` placeholder in `client/vercel.json` and set the GitHub website.

---

## 2026-11-22 · Rafiq-ai review done

**Delivered** (Rafiq-ai `main`, pushed as `ed9ae49` and `a08d84e` (English-only title), repository archived)
- History checked: no secrets, `.env` files or real data. The removed `image.png` is a screenshot with the API key masked. 32 tests pass; Ruff clean.
- `README.md` rewritten to the README Standard v1.1: version stamp, Project Journey and Facts (built this version at Hack Day Istanbul; team unnamed; AI use: Claude Code), status **Archived**, technologies, how to run, structure, Learning from `docs/retrospective.md`, limitations. All existing docs kept and linked.
- Third-party content note moved from `LICENSE` to a new `NOTICE` file, so GitHub can recognise the MIT licence.

**Updated** (this repository, `v2-design`)
- `scripts/fetch-repos.mjs`: Rafiq-ai added to `SHOWN`.
- `src/content/journey.yaml`: the Hack Day milestone links the Rafiq-ai repository again.
- `doc/repo-checklist.md`: Rafiq-ai done, *on site*; 4 of 43.

**Notes**
- GitHub settings set before archiving: one-sentence description; topics `hackathon`, `python`, `streamlit`, `gemini-api`, `llm`, `ai-safety`. GitHub now recognises the licence as MIT. Repository archived (read-only).
- 11 commits carry my old email as author; not rewritten (same as DevLab).

---

## 2026-11-20 · Launch with reviewed repositories only

**Decision:** the portfolio launches without waiting for every repository review. Journey lists only reviewed repositories; each one joins as its review is done.

**Updated** (this repository, `v2-design`, not committed)
- `scripts/fetch-repos.mjs`: the `HIDDEN` list is replaced by a `SHOWN` list (DevLab, career-copilot). New or unreviewed public repositories no longer appear on Journey by themselves. `src/data/repos.json` refreshed: 2 repositories.
- Journey's repository line now says how many are reviewed, instead of "refreshed every week".
- `src/content/journey.yaml`: the Rafiq (Hack Day) and First Java milestones keep their text but lose their repository links until those repositories are reviewed.
- `doc/repo-checklist.md`: *on site* marker; livecodes done (milestone only); Rafiq-ai and Ghiras off the site.

**Delivered** (career-copilot `main`, pushed as `1112633`)
- History checked: no secrets, `.env` files or real data; only example addresses in the skill files. `scripts/validate.py` passes (16 skills).
- `README.md` rewritten to the README Standard v1.1: version stamp, Project Journey and Facts, status **Maintained**, technologies, how to run, structure, limitations from `Notes.md`, contributing, MIT licence. All existing install and usage docs kept.

**Notes**
- To confirm: the Project Journey reason (AI tools make up claims) comes from the story page; the AI-use line comes from the Claude co-author lines in the commits.
- career-copilot GitHub settings set: one-sentence description matching the Overview; topics `personal-project`, `claude-code`, `claude-code-plugin`, `claude-skills`, `job-search`, `resume`. GitHub sorts topics alphabetically, so the category topic cannot be listed first.
- Checked on a local production preview: Journey lists DevLab and career-copilot only; no links to unreviewed repositories except learn-turkish in Skills.
- One private client repository reviewed (it stays private): README to the standard, renamed, settings set. Details only in `doc/private/repo-checklist-private.md`.
- `src/data/skills.ts` still links the learn-turkish repository (Astro proof), which is not reviewed yet.

---

## 2026-11-19 · DevLab repository review (done)

First repository in the GitHub repository review.

**Delivered** (DevLab `main`, force-pushed as `f70270a`; GitHub Pages rebuilt, the removed files return 404)
- Real third-party data that came in through outside pull requests removed from the files **and from all of history**: 86 commits rewritten, nothing found by a search of every commit afterwards. The original is kept as a local backup bundle.
- Pages that only showed placeholder or fake results removed: version control, performance analysis, debugging, resume, portfolio and link-tree builders. The broken visitor-count workflow removed. Snippets loaded Prettier from a URL that 404s; fixed to Prettier 2.4.1's browser build (not run in a browser yet).
- CodeMirror loaded from cdnjs (5.65.16) instead of a full copy of its source: about 600 files fewer.
- `flexGeneratore` and `recommandedTools` renamed, with redirect pages at the old names. The About page's Doc link fixed (it was a 404).
- README rewritten to my README Standard v1.1: 14 working tools, journey, status, technologies, verified limitations. MIT `LICENSE` (the licence CONTRIBUTING already named), a PR template and a "sample data only" rule in CONTRIBUTING. The contact email there changed to the public one.

**Delivered** (this repository)
- `doc/readme-standard.md`: the site will read Project Journey and Project Status from each repository's README at build time (my idea; the loader is not built yet).

- `README.md` rewritten to the README Standard v1.1: version stamp, Project Journey and Facts, status **Active**, technologies, limitations, credits.
- `doc/github-readme-standard.md`: README Standard v1.1, from my v1.0 draft and Claude's review: version stamp, fixed headings, Project Facts, status definitions, one Learning section, Credits, No Real Data, GitHub settings.

**Notes**
- Deferred, not blocking (DevLab counts as done): set DevLab's description and `university-project` topic, open issues for the planned tools.
- Old commits can still be opened by their ID through pull requests #1–#4 and the contributor's fork. Ask GitHub Support to purge them ("Remove sensitive data" request).
- Old commits in DevLab still carry my old email as author; rewriting authors was not part of this change.

## 2026-11-17 (night) · story pages, `v2-design` (PR #3)

**Updated**
- The "How AI was used" box is gone from every story, with its `aiNote` field: on Eskici it read as forced. Where AI matters (Hop), "My part" says how it was used, in plain words. Answers J6.
- About intro rewritten for the website: four short paragraphs (who I am, work and study, my own tools, languages) instead of the LinkedIn text, which repeated the Experience, Languages and Contact sections below it. Same facts as LinkedIn, different wording.

## 2026-11-17 (late) · ink and mint, new icon, `v2-design` (PR #3)

The blue looked like every other website. Chosen from side-by-side previews in Chrome: ink for buttons and links, and one calm mint as the only colour, a nod to the first site.

**Updated**
- `tokens.css`: the accent is a calm mint (hue 172): `#7ed1b7` on dark, `#2f9379` on light (`#207963` for mint text). `accent-hover` removed; `logo-bg` and `logo-fg` added. The heatmap ramp is mint too.
- Buttons are ink (primary) or outlined (plain), not coloured. Links are ink with a mint underline and turn mint on hover. The focus ring is ink.
- Icon: a mint "N." on the site's ink tile, the same in both themes. The dot matches the "now" dot on the route. `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` and `og-image.png` re-rendered.
- `check:contrast`: 98 pairs, all pass; checks the favicon against the logo tokens.

**Notes**
- The first site's exact `#64ffda` on navy `#0a192f` was tried and dropped: it is the palette of a widely copied portfolio template, and its glow read as "techy", against the plan's identity. The mint here is softer and sits on our own ink.

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
