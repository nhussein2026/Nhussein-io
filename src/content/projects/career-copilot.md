---
title: career-copilot
summary: AI skills that guide a job search
role: Author and maintainer
team: Solo
start: Jul 2026
status: Open source
stack: [Claude Code skills, Python, GitHub Actions]
repo: career-copilot
featured: true
order: 3
---

## The problem

A job search has many steps: the CV, LinkedIn, the search itself, applications, interviews and offers. AI tools can help with each one, but they also make up claims that a candidate cannot back up.

## My part

I wrote an open-source set of 16 Claude Code skills that cover the search from the master profile to the offer. I packaged them as a plugin that installs in one step, and I maintain them.

## Key decisions

- **Grounding rules.** Every claim a skill writes must trace back to a source the user gave it.
- **Skills that work as a set.** They share references and pass results to each other, so they install together as one plugin.
- **A validator in CI.** A Python script checks every skill before a release.

## The result

16 skills, installable as a Claude Code plugin with two commands.
