# nhussein.io rebuild plan

Written 16 Nov 2026. Source: the "Unified Career Identity Plan" (tabs: Plan, November rollout, Website rebuild, December to June), checked against this repository as it stands at commit `e66880d`.

**The plan in one paragraph:** the site is rebuilt once, in my own design, on Astro, in the same repository and on the same domain, and goes live on **Fri 5 Feb 2027**. Until then the current site gets exactly two changes (a design credit line and a new CV file, on Sun 22 Nov). The site has one job: explain my work to someone who already found me on LinkedIn or GitHub, using the same headline, facts and projects as those two.

> This repository is public. This file therefore leaves out everything on the identity plan's "Never public" list and names no project that is still held back. Those details stay in the identity plan.

---

## 1. Identity the site must carry

These strings are final and must match LinkedIn, GitHub and the CV word for word.

| Element | Text |
| --- | --- |
| Name | Nasser Hussein |
| Headline | Software Engineer · Computer Engineering M.Sc. student at İTÜ |
| Second line | I build full-stack TypeScript products. |
| Why | I care about understanding how things work and building them properly, so they keep working long after launch. |
| Now | Part-time Software Engineer at Veribir · M.Sc. student at İTÜ · based in Istanbul |
| Open to | I am open to part-time software roles and long paid internships, remote full-time work if it fits, and research projects at İTÜ. |
| Location | Istanbul, Türkiye |
| Public email | nhussein2026@gmail.com |
| Footer | Built by Nasser Hussein (no counter) |

Facts used on About, with the same wording as LinkedIn:

| Fact | Value |
| --- | --- |
| Veribir | Software Engineer, part-time, remote, Jul 2025 – present |
| Veribir internship | Software Engineer Intern, Feb – Jul 2025 |
| EARTech | Software Engineer Intern, Dec 2023 – Feb 2024 |
| M.Sc. | Computer Engineering (thesis), İTÜ, Sep 2026 – present; the entry carries one line: "Turkish language preparation year" |
| B.Sc. | Software Engineering, İstanbul Nişantaşı Üniversitesi, Oct 2021 – Jul 2025 |
| Languages | Arabic (native), English (TOEFL iBT), Turkish (A2, working toward C1) |
| Open source | livecodes PR #905, merged: Astro language **documentation** |

Voice: first person, calm, plain and specific. One idea per sentence. No keyword lists. Retired words: "passionate", "thrilled", "robust", "exciting endeavors", "revolutionizing".

Claim ladder for AI wording on the site:

| May say today | May not say yet |
| --- | --- |
| Uses AI tools daily and reviews the output | "Builds AI applications" |
| Engineers with AI: specs, review, tests, releases (Hop) | "AI engineer" / "ML engineer" as a title |
| Builds AI tooling and automation (career-copilot) | "Researcher" |

---

## 2. What the repository looks like today

Read on 16 Nov. This is what the rebuild replaces.

