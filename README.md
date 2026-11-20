<!-- readme-standard: 1.1 -->

# nhussein.io

## Overview

The personal site of Nasser Hussein: software engineer and Computer Engineering M.Sc. student at İTÜ. It explains my work, projects and path to someone who already found me on LinkedIn or GitHub.

It is a static site: pages ship no JavaScript, load nothing from other companies' servers, and work with JavaScript turned off. Project and contribution data come from GitHub at build time.

Live: <https://nhussein.io>

## Project Journey

I started this repository in October 2023 as my first portfolio, a React site based on Brittany Chiang's v4 design. In November 2026 I began rebuilding it from scratch on Astro, in my own plain, editorial design, so that it says the same things as my CV, LinkedIn and GitHub. Version 2 is planned to go live on 5 February 2027.

- **Role:** Sole developer and designer
- **Team:** Solo
- **Dates:** Oct 2023 – present
- **AI use:** Version 1 was built by hand. Version 2 is built with Claude Code from my plan and design decisions; the commits it helped write say so (`Co-Authored-By`).

## Project Status

**Active.** Version 2 is in development on the `v2` branch (`2.0.0-alpha.1`); `nhussein.io` still serves version 1 until the launch.

## Technologies

| Category                  | Used                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Languages                 | TypeScript, Astro components, Markdown and YAML for content                                               |
| Frameworks and Libraries  | Astro 7.4, Tailwind CSS 4.3, `@astrojs/sitemap`; Inter and JetBrains Mono, self-hosted through Fontsource |
| Infrastructure and DevOps | GitHub Pages, GitHub Actions (CI, deploy, release), release-please                                        |
| Development Tools         | Bun 1.4 (package manager and scripts), Node.js 26 LTS, `astro check`, Prettier, linkinator                |

## How to Run

Needs [Bun](https://bun.sh) (the version is pinned in `package.json` under `packageManager`) and Node.js, which Astro runs on: 26 LTS, as in `.nvmrc` and CI.

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # fetches GitHub data, then builds into dist/
bun run preview    # serves dist/
```

No configuration or secrets are needed: the GitHub data is fetched without a token. If GitHub does not answer during a build, the committed JSON files are used.

Checks, as CI runs them:

```sh
bun run check:version   # package.json version is SemVer (and matches the tag, on a release)
bun run check           # TypeScript and content schemas
bun run check:links     # every internal link in dist/ resolves
bun run check:content   # no "TO CONFIRM" left in the content (fails the deploy)
bun run check:contrast  # colour tokens keep their contrast ratios
```

### Add a project

1. Add `src/content/projects/<slug>.md` with the fields in `src/content.config.ts`. The body has four parts: The problem, My part, Key decisions, The result (and, when there is something honest to say, What I would change).
2. Set `featured: true` and an `order` to put it on the home page (the first three are shown).
3. Put screenshots (1600 × 900) next to it and reference them with `cover:`; they are resized at build time.

A new job or degree is one edit in `src/data/profile.ts`.

### Versions and releases

[Semantic Versioning](https://semver.org). The version in `package.json` is the single source of truth and is shown in the footer, linked to its GitHub Release. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org). After launch, [release-please](https://github.com/googleapis/release-please) turns them into a release pull request, the changelog, the tag and the GitHub Release.

## Project Structure

| Path                              | Holds                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `src/pages/`                      | One file per page: home, work, journey, about, style guide, not found                                         |
| `src/components/`, `src/layouts/` | Shared parts and the page layout                                                                              |
| `src/styles/`                     | Design tokens (`tokens.css`) and global styles                                                                |
| `src/data/profile.ts`             | Name, headline, links, experience, education, languages                                                       |
| `src/data/skills.ts`              | Skills, each linked to the work that uses it                                                                  |
| `src/content/projects/*.md`       | One story per project, shown on `/work`                                                                       |
| `src/content/journey.yaml`        | Milestones on `/journey`                                                                                      |
| `src/data/repos.json`             | Public repositories, refreshed by `scripts/fetch-repos.mjs` before each build                                 |
| `src/data/contributions.json`     | GitHub contribution calendar, refreshed by `scripts/fetch-contributions.mjs`                                  |
| `scripts/`                        | Data fetching, checks, and the source of the preview image (`og-image.html`, rendered by `render-images.mjs`) |
| `public/`                         | Files served as they are: the CV, `CNAME`, icons, the preview image                                           |
| `doc/`                            | The rebuild plan, delivery log, open questions and backlog                                                    |

## Limitations

**Missing features**

- Journey does not yet read each repository's README (Project Journey and Project Status, as in the [README standard](doc/readme-standard.md)). It still shows the GitHub description.

## Additional Documentation

- [Rebuild plan](doc/2026-11-16-portfolio-rebuild-plan.md): goals, site map, design decisions and the progress tracker (section 14).
- [Delivery log](doc/delivery.md): what was delivered, session by session.
- [How the site reads READMEs](doc/readme-standard.md).
- [CHANGELOG.md](CHANGELOG.md): changes per released version.

## Credits

- Version 1 (2023–2026) was based on [Brittany Chiang's v4](https://github.com/bchiang7/v4). It is kept under the tags [`v1.0.0`](https://github.com/nhussein2026/Nhussein-io/releases/tag/v1.0.0) and [`v1.0.1`](https://github.com/nhussein2026/Nhussein-io/releases/tag/v1.0.1). Version 2 shares no code or design with it.
- Fonts: [Inter](https://rsms.me/inter/) by Rasmus Andersson and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), both under the SIL Open Font License.

## License

[MIT](LICENSE) © 2023 Nasser Hussein.
