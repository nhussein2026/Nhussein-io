# nhussein.io

The personal site of Nasser Hussein: software engineer and Computer Engineering M.Sc. student at İTÜ. It explains my work to someone who already found me on LinkedIn or GitHub.

Built with [Astro](https://astro.build) as a static site, styled with Tailwind CSS, and published to GitHub Pages by GitHub Actions. Pages ship no JavaScript, load nothing from other companies' servers, and work with JavaScript turned off.

## Run it

Needs [Bun](https://bun.sh) (the version is pinned in `package.json` under `packageManager`) and Node.js, which Astro runs on: 26 LTS, as in `.nvmrc` and CI.

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # fetches GitHub data, then builds into dist/
bun run preview    # serves dist/
```

Checks, as CI runs them:

```sh
bun run check:version   # package.json version is SemVer (and matches the tag, on a release)
bun run check           # TypeScript and content schemas
bun run check:links     # every internal link in dist/ resolves
bun run check:content   # no "TO CONFIRM" left in the content (fails the deploy)
```

## Where things live

| Path | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, headline, links, experience, education, languages |
| `src/data/skills.ts` | Skills, each linked to the work that uses it |
| `src/content/projects/*.md` | One story per project, shown on `/work` |
| `src/content/journey.yaml` | Milestones on `/journey` |
| `src/data/repos.json` | Public repositories, refreshed by `scripts/fetch-repos.mjs` before each build |
| `src/data/contributions.json` | GitHub contribution calendar, refreshed by `scripts/fetch-contributions.mjs` |
| `public/` | Files served as they are: the CV, `CNAME`, icons, the preview image |
| `scripts/og-image.html` | Source of the preview image; re-render with `node scripts/render-images.mjs` |

If GitHub does not answer during a build, the committed JSON files are used.

## Add a project

1. Add `src/content/projects/<slug>.md` with the fields in `src/content.config.ts`. The body has four parts: The problem, My part, Key decisions, The result (and, when there is something honest to say, What I would change).
2. Set `featured: true` and an `order` to put it on the home page (the first three are shown).
3. Put screenshots (1600 × 900) next to it and reference them with `cover:`; they are resized at build time.

A new job or degree is one edit in `src/data/profile.ts`.

## Versions and releases

[Semantic Versioning](https://semver.org). The version in `package.json` is the single source of truth and is shown in the footer, linked to its GitHub Release. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org). After launch, [release-please](https://github.com/googleapis/release-please) turns them into a release pull request, the changelog, the tag and the GitHub Release. See [CHANGELOG.md](CHANGELOG.md).

## History

Version 1 (2023–2026) was a React site based on Brittany Chiang's v4. It is kept under the tags [`v1.0.0`](https://github.com/nhussein2026/Nhussein-io/releases/tag/v1.0.0) and [`v1.0.1`](https://github.com/nhussein2026/Nhussein-io/releases/tag/v1.0.1).

## License

[MIT](LICENSE)
