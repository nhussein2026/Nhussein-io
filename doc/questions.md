# Open questions for the v2 rebuild

Written 17 Nov 2026 on the `v2` branch. Answer under each item (or just edit the file it names). Items marked **blocks launch** must be settled before v2 goes live; the deploy workflow refuses to publish while any `TO CONFIRM` is left in `src/` (`bun run check:content` lists them).

---

## A. Facts I do not have (blocks launch)

| # | Question | Where it goes |
| --- | --- | --- |
| A1 | **Hop**: when did you start building it? (v1 was Oct 2026.) | `src/content/projects/hop.md` → `start` |
| A2 | **Eskici**: start and end month. Journey uses Nov 2024 as the start, from the plan; is that right? When did it go offline? | `eskici.md` → `start`, `end`; `src/content/journey.yaml` → `eskici` |
| A3 | **Safha**: your role, team size, start date, and what you designed and built yourself. Safha-Front-Dev and Safha-Api-dev (Oct 2023) are forks in your account: was Safha a team project that started then? | `src/content/projects/safha.md` |
| A4 | **About, last paragraph**: one or two lines on what you want to learn or work on next, matching the LinkedIn About. | `src/pages/about.astro`, line 27 |

## B. My wording: confirm or correct

I wrote these from your CV and the old site, but the reason or framing is mine. Strike or rewrite anything that is not true.

- **Hop, The problem**: "I wanted my goals, habits, study plans and career tracking in one place that I own and can run myself, on my laptop and on my phone."
- **Hop, Key decisions**: the *reasons* for the monorepo ("one definition of the data"), SQLite ("one user… simple to run and back up") and the offline PWA ("I use it on my phone, often without a connection").
- **Eskici, The problem**: "Buyers and sellers in Istanbul do not all share one language."
- **Eskici, Key decisions**: "a right-to-left layout for Arabic" and "the stack the whole team could work in".
- **career-copilot, The problem**: "AI tools… also make up claims that a candidate cannot back up" (my reading of why the grounding rules exist).
- **Safha, Key decisions**: "code blocks that stay left to right" (from the old site's "readability-first for right-to-left technical content").
- **About, first and third paragraphs**: a longer version of the LinkedIn About that I assembled from the CV summary. Please replace with your LinkedIn About text so they match word for word.
- **Journey**: every milestone line, especially "first project outside coursework" (Java quiz system, Dec 2022) and "Stayed on part-time and remote after the internship" (Veribir).

## C. "What I would change" (optional, per story)

The plan asks for one or two honest lines per story. I left this part out rather than invent it; the section appears only when you write it. Add a `## What I would change` heading at the end of any story.

## D. Visibility and privacy

| # | Question |
| --- | --- |
| D-a | **Hop repository** is private (you said: public again after removing sensitive data). The story's GitHub link appears automatically on the first build after it is public. Nothing to do here, but the CV still links `github.com/nhussein2026/hop`, which is a 404 for visitors until then. |
| D-b | **Journey lists every public, non-fork repository** (33 today), including `non-profit-association-backend/-frontend` (Feb 2025). Is either of those the held-back volunteer project? If so, make them private or tell me to exclude them by name. |
| D-c | Should course-assignment repositories (`ai-bootcamp-assignment-1`, `ai-local-agent-assignment-2`, `Assignment--3---AI-Agent-with-Tools`, `brewhaus-practicum-…`) show on Journey? They will group under `learning` once topics are set. Default: shown. |
| D-d | **Al Sharq Forum** IT-support volunteering is on the CV but **not** on the site: I could not check it against the identity plan's "Never public" list. Add it as a Journey milestone? |
| D-e | **YOUTHINK Academy / Woz U certificate (2022)** is on the CV but not on the site. Add it to About or Journey? |

## E. Design (plan decisions D2–D5, D10): I used the recommendations

Change any of these and I will follow it.

| # | Used | Where to change |
| --- | --- | --- |
| D2 | Light and dark, following the device; no toggle | `src/styles/global.css` |
| D3 | Accent blue `#1f5bc4` (light) / `#84aefc` (dark), WCAG AA checked. **Is there a specific blue from your LinkedIn cover?** Send the hex. | `global.css`, `public/favicon.svg`, `scripts/og-image.html`, `scripts/icon.html` |
| D4 | Inter + JetBrains Mono, self-hosted | `global.css` |
| D5 | "Build. Learn. Grow." is **not** used anywhere | — |
| D10 | Heatmap kept, drawn at build time on Journey | `src/components/Heatmap.astro` |
| — | **Route art**: one draft (a dotted route with four stops and a blue destination) on Home and the preview image. The plan asked for 2–3 versions to pick from: tell me what the route should represent and I will draw alternatives. | `src/components/RouteArt.astro` |
| — | **Favicon**: an "N." monogram in the accent colour. | `public/favicon.svg` |

## F. Assets I need

- **Photo** (square, ≥ 800 px, same as LinkedIn): About has no photo yet. Do you want one there?
- **Screenshots** at 1600 × 900, two to four per story. Stories render without them; add them to `src/content/projects/` and I will wire `cover:` and captions.
- **Eskici link (D8)**: a recorded walkthrough, if one exists.

## G. Things to run or approve

- **Lighthouse**: I could not run it (the permission check blocked downloading it with `npx -y`). Run `bunx lighthouse@13.6.0 http://localhost:4321 --view` after `bun run build && bun run preview`, or allow it and I will run it on every page.
- **Pre-release `v2.0.0-alpha.1`**: the version is set and the changelog written, but I have **not** tagged or published it. Say so and I will tag the `v2` branch and create the GitHub pre-release.
- **Launch-day settings** (plan step 8): Settings → Pages → Source → "GitHub Actions". Also the `main` branch rule needs one approving review, which you cannot give your own PR; decide: admin merge, or lower it to 0.
- **Node**: this machine has Node 22.22.1, so Astro is pinned to 7.4.1 (7.4.2+ needs Node 22.23.4). CI uses Node 24. Upgrading local Node lets us move to the current Astro as a patch release.

## H. Changes from the written plan

- Journey milestones are **one YAML file** (`src/content/journey.yaml`) instead of one Markdown file each: 14 short entries are easier to correct in one place.
- The tag scheme is SemVer (`v1.0.0`, `v1.0.1`, `v2.0.0-alpha.N`), not `v1-2026` (plan section 8a).
- Removed on `v2`: the old root `CNAME`, `docs/`, `.env.example` and the whole CRA `src/`. `public/CNAME` and the CV are kept; `package-lock.json` is regenerated for the new dependencies.
