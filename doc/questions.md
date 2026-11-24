# Open questions for the v2 rebuild

Written 17 Nov 2026 on the `v2` branch; first round of answers applied the same day. Answer under each item (or just edit the file it names). The deploy workflow refuses to publish while any `TO CONFIRM` is left in `src/` (`bun run check:content` lists them); none are left now. Overall progress is tracked in section 14 of the plan; deliveries are logged in `doc/delivery.md`.

---

## A. Facts (answered)

| # | Answer | Applied |
| --- | --- | --- |
| A1 | Hop's own history is the source of truth: first commit 15 Sep 2026, `v1.0.0` tagged 22 Oct 2026. | `hop.md` → `start: Sep 2026` |
| A2 | Eskici ended before graduation (7 Jul 2025); exact month unknown. Start kept at Nov 2024. | `eskici.md` → `end: Jul 2025` |
| A3 | The Safha story is **safha.dev**, your own Arabic developer blog: WordPress first (Dec 2023), now Astro. | `safha.md` → role, team, start, "My part" |
| A4 | About now uses the LinkedIn About word for word. | `src/pages/about.astro` |

**Check in A3:** I used Dec 2023 (when its first theme repository was created) as the start, and "Creator and sole developer" as the role. Correct either if needed.

**The other Safha** (the full-stack certificate graduation project: a book-review community, React, Express, SQL and Sequelize, three people sharing the work equally) is not on the site. Its repositories are private; their names are kept in `doc/private/`. Decide after the repository review whether it gets a Journey line.

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

Since 20 Nov, Journey lists only reviewed repositories (the `SHOWN` list in `scripts/fetch-repos.mjs`), so everything in D-b and D-c stays off the site until it is reviewed. These questions no longer block the launch.

| # | Question |
| --- | --- |
| D-a | The **Hop repository** is private. Its story links to GitHub automatically once it is public. The CV links `github.com/nhussein2026/hop`, which shows visitors a 404 until then. |
| D-b | Is `non-profit-association-backend/-frontend` (Feb 2025) the volunteer project you are keeping private? *Hidden for now.* |
| D-c | Should course-assignment repositories (`ai-bootcamp-assignment-1`, `ai-local-agent-assignment-2`, `Assignment--3---AI-Agent-with-Tools`) show on Journey? *Hidden for now.* **`brewhaus-practicum-learning-travel-agency`: answered 22 Nov, shown after its README rewrite.** |
| D-d | Should the Al Sharq Forum IT-support volunteering (on the CV) be a Journey milestone? *Not added.* |
| D-e | Should the YOUTHINK Academy / Woz U certificate (2022) go on About or Journey? *Not added.* |

## E. Design (plan decisions D2–D5, D10): I used the recommendations

Change any of these and I will follow it.

| # | Used | Where to change |
| --- | --- | --- |
| D2 | Light and dark, following the device; no toggle | `src/styles/tokens.css` |
| D3 | Accent blue `#205bc4` (light) / `#82affc` (dark), now OKLCH tokens in `src/styles/tokens.css`, approved 17 Nov. **Is there a specific blue from your LinkedIn cover?** Send the hex. | `src/styles/tokens.css` (then `public/favicon.svg`, `src/layouts/Base.astro`; `bun run check:contrast` says if they drift) |
| D4 | Inter + JetBrains Mono, self-hosted | `src/styles/global.css` |
| D5 | "Build. Learn. Grow." is **not** used anywhere | — |
| D10 | Heatmap kept, drawn at build time on Journey | `src/components/Heatmap.astro` |
| — | **Route art**: phases, decided 17 Nov: stop 1 passed (B.Sc. and first work); now on the way to stop 2 (İTÜ M.Sc. and a full-time job), which fills in only when I decide the phase is complete. Steps to move it are in the component comment. | `src/components/RouteArt.astro`, `scripts/og-image.html` |
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

## I. From the site review (17 Nov)

Fixes already made are ticked in plan section 14. These need you:

| # | Question |
| --- | --- |
| I1 | About says "going deeper into the foundations and into machine learning". The claim ladder allows "studying machine learning" only from Mar 2027. Because About is LinkedIn word for word (A4), change both, for example to "statistics and Python now, machine learning next". Your wording? |
| I2 | About ends with "You can see my work at github.com/nhussein2026". On the site, link to `/work/`? Same LinkedIn question as I1. |
| I3 | Safha has three start dates: site Dec 2023, LinkedIn Jul 2024, CV Feb 2025. Which one, everywhere? Then it gets a Journey line. |
| I4 | Eskici's code link goes to `github.com/3skici`, the name the plan dropped. Rename the GitHub organisation, or keep the URL with the neutral label "Code on GitHub"? |
| I5 | TOEFL is shown without a score. Add the score, or leave it as is? |
| I6 | Heatmap: keep it knowingly (it reads an undocumented GitHub page that may change, and it shows quiet months up close) or drop it? |
| I7 | Until the 27 Nov GitHub cleanup, hide repositories with no description from Journey? |
| I8 | Ghiras is no longer used as proof in skills. Clean up its README and description and add it back, or leave it out? |
| I9 | The review notes the plan reserves November for LinkedIn, the CV, GitHub and Gate 2, with site work from 8 Jan. Keep site work paused until then, apart from answers here? |

## J. Hop story review (17 Nov)

Done: status first in the metadata line; the "How AI was used" box removed from Hop ("My part" already says it in my own words); the divider above "Next" as wide as the text; "← Work" is 30px tall. Not done on purpose: a mono metadata line and a green status dot (both read as template UI; see the design direction).

| # | Question |
| --- | --- |
| J1 | **Screenshot.** One of the Today view with test data, 1600 × 900, under the header; later the phone PWA view. I can make it from Hop's test data if you give me access, or you take it. |
| J2 | **The result.** Proposed: a fact line "6 releases · 40 test files · in daily use since Oct 2026", then one sentence such as "I've used it every day since v1; it holds my study, habit and career plans." Is that true as written? |
| J3 | **What I would change.** My earlier draft: "I would design for two devices from day one. Hop started as a single SQLite file on one machine, and using it from my phone came later." True, or what is? |
| J4 | **Code link.** Hop is private. Add "Code: private for now; a public copy is planned"? Only if a public copy really is planned. |
| J5 | **Offline sync.** How do you handle the phone and laptop both changing data offline (last write wins, the server decides, merge, or the phone is read-only offline)? One sentence on this turns the PWA line into a decision. |
| J6 | ~~**AI notes on other stories.**~~ **Answered 17 Nov:** removed everywhere. The box read as forced; where AI matters (Hop), "My part" already says how it was used. |

## H. Changes from the written plan

- Journey milestones are **one YAML file** (`src/content/journey.yaml`) instead of one Markdown file each: 14 short entries are easier to correct in one place.
- The tag scheme is SemVer (`v1.0.0`, `v1.0.1`, `v2.0.0-alpha.N`), not `v1-2026` (plan section 8a).
- Removed on `v2`: the old root `CNAME`, `docs/`, `.env.example` and the whole CRA `src/`. `public/CNAME` and the CV are kept.
- npm is replaced by Bun: `bun.lock` instead of `package-lock.json`.
