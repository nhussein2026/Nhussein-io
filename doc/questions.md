# Open questions for the v2 rebuild

Written 17 Nov 2026 on the `v2` branch; first round of answers applied the same day. Answer under each item (or just edit the file it names). The deploy workflow refuses to publish while any `TO CONFIRM` is left in `src/` (`bun run check:content` lists them); none are left now.

---

## A. Facts (answered)

| # | Answer | Applied |
| --- | --- | --- |
| A1 | Hop's own history is the source of truth: first commit 15 Sep 2026, `v1.0.0` tagged 22 Oct 2026. | `hop.md` → `start: Sep 2026` |
| A2 | Eskici ended before graduation (7 Jul 2025); exact month unknown. Start kept at Nov 2024. | `eskici.md` → `end: Jul 2025` |
| A3 | The Safha story is **safha.dev**, your own Arabic developer blog: WordPress first (the `Safha-Theme` repository, Dec 2023), now Astro. | `safha.md` → role, team, start, "My part" |
| A4 | About now uses the LinkedIn About word for word. | `src/pages/about.astro` |

**Check in A3:** I used Dec 2023 (when `Safha-Theme` was created) as the start, and "Creator and sole developer" as the role. Correct either if needed.

**The other Safha** (the full-stack certificate graduation project: a book-review community, React, Express, SQL and Sequelize, three people sharing the work equally) is not on the site. Its repositories (`Safha-api-*`, `Safha-Front-New`, the forks from the `Safha2022` organisation) are private. Decide after the repository review whether it gets a Journey line.

## B. Wording

- **B1–B5**: confirmed as written.
- **B6** (Safha, "code blocks that stay left to right" and "a live example editor"): **open**. Check against the safha.dev repository.
- **B7**: done (see A4).
- **B8** (Journey milestone lines): **open**. You will check each one against its repository.

## C. "What I would change": proposals, not on the site

You asked for ideas. These are **my drafts**. Each one is only worth using if it is true for you. Approve, rewrite or decline each. Approved ones go at the end of the story under `## What I would change`.

- **Hop**: "I would design for two devices from day one. Hop started as a single SQLite file on one machine, and using it from my phone came later."
- **Eskici**: "I would plan who keeps it running after graduation. The code still works, but no one owned the hosting once the team moved on."
- **career-copilot**: "I would add tests that run each skill on sample profiles. The validator checks that a skill is well formed, not that its output is right."
- **Safha**: none until B6 is settled.

## D. Visibility and privacy: all open, until the GitHub repository review

To keep the site minimal until then, the repositories in D-b and D-c are **hidden from Journey** (the `HIDDEN` list in `scripts/fetch-repos.mjs`; remove a name to show it again). Journey now lists 27 repositories instead of 33.

| # | Question |
| --- | --- |
| D-a | The **Hop repository** is private. Its story links to GitHub automatically once it is public. The CV links `github.com/nhussein2026/hop`, which shows visitors a 404 until then. |
| D-b | Is `non-profit-association-backend/-frontend` (Feb 2025) the volunteer project you are keeping private? *Hidden for now.* |
| D-c | Should course-assignment repositories (`ai-bootcamp-assignment-1`, `ai-local-agent-assignment-2`, `Assignment--3---AI-Agent-with-Tools`, `brewhaus-practicum-learning-travel-agency`) show on Journey? *Hidden for now.* |
| D-d | Should the Al Sharq Forum IT-support volunteering (on the CV) be a Journey milestone? *Not added.* |
| D-e | Should the YOUTHINK Academy / Woz U certificate (2022) go on About or Journey? *Not added.* |

## E. Design (plan decisions D2–D5, D10): I used the recommendations

Change any of these and I will follow it.

| # | Used | Where to change |
| --- | --- | --- |
| D2 | Light and dark, following the device; no toggle | `src/styles/global.css` |
| D3 | Accent blue `#1f5bc4` (light) / `#84aefc` (dark), WCAG AA checked. **Is there a specific blue from your LinkedIn cover?** Send the hex. | `global.css`, `public/favicon.svg`, `scripts/og-image.html`, `scripts/icon.html` |
| D4 | Inter + JetBrains Mono, self-hosted | `global.css` |
| D5 | "Build. Learn. Grow." is **not** used anywhere | — |
| D10 | Heatmap kept, drawn at build time on Journey | `src/components/Heatmap.astro` |
| — | **Route art**: one draft (a dotted route with four stops and a blue destination) on Home and the preview image. Tell me what the route should represent and I will draw 2–3 alternatives. | `src/components/RouteArt.astro` |
| — | **Favicon**: an "N." monogram in the accent colour. | `public/favicon.svg` |

## F. Assets (later)

- **Photo**: no. Maybe an icon-style avatar later; ignore for now.
- **Screenshots**: not yet. Stories render without them.
- **Eskici walkthrough (D8)**: not yet; a demo or a video later.

## G. Things to run or approve

- **Lighthouse**: open. Run `bunx lighthouse@13.6.0 http://localhost:4321 --view` after `bun run build && bun run preview`, or allow it and I will run it on every page.
- **Pre-release `v2.0.0-alpha.1`**: approved; tagged on `v2`.
- **`main` branch rule**: you merge launch PRs as the owner, with admin bypass. The one-approval rule stays.
- **Tooling**: on the latest stable versions. Node 26 LTS (`.nvmrc`, and installed locally under `~/.local/share/node`), Bun 1.4.4, Astro 7.4.12. TypeScript stays on 6.0.3 because `@astrojs/check` does not support TypeScript 7 yet.
- **Package manager**: Bun (see the switch commit).

## H. Changes from the written plan

- Journey milestones are **one YAML file** (`src/content/journey.yaml`) instead of one Markdown file each: 14 short entries are easier to correct in one place.
- The tag scheme is SemVer (`v1.0.0`, `v1.0.1`, `v2.0.0-alpha.N`), not `v1-2026` (plan section 8a).
- Removed on `v2`: the old root `CNAME`, `docs/`, `.env.example` and the whole CRA `src/`. `public/CNAME` and the CV are kept.
- npm is replaced by Bun: `bun.lock` instead of `package-lock.json`.
