# Changelog

All notable changes to nhussein.io. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [2.0.0-alpha.1] - Unreleased

The site is rebuilt from scratch on Astro. Work in progress on the `v2` branch; not live yet.

### Added
- Pages: Home, Work with one page per story, Journey, About and a not-found page.
- Stories for Hop, Eskici, career-copilot and Safha.
- Journey: dated milestones, a GitHub contribution heatmap drawn at build time, and every public repository, refreshed weekly.
- About: experience, education, languages, skills linked to the work that uses them, CV and contact.
- Light and dark themes following the device; self-hosted Inter and JetBrains Mono.
- Search data per page, sitemap, preview image, schema.org Person.
- CI (version, types, build, links, open content questions), GitHub Pages deploy, release-please.
- The version in the footer, linked to its GitHub Release.

### Changed
- `/resources` and `/github-profile` now lead to `/journey`.

### Removed
- The React site, the custom cursor, side rails, numbered headings, the star counter and every request to another company's server.

## [1.0.1] - 2026-11-17

### Added
- Design credit line in the footer: "Design based on Brittany Chiang's v4".

### Changed
- Public CV (`/Nasser_Hussein_Resume.pdf`) replaced with the current version. Same address.

## [1.0.0] - 2026-11-16

Version 1 of the site (2023–2026), built with Create React App and based on Brittany Chiang's v4. Tagged as it stands at `e66880d`.

[Unreleased]: https://github.com/nhussein2026/Nhussein-io/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/nhussein2026/Nhussein-io/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/nhussein2026/Nhussein-io/releases/tag/v1.0.0