| Area | Today | File |
| --- | --- | --- |
| Engine | Create React App (`react-scripts` 5), `react-snap` prerender of `/` only, `gh-pages` deploy script | `package.json` |
| Hosting | GitHub Pages from the `gh-pages` branch; domain from `CNAME` | `public/CNAME` |
| Routes | `/` (single long page), `/github-profile`, `/resources`, catch-all 404 | `src/App.js` |
| Direct links | `/github-profile` and `/resources` fail when opened directly: the deployed branch has `200.html` but no `404.html` | `gh-pages` branch |
| Title and hero | "Software Engineer & Full-Stack Web Developer"; no İTÜ, no statement of what I am open to | `public/index.html`, `src/components/hero/Hero.js`, `src/components/home/Home.js` |
| About | Old bio; grouped skill list with no proof | `src/components/about/About.js`, `src/data/skills.js` |
| Experience | Veribir title is "Frontend Web Developer"; bullets name employer tools | `src/components/experience/Experience.js` |
| Projects | 3skici, Ghiras, Safha, Isnnad, DevLab. Titles name the technology. Hop and career-copilot are missing | `src/components/projects/Projects.js` |
| Contact | "Eager for New Ventures!" copy; old email address | `src/components/contact/Contact.js` |
| Footer | "Designed & built by Nasser Hussein" plus star and fork numbers that read as "11" | `src/components/footer/Footer.js` |
| Design | Navy `#0a192f` and mint `#64ffda`, numbered headings, side rails, custom cursor (Brittany Chiang's v4) | `src/index.css`, `src/components/cursor/`, `left-side-items/`, `right-side-section/` |
| Third-party requests | `api.github.com` (footer, repository list), `github-contributions-api.jogruber.de` (heatmap), `avatars.githubusercontent.com` | `Footer.js`, `github-profile/*` |
| Search data | Description, Open Graph, schema.org Person, sitemap with the two old routes | `public/index.html`, `public/sitemap.xml` |
| Old email | Appears in the Person schema, the `<noscript>` block, Contact and `package.json` author | `public/index.html`, `Contact.js`, `package.json` |
| CV | July version, with phone number | `public/Nasser_Hussein_Resume.pdf` |
| README | Create React App boilerplate | `README.md` |

Three points where this clone differs from the Website rebuild spec's clean-up list:

- There is no `.env` here (only `.env.example`, and no code reads the token), no `build/` folder, and `git status` is clean. `docs/` holds only a `CNAME`. The clean-up step is smaller than the spec assumed; check the other working copy before deleting anything there.
- `core.fileMode` is still `true`. Set it to `false` only if the permission-only changes show up again.
- No tags exist yet, so `v1.0.0` is still to be created (section 8a).

---

## 3. Stop-gap on the old site: Sun 22 Nov (15 minutes)

Two changes only. Nothing else on the old site is touched before February.

- [ ] `src/components/footer/Footer.js`: add the line "Design based on Brittany Chiang's v4", linked to brittanychiang.com.
- [ ] Replace `public/Nasser_Hussein_Resume.pdf` with the new public PDF (CV base-v2, no phone number). Keep the file name, so old links keep working.
- [ ] `npm run deploy`. The post-build step needs a local Chromium for `react-snap`.
- [ ] Open nhussein.io in a private window and download the CV. It must show no phone number.

Done when: the live site serves the new PDF and shows the credit line.

---

## 4. Decision for every part of the current site

| Part | Decision | In the new site |
| --- | --- | --- |
| Hero, about, skills, experience, projects, contact | Rewrite and split into pages | Home, Work, Journey, About |
| `/resources` | Drop | Redirects to `/journey`; the list lives on in the Software-Engineering-Resources repository |
| `/github-profile` | Replace | Redirects to `/journey`; the repository list is built in advance, so no browser calls GitHub |
| Contribution heatmap | Drop | It loads data from a third-party service |
| Custom cursor, side rails, numbered headings, navy and mint | Remove | They are the v4 template |
| Footer star and fork counter | Remove | — |
| `/Nasser_Hussein_Resume.pdf` | Keep the same address | `public/` |
| Favicon, logo files, preview image | Redraw | From the new design and route art |
| Title, description, schema.org Person | Keep, with new text | Per page |
| Create React App, `react-snap`, `gh-pages` script | Replace | Astro and a GitHub Actions deploy |
| `docs/`, `.env.example`, old `src/` | Delete on the `v2` branch | — |
| The old site as a whole | Keep under the tags `v1.0.0` and `v1.0.1` | One line on Journey |

Project placement changes:

| Project | Today | New place |
| --- | --- | --- |
| Hop | Absent | Work, first story |
| Eskici (shown today as "3skici") | Featured | Work; renamed Eskici everywhere |
| career-copilot | Absent | Work; holds the third home card until the held-back volunteer project launches |
| Safha | Featured | Work |
| Volunteer platform for a foundation | Absent | Work, third home card, **only after its launch** |
| Ghiras, Isnnad, DevLab, Java quiz | Featured (first three) | Journey, each with an honest one-line status. Isnnad depends on an open check |
| livecodes PR #905 | Banner under projects | Journey milestone; always described as documentation |

---

## 5. The new site

### Site map

```
/                    Home
/work                Work: all story cards
/work/<slug>         One page per story
/journey             Milestones and every public repository
/about               Long About, experience, education, languages, skills, CV, contact
/404                 Not found
/resources           → /journey
/github-profile      → /journey
/Nasser_Hussein_Resume.pdf   unchanged address
```

Left out of this version: blog, Lab page (opens in April once two machine learning entries exist), contact form, visitor tracking, Arabic and Turkish versions, database or admin panel, animations and a custom cursor.

### Shared parts

- Header: my name, then Work, Journey, About.
- Footer: "Built by Nasser Hussein", email, GitHub, LinkedIn, a link to the source. No counter.

### Home

| Block | Content |
| --- | --- |
| Top | Name, headline, second line (section 1) |
| Why | The "Why" sentence |
| Now | The "Now" line |
| Selected work | Three cards: Hop, Eskici, and the third slot (career-copilot until the volunteer platform is live) |
| Experience | Added 17 Nov: three lines (role · company, dates), from `profile.ts`, linking to the full history on About. Veribir is paid production work with code review, the strongest signal for a recruiter scanning the page |
| Open to | The "Open to" sentence, with an email button |
| Links | GitHub, LinkedIn, CV |

### Work

Card titles say what the product does, not what it is built with.

| Project | Card title | Status line |
| --- | --- | --- |
| Hop | A self-hosted planning app for goals, habits and study | In daily use |
| Eskici | A second-hand marketplace in three languages | Graduation project; ran live for about a year; offline now |
| career-copilot | AI skills that guide a job search | Open source |
| Safha | Tutorials for Arabic-speaking developers | Live at safha.dev |
| Volunteer platform | A platform for a foundation's students and staff | Added after launch |

Every story page has a header and five parts, 150 to 250 words in all:

| Part | Holds |
| --- | --- |
| Header | Title, one-line summary, my role, team size, dates, status, links |
| The problem | Who needed what, and why it mattered |
| My part | What I designed and built myself |
| Key decisions | Two or three choices and the reason for each |
| The result | What exists now, with a number where one exists |
| What I would change | One or two honest lines |

Plus two to four captioned screenshots and, where true, one line on how AI was used:

- Hop: "Built with Claude Code from my specs; I reviewed and tested every change."
- Eskici: "Built by hand, before AI coding tools."

### Journey

- **Milestones:** 10 to 12 dated lines, newest first (B.Sc. start 2021, first Java project 2022, student developer club 2023, first internship Dec 2023, Eskici Nov 2024, Veribir 2025, graduation Jul 2025, livecodes PR, career-copilot Jul 2026, İTÜ Sep 2026, Hop v1 Oct 2026, and this site's v1 as one line).
- **Repositories:** every public repository, grouped by topic (`university-project`, `hackathon`, `learning`, `experiment`), with year, description and language. The grouping depends on the topics set on GitHub in the 27 Nov and 6 Dec blocks.
- **Honest status:** early or unfinished work shows what it is. Where a repository has a Journey card in its README, its "what I'd do differently" line appears here.

### About

A longer version of the LinkedIn About, then Experience, Education and Languages (section 1 wording), then skills (decision D1), the CV download, and contact: email, GitHub, LinkedIn, and Kaggle once it is open.

### Not found

A short "page not found" message with links to Home, Work and Journey.

---

## 6. Content model

| File or folder | Holds | Fields |
| --- | --- | --- |
| `src/content/projects/*.md` | One file per story | `title`, `summary`, `role`, `team`, `start`, `end`, `status`, `stack`, `repo`, `live`, `cover`, `featured`, `order`; body = the five parts |
| `src/content/journey/*.md` | Milestones | `date`, `title`, `kind` (study, work, project, community), `line`, `link` |
| `src/data/profile.ts` | Identity and facts | name, headline, second line, email, links, experience, education, languages |
| `src/data/skills.ts` | Skills with proof (if D1 is yes) | `name`, `group`, `proof` (story pages or repository links) |
| `src/data/repos.json` | Saved copy of the repository list | `name`, `description`, `topics`, `language`, `year`, `url`, `archived` |
| `public/` | Files served as they are | CV PDF, `CNAME`, favicon, preview image, `robots.txt` |

Repository list:

1. `scripts/fetch-repos.mjs` runs before each build and asks GitHub's public API for my public repositories. It needs no token. Forks with no commits of my own are filtered out.
2. If GitHub does not answer, the build uses the committed `src/data/repos.json`.
3. A scheduled workflow rebuilds the site once a week. GitHub pauses scheduled workflows after 60 days without repository activity, so the monthly check includes a look at the last run.

Updating later: a new project is one new Markdown file; a new job is one edit in `profile.ts`. The dossier changes first, then this site.

---

## 7. Design

Six rules:

1. **Reading first.** Body text 17 to 18 px, lines of about 70 characters, clear headings.
2. **One accent colour.** It marks links and one highlight per screen.
3. **One decoration.** The route art, as a quiet line on Home, in the preview image and on the LinkedIn cover.
4. **Phone first.** Everything works at 360 px wide.
5. **Calm motion.** None is needed; anything added respects "reduce motion".
6. **Mine.** A stranger could not put their name on it without changing the stories and the art.

Must not return: the `#0a192f` / `#64ffda` pair, numbered section headings, side rails with icons and email, the "Where I've Worked" tab box, the custom cursor.

Parts to build: header, footer, home top, project card, story layout, figure with caption, timeline, repository list, skill list, button, tag.

---

## 8. Technical plan

| Topic | Decision |
| --- | --- |
| Framework | Astro, static output |
| Language | TypeScript, strict |
| Styling | Tailwind CSS with my own colour and type values |
| Content | Astro content collections; fields checked at build time |
| Browser JavaScript | None by default; an island only where a feature needs it |
| Images | Resized at build time, with width and height set |
| Fonts | Self-hosted files; no request to another company's server |
| Redirects | Astro `redirects` for `/resources` and `/github-profile`. On a static host these become small HTML pages that forward to `/journey` |
| 404 | `src/pages/404.astro` builds `404.html`, which GitHub Pages serves for unknown addresses |
| Search engines | Title and description per page, generated sitemap, preview image, schema.org Person with the new headline, İTÜ, the public email and `sameAs` links |
| Checks | `astro check`, a link checker on the built site, and a build, on every push |
| Hosting | GitHub Pages, deployed by GitHub Actions; `public/CNAME` keeps nhussein.io |
| Versions | Latest stable Astro and Node LTS on 8 Jan, pinned in `package.json` |

Steps in the repository:

1. Tag the current `main` as `v1.0.0` and publish it as a GitHub Release (section 8a).
2. Create the branch `v2`. All new work goes there. The live site keeps coming from `gh-pages`.
3. On `v2`: remove the old `src/`, `docs/`, `.env.example`, the CRA dependencies and scripts. Keep `LICENSE`, `CNAME`, the CV file.
4. Scaffold Astro; add the content collections, `profile.ts` and the fetch script.
5. Add `.github/workflows/deploy.yml`: build on push to `main`, on a weekly schedule, and on manual run. Add a second job or workflow that runs the checks on every push to `v2`.
6. Rewrite `README.md`: what the site is, how to run it, how to add a project, and one line of history: "Version 1 (2023–2026) was based on Brittany Chiang's v4."
7. Update `package.json`: description, author email, keywords.
8. Launch day: merge `v2` into `main`; set the Pages source to "GitHub Actions" in the repository settings.
9. Undo, if needed: set the Pages source back to the `gh-pages` branch. The old site returns within minutes. Do not delete `gh-pages` until the new site has been live for a month.

Push after every block. GitHub is the backup for this work.

---

## 8a. Versioning and releases

Semantic Versioning, with a `vX.Y.Z` git tag and a GitHub Release for every version.

**One source of truth.** The `version` field in `package.json`. A tag must equal it; CI fails the release if they differ. The footer of the new site shows the version, linked to its GitHub Release.

**What each number means for this site:**

| Bump | When | Example |
| --- | --- | --- |
| Major | A redesign, or an address that stops working | v1 → v2 (Astro rebuild) |
| Minor | A new page, section or story | Lab page in April → 2.1.0; volunteer story → 2.x.0 |
| Patch | Fixes, wording, a new CV file, dependency updates | Stop-gap → 1.0.1 |

The weekly scheduled rebuild only refreshes `repos.json`; it is not a release.

**Release map:**

| Version | Branch | When | Kind | Holds |
| --- | --- | --- | --- | --- |
| `v1.0.0` | `main` @ `e66880d` | Now | Release | The old site as it stands: "Version 1 (2023–2026), based on Brittany Chiang's v4" |
| `v1.0.1` | `main` | Sun 22 Nov | Release | Design credit line, public CV |
| `v2.0.0-alpha.1` | `v2` | Fri 8 Jan | Pre-release | Astro scaffold, CI, three home drafts |
| `v2.0.0-alpha.2` | `v2` | Sun 10 Jan | Pre-release | Home, header, footer |
| `v2.0.0-alpha.3` | `v2` | Sun 17 Jan | Pre-release | Work page and stories |
| `v2.0.0-beta.1` | `v2` | Sun 24 Jan | Pre-release | Every page exists (Journey, About) |
| `v2.0.0-rc.1` | `v2` | Sun 31 Jan | Pre-release | Search data, redirects, speed and accessibility pass |
| `v2.0.0` | `main` | Fri 5 Feb | Release (latest) | Launch |

`v1.0.1` is the last v1 release; v1 gets no further changes.

**Commits and changelog.** From the first commit on `v2`, commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `ci:`; content changes use the `content` scope, such as `feat(content): add Hop story` or `fix(content): correct Veribir dates`). `CHANGELOG.md` is kept at the repository root.

- Until launch, pre-releases on `v2` are cut by hand: bump `package.json`, update `CHANGELOG.md`, commit `chore(release): v2.0.0-alpha.N`, then `gh release create v2.0.0-alpha.N --prerelease --target v2 --notes-file …`.
- From launch, `release-please` runs on `main` as a GitHub Action: it opens a release PR that bumps `package.json`, writes the changelog, and on merge creates the tag and the GitHub Release. Deploys still run on every push to `main`.

**Rollback by version.** Any release can be rebuilt from its tag. Before launch, the old site's rollback stays the `gh-pages` branch (step 9).

## 8b. Open question from `ideas.md`: the heatmap

`ideas.md` says the contribution heatmap shows my commitment. D6 drops it because today it loads from a third-party service, which breaks the definition of done. Both can hold: draw the heatmap **at build time** from GitHub's data into a static SVG on Journey, refreshed by the weekly build, so no browser calls anyone. Logged as D10 below; decide by Sun 27 Dec.

---

## 9. Inputs to collect before January

| Input | Who | Ready by |
| --- | --- | --- |
| Public CV PDF (base-v2, no phone) | Me | Sun 22 Nov |
| Repository descriptions and topics on GitHub | Me | Sun 6 Dec |
| Design choices: theme, one accent colour, font pair | Me | Sun 27 Dec |
| Photo, square, at least 800 px (same as LinkedIn) | Me | Sun 27 Dec |
| Screenshots at 1600 × 900 for each story | Me; Claude for Hop, from test data | Sun 27 Dec |
| Open answers: Eskici and Safha start and end dates; the two consent checks from the identity plan | Me | Sun 27 Dec |
| Route art as a vector file, two or three versions | Claude drafts; I pick | Fri 8 Jan |
| Facts for `profile.ts` | Claude, from the dossier | Fri 8 Jan |
| Story drafts in five parts | Claude drafts; I correct | Fri 15 Jan |
| Journey milestones, 10 to 12 dated lines | Claude drafts; I correct | Fri 22 Jan |

---

## 10. Build schedule

Claude builds between blocks. My blocks are for choosing, correcting and approving. No site work in the week of 4 Jan.

| Block | Date | In my block | Ready before it |
| --- | --- | --- | --- |
| — | Sun 22 Nov | Stop-gap on the old site (section 3); release `v1.0.1` | New public CV PDF |
| 0 | Sun 27 Dec | Make the design choices; gather photo and screenshots | — |
| 1 | Fri 8 Jan | Pick one of three home-page drafts; fix colours and fonts | Branch `v2`, three drafts, route art versions |
| 2 | Sun 10 Jan | Review layout and Home on phone and laptop | Home, header, footer |
| 3 | Fri 15 Jan | Correct the Hop story | Work page and the Hop story draft |
| 4 | Sun 17 Jan | Correct the other stories | Their drafts |
| 5 | Fri 22 Jan | Correct the milestones; check the repository list | Journey page, fetch script |
| 6 | Sun 24 Jan | Decide the skills idea (D1); review About | About page and one skills example |
| 7 | Fri 29 Jan | Check how a shared link looks on LinkedIn; approve the not-found page | Search data, preview image, redirects |
| 8 | Sun 31 Jan | Read the whole site aloud on my phone; list the fixes | Speed and accessibility pass |
| 9 | Fri 5 Feb | **Launch** | The fixes |
| 10 | Sun 7 Feb | After-launch links; spare time | — |

If a block is lost, the launch moves by one block. If it slips past Sun 7 Feb, the next safe date is **Fri 12 Mar**.

---

## 11. Definition of done

The site launches only when every line is ticked.

- [ ] Every page opens from its direct link, and again after a refresh.
- [ ] Old addresses still work: the CV file, and `/resources` and `/github-profile`, which lead to Journey.
- [ ] The headline, job titles and dates match the dossier, LinkedIn and the CV, word for word.
- [ ] Nothing on the identity plan's "Never public" list shows anywhere: pages, images, screenshots, metadata, commit history of `v2`. The only email is nhussein2026@gmail.com.
- [ ] At 360 px wide, nothing scrolls sideways and the text is readable without zoom.
- [ ] Every link can be reached with the Tab key, and the focus is visible.
- [ ] Colour contrast meets WCAG AA, every image has alt text, and each page has one main heading.
- [ ] Lighthouse, on its phone setting, gives 95 or more for performance, accessibility, best practices and SEO.
- [ ] No page asks another company's server for anything when it loads.
- [ ] The site works with JavaScript turned off.
- [ ] The build and the link check pass on GitHub.
- [ ] Nothing from the old template remains.
- [ ] A person who doesn't know me can say, after 10 seconds on Home, what I do and how to reach me.

---

## 12. Launch and after

**Fri 5 Feb**

- [ ] Tick the definition of done.
- [ ] Merge `v2` into `main`, switch the Pages source, wait for the first deploy.
- [ ] Open nhussein.io in a private window. Test five direct links and the CV download.
- [ ] If anything is wrong, switch the Pages source back and fix it on Sunday.

**Sun 7 Feb: connect the other platforms**

- [ ] LinkedIn: set the website to nhussein.io, add it to Featured, point the last line of the About to it.
- [ ] GitHub: the profile README's last line links to the site.
- [ ] CV: put the site link back in the header of base-v2.
- [ ] Safha, DevLab and learn-turkish: add a link back to nhussein.io.
- [ ] LinkedIn cover: switch to the new route art, if preferred.
- [ ] One short post saying what changed and why.

**Later**

- When the held-back volunteer project is live and cleared: add its story file and move it into the third home card.
- When Kaggle opens: add the link to About and to `sameAs`.
- April: add the Lab page once two real machine learning entries exist.
- First Sunday of each month: open the site, the CV download and five links in a private window; check the last scheduled build.
- After any milestone: dossier first, then this site within one week.

---

## 13. Decisions and risks

| # | Decision | Recommendation | Decide by |
| --- | --- | --- | --- |
| D1 | Skills with proof: each skill links to the projects and repositories that use it | Yes, kept small: 8 to 10 skills, one to three links each | Sun 24 Jan |
| D2 | Theme | Light and dark following the device, light as default | Sun 27 Dec |
| D3 | Accent colour | One blue from the LinkedIn cover, checked for contrast on both themes | Sun 27 Dec |
| D4 | Fonts | Inter with JetBrains Mono; both cover Turkish letters | Sun 27 Dec |
| D5 | "Build. Learn. Grow." | Small in the footer, or nowhere | Sun 27 Dec |
| D6 | `/resources` and the heatmap | Drop both | Sun 27 Dec |
| D7 | Visitor statistics | None at launch | Fri 29 Jan |
| D8 | Eskici link in its story | The live demo or a recorded walkthrough, whichever exists | Sun 31 Jan |
| D9 | Email on my own domain | Later | After launch |
| D10 | Contribution heatmap | Keep, rendered at build time as a static SVG on Journey (section 8b) | Sun 27 Dec |

| Risk | Fallback |
| --- | --- |
| A block is lost | The launch moves by one block; hard fallback Fri 12 Mar |
| The design choices drag on | Pick from the three drafts in block 1, one round of changes only |
| Fewer than three stories are ready by 31 Jan | Launch with Hop, Eskici and career-copilot; add the others later as single files |
| The volunteer project's launch slips | Leave it out; it joins the day it is live |
| GitHub does not answer during a build | The saved `repos.json` is used |
| The domain breaks on launch day | Switch the Pages source back to `gh-pages` |
| Repository topics are not set by 22 Jan | Journey shows one flat list by year; grouping follows when the topics exist |

---

## 14. Progress tracker

The one place to see what is done and what remains. Updated at the end of every work session; what was delivered in each session is logged in `doc/delivery.md`, and answers I still owe are in `doc/questions.md`.

Last updated: **19 Nov 2026, DevLab repository review** · current version `2.0.0-alpha.1` · next release `v2.0.0-beta.1`

Legend: `[x]` done · `[ ]` to do · *(me)* needs my answer or action · *(Claude)* Claude builds it.

### Version 1 (old site)

- [x] Tag `v1.0.0` and publish the GitHub Release (16 Nov)
- [x] Stop-gap: design credit line in the footer (17 Nov, `v1.0.1`)
- [x] Stop-gap: new public CV without phone, same address (17 Nov, `v1.0.1`)
- [x] Deploy `v1.0.1` to `gh-pages`

### Setup (plan section 8, steps 1–7)

- [x] Branch `v2`; old React site, `docs/`, `.env.example` removed
- [x] Astro, Tailwind, strict TypeScript, self-hosted fonts
- [x] Content collections, `profile.ts`, `skills.ts`, fetch scripts with saved fallback
- [x] Workflows: checks, Pages deploy, release-please, weekly rebuild
- [x] README and `CHANGELOG.md`; `package.json` description, author, keywords
- [x] Bun, Node 26 LTS, Astro 7.4.12
- [x] Pre-release `v2.0.0-alpha.1`
- [ ] Merge PR #2 (`v2-answers-1` → `v2`) *(me)*

### Pages

- [x] Home: top, why, now, three cards, open to, links
- [x] Work page and story pages
- [x] Journey: milestones, heatmap, repository list
- [x] About: LinkedIn About, experience, education, languages, skills, CV, contact
- [x] 404 page
- [x] Redirects for `/resources` and `/github-profile`
- [ ] Approve the 404 page *(me, block 7)*

### Content

- [x] Hop, Eskici, career-copilot, Safha stories drafted
- [x] Story dates for Hop, Eskici, Safha (A1–A3)
- [x] About text from LinkedIn (A4)
- [ ] Safha wording checked against safha.dev (B6) *(me)*
- [ ] Journey milestones checked against each repository (B8) *(me)*
- [ ] "What I would change" lines approved for each story (C) *(me)*
- [ ] Skills with proof: final yes or no (D1) *(me)*
- [ ] Screenshots, 2–4 per story *(me; Claude for Hop)*
- [ ] Eskici demo or walkthrough link (D8) *(me)*
- [ ] Volunteer platform story: only after its launch

### Visibility and GitHub

- [ ] Repository review: decide D-a to D-e, then update the `HIDDEN` list *(me)*
- [ ] Repository review, one repository at a time:
  - [x] DevLab: data removed from history, dead tools removed, README to the README Standard v1.1, MIT licence, PR template, Snippets formatting fixed *(pushed 19 Nov)*
  - [x] **DevLab review: done (19 Nov).** Deferred, not blocking: description, website and `university-project` topic; 3 good-first-issues; GitHub Support purge of old PR commits; AI-use and Learning lines in its README *(me, later)*
- [ ] READMEs as the source (`doc/readme-standard.md`): `fetch-repos.mjs` reads Project Journey and Project Status from each public README; Journey shows them
- [x] README Standard v1.1 (`doc/github-readme-standard.md`): format contract, Project Facts, status definitions, Learning, Credits, No Real Data
- [ ] Apply the README Standard to each repository (DevLab and this repository done)
- [ ] Hop repository public, or remove the link from the CV (D-a) *(me)*
- [ ] Repository descriptions and topics set on GitHub, so Journey can group by topic *(me)*

### Design

- [x] Theme, accent, fonts (D2–D4); "Build. Learn. Grow." not used (D5)
- [x] Heatmap at build time (D10)
- [x] Favicon and preview image
- [x] Design system approved (17 Nov): OKLCH colour tokens in `src/styles/tokens.css` (base, one accent, status, charts, AI demo, code), type scale 1.2 on 17px, editorial layout with no boxed cards, pill tags or status dots
- [x] `bun run check:contrast`: every text and UI pair passes WCAG 2.2 AA in both themes; runs in CI and before deploy
- [x] `/styleguide` (noindex, not in the sitemap or the nav)
- [x] Story pages end with "Next: …" and "Questions about this project? Email me."
- [x] Home: a three-line Experience strip after Selected work, linking to About (17 Nov, changes section 5)
- [x] Lighthouse, phone setting: accessibility, best practices and SEO 100 on every page (404 SEO 63, by design: `noindex`). Performance 75–98 on this laptop because of a slow-CPU warning; 100 with no CPU slowdown. Recheck with PageSpeed Insights after launch
- [ ] Accent blue from the LinkedIn cover, if there is one (D3) *(me)*
- [x] Route art shows progress (17 Nov): stop 1 passed (B.Sc. and first work), now on the way to stop 2 (İTÜ M.Sc. and a full-time job)

### Site review, 17 Nov (Claude in Chrome review of the alpha)

Fixed (not yet committed):

- [x] `robots.txt` points to `/sitemap-index.xml`, the file Astro actually builds
- [x] Trailing slashes: `trailingSlash: "always"` and every internal link ends in `/`, so no click goes through a 301 and canonicals point at the final address
- [x] 404 page: no canonical; `noindex` instead
- [x] Heatmap: weekday labels sit in their own column and no longer get cut off; the scroll starts at the newest weeks, without JavaScript
- [x] Header links at least 24 px tall (WCAG 2.2, 2.5.8)
- [x] Reading width: one `max-w-measure` token (60ch, about 70 characters a line) for all running text
- [x] Skills: Ghiras removed as proof for TypeScript and SQL; Hop alone until Ghiras is cleaned up
- [x] Favicon: already blue in every file (svg, ico, png); no change needed

Open, see `doc/questions.md` section I:

- [ ] About: "going deeper … into machine learning" breaks the claim ladder until Mar 2027; change it on LinkedIn and the site together *(me)*
- [ ] About: last line links to GitHub; link to `/work/` instead *(me, same reason)*
- [ ] Safha: one start date used everywhere (site Dec 2023, LinkedIn Jul 2024, CV Feb 2025) *(me)*
- [ ] Safha: a Journey milestone, once the date is settled *(me, then Claude)*
- [ ] Eskici: the code link goes to `github.com/3skici`; rename the organisation or relabel the link *(me)*
- [ ] TOEFL: add the score or leave it as is *(me)*
- [ ] Heatmap: keep it knowingly (it reads an undocumented GitHub page, and shows quiet months) or drop it *(me)*
- [ ] Journey: hide repositories with no description until the GitHub cleanup *(me: yes or no)*
- [ ] GitHub cleanup (27 Nov block): descriptions, typos, topics; this fixes the Journey list *(me)*
- [ ] Ghiras: improve its README and description, or keep it out of skills *(me)*
- [ ] "What I would change" lines and screenshots (already listed under Content)
- [ ] Design choices due 27 Dec were made by Claude's defaults: confirm they are yours (section E of questions) *(me)*

### Release candidate (`v2.0.0-rc.1`)

- [ ] Lighthouse on the live site (PageSpeed Insights), 95+ in all four *(Claude, after launch)*
- [ ] Accessibility pass: keyboard, focus, contrast, alt text, one `h1` per page *(Claude)*
- [ ] 360 px check on every page *(Claude)*
- [ ] Shared link preview on LinkedIn *(me, block 7)*
- [ ] Read the whole site aloud on the phone; list the fixes *(me, block 8)*
- [ ] Definition of done (section 11): every line ticked

### Launch (Fri 5 Feb 2027) and after

- [ ] Merge `v2` into `main` by PR; switch Pages source to GitHub Actions *(me)*
- [ ] Private-window test: five direct links and the CV
- [ ] Release `v2.0.0`
- [ ] Sun 7 Feb: LinkedIn website, Featured and About; GitHub profile README; CV header link; backlinks from Safha, DevLab, learn-turkish; LinkedIn cover; one post
- [ ] Delete `gh-pages` one month after launch

### Backlog (parked, see `doc/backlog.md`)

- [ ] B1 Part 1: skills with typed proof and a derived label (Professional / Shipped / Learning), enforced by `check:content` *(after launch, one block)*
- [ ] B1 Part 2: AI profile explorer as a separate Lab project, judged by a 30-question evaluation *(Apr 2027 or later)*
