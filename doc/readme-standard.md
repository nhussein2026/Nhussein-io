# Repository READMEs as the site's source

Every repository follows my GitHub README Standard ([`doc/github-readme-standard.md`](github-readme-standard.md), v1.1). The site reads each public repository's README at build time and takes what Journey needs from it, so project facts are written once, next to the code, and not copied here by hand.

DevLab was the first README written to the standard (19 Nov 2026).

## What the site reads

| README section | Used on the site for |
| --- | --- |
| `# <Title>` | Project name |
| `<!-- readme-standard: x.y -->` | Which version to parse; READMEs without it fall back to the GitHub description |
| `## Project Journey` paragraph | The project's introduction on Journey (2–3 sentences) |
| Project Facts (`- **Role:**`, `**Team:**`, `**Dates:**`, `**AI use:**`) | Role, team, dates and the AI line |
| `## Project Status` | The bold word (`**Maintained.**`) is the status label; it must be one of the five values |
| GitHub topics and Website | Journey group (the category topic) and the live link |

The site does not read the rest of the README.

## How it will work (to build)

1. `scripts/fetch-repos.mjs` already lists the public repositories. For each one, it fetches `https://raw.githubusercontent.com/nhussein2026/<repo>/HEAD/README.md`.
2. It takes the parts above by their exact headings and formats and saves them into `src/data/repos.json` next to the GitHub data. The file is committed, so the build still works offline.
3. Journey shows the `Project Journey` text and the status label. When a README has no such section, Journey falls back to the GitHub description.
4. `check:content` warns when a public repository's README has no version stamp, lacks a mandatory section, uses an unknown status or has no category topic, so a gap shows up at build time.

Featured story pages under `/work/` stay in `src/content/projects/`, because they are longer and site-specific. Screenshots, `featured` and `order` stay in this repository.

## Rules

- The headings are a contract: renaming `## Project Journey` breaks the site's reading of it.
- No never-public content (plan "Never public" list): no employer tools, no held-back projects, no real data.
