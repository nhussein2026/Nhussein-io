---
title: Hop
summary: A self-hosted planning app for goals, habits and study
role: Designer and sole developer
team: Solo
start: Sep 2026
end: Oct 2026 (v1)
status: In daily use
stack: [TypeScript, React, Node.js, SQLite]
repo: hop
featured: true
order: 1
aiNote: Built with Claude Code from my specs; I reviewed and tested every change.
---

## The problem

I wanted my goals, habits, study plans and career tracking in one place that I own and can run myself, on my laptop and on my phone.

## My part

I designed Hop and wrote its specs, decision records and release rules. I built it with Claude Code, working from those specs. I reviewed and tested every change before it went into a release.

## Key decisions

- **One TypeScript monorepo.** The React web app, the Node.js API and the shared domain and validation packages live together, so the app and the API use one definition of the data.
- **SQLite with migrations.** Hop has one user and runs on my own machine. A single database file is simple to run and to back up, and migrations keep every change to it on record.
- **An installable PWA that works offline.** I use it on my phone, often without a connection.

## The result

Hop is in daily use. It has 40 test files, database migrations and six tagged releases.
