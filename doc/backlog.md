# Backlog

Ideas parked for later. Each one has a status, the decision behind it, and what "done" means, so it can be picked up without re-deciding. When an item starts, it moves into the plan's progress tracker (plan section 14) and its deliveries go into `doc/delivery.md`.

> This repository is public. Entries follow the same rule as the plan: nothing from the identity plan's "Never public" list, and no held-back project by name.

| # | Idea | Status | Earliest |
| --- | --- | --- | --- |
| B1 | [Evidence-based skills → AI profile explorer](#b1-evidence-based-skills--ai-profile-explorer) | Parked | Part 1 after launch (Feb 2027); Part 2 with the Lab (Apr 2027 or later) |

---

## B1. Evidence-based skills → AI profile explorer

**Status:** Parked · **Recorded:** 17 Nov 2026 · **Owner:** Nasser
**Origin:** My "skills with proof" idea (9 Nov), the evidence model from an "AI profile explorer" spec drafted with ChatGPT, and a review with Claude.

### TL;DR

- **Part 1 (after launch, about one block):** every skill on the site points to proof a reader can open. Its label (Professional / Shipped / Learning) is **derived from the proof**, never typed by hand. No AI, no server.
- **Part 2 (later, as a Lab project):** a grounded AI Q&A over the same data, hosted **separately** from nhussein.io, judged by an evaluation set.
- **Rejected:** an AI chatbot as the main feature of the portfolio, and job-description matching.

**Principle:** build in an order where each step is useful on its own _and_ is the foundation of the next.

### Why not an AI explorer as the main feature (decision log)

| Reason | Detail |
| --- | --- |
| Wrong problem | About 15 records (5 projects, 3 jobs, 2 degrees). The page itself is the index. Making a recruiter type questions slows reading. |
| Wrong impression | "Chat with my portfolio" is a common 2026 gimmick and reads as template or AI work, the opposite of the site's identity. |
| Accuracy risk, already shown | The ChatGPT example named employer tools the employer does not name publicly, called the Veribir role "frontend", and cited a held-back project as public. All three break the plan's rules. |
| Architecture | The site is static on GitHub Pages. AI needs serverless hosting, API key protection, rate limits, abuse controls and costs. It conflicts with the definition of done: no third-party requests, works with JavaScript off. |
| Time | A 23-task backlog against 2.5 hours a week, with Turkish C1 as the root priority. |
| Job-description matching | Dropped for good: a candidate-built "how well I match" tool won't be trusted (conflict of interest). |

**Kept from the ChatGPT spec:** search must not need AI; skill status is derived from evidence; the LLM cites IDs and the server resolves URLs; no vector database at the start; no stored job descriptions.

### Part 1: Skills that carry their own proof

**When:** after the launch (7 Feb 2027), as one block. It extends "Skills, with where I used them" on About.

**Starting point today:** `src/data/skills.ts` already lists 10 skills, each with 1–3 proof links (`{ label, href }`), and About renders them. Part 1 replaces the links with typed proof and adds the derived label and the build checks.

#### Data: `src/data/skills.ts`

```ts
type Proof =
  | { kind: "work"; where: "veribir" } // paid, reviewed work
  | { kind: "project"; slug: string } // a story page on this site
  | { kind: "repo"; url: string } // public code
  | { kind: "course"; name: string }; // studying, nothing shipped yet

type Skill = { name: string; group: string; proof: Proof[] };

export const skills: Skill[] = [
  {
    name: "TypeScript",
    group: "Languages",
    proof: [
      { kind: "work", where: "veribir" },
      { kind: "project", slug: "hop" },
    ],
  },
  { name: "Python", group: "Languages", proof: [{ kind: "project", slug: "career-copilot" }] },
  { name: "Statistics", group: "Learning now", proof: [{ kind: "course", name: "Dijital Üniversite" }] },
];
```

#### The label is derived, never typed

```ts
function status(s: Skill): "Professional" | "Shipped" | "Learning" {
  if (s.proof.some((p) => p.kind === "work")) return "Professional";
  if (s.proof.some((p) => p.kind === "project" || p.kind === "repo")) return "Shipped";
  return "Learning";
}
```

#### What a visitor sees

```
TypeScript     Professional · Veribir, Hop
Python         Shipped · career-copilot
Statistics     Learning · Dijital Üniversite
```

Every name after the dot is a link.

#### Rules

- A skill with **no proof does not appear**.
- "Learning" is shown openly. It is honest, shows direction, and respects the claim ladder (for example, "studying machine learning" only from March 2027).
- Only public proof. Don't name employer tools the employer doesn't name itself.
- Keep it small: 8–10 skills, 1–3 proofs each.

#### Build check (extend `scripts/check-content.mjs`)

- Fail if a skill has zero proof.
- Fail if a `project` slug has no matching story file.
- Fail if a `repo` URL is not in `src/data/repos.json` (public repositories only).

#### Done when

- [ ] `skills.ts` uses the `Proof` model; no hand-typed levels anywhere.
- [ ] About renders skills grouped, with derived status and links.
- [ ] `check:content` enforces the three rules above and runs in CI.
- [ ] Every claim matches LinkedIn and the CV (same facts, same ladder).

**Optional pre-work (paper, 10 minutes):** list 10 skills with one proof each. Any skill without proof is a candidate for the next small project.

### Part 2: AI profile explorer (Lab project)

**When:** after Part 1 and after launch, when the Lab opens (April 2027 or later), and only if Turkish is on track.
**Why build it at all:** it earns the claim-ladder rung **"Builds AI applications"** with public proof, and it is the honest way to learn LLMs, RAG and vectors.

#### Boundaries

- **Separate deployment** (for example `explore.nhussein.io`, or a Lab page linking out). nhussein.io stays static.
- Reads the **same data** as Part 1 (`skills.ts`, the content collections, `profile.ts`). The AI never edits it.
- Public data only. No logins. Questions are not stored by default.
- A demo, not a recruiting funnel. No job-description matching.
- The AI demo colour tokens already exist (`src/styles/tokens.css`, shown on `/styleguide`).

#### Flow

1. Validate the question, then apply a rate limit.
2. Retrieve relevant records. **v0 uses keyword and alias search only.**
3. The LLM answers but may cite **only record IDs** it was given.
4. The server checks every ID and builds titles and URLs itself. Never trust model-generated URLs.
5. No evidence means an explicit refusal: "I find no evidence of X in Nasser's work."
6. Everything works without the LLM (search results still show).

#### Evaluation (the real engineering)

- [ ] Write 30 questions: 20 answerable from the data, 10 not (for example, "Has he used Kubernetes?").
- [ ] Measure the answer rate, citation accuracy, and the **refusal rate on unanswerable questions**.
- [ ] Only then try embeddings or hybrid search, and keep them **only if they beat keyword search on this set** at an acceptable cost.
- [ ] Re-run the evaluation on every prompt or model change (in CI if cheap).

#### Story page (written like the others)

The problem → my part → key decisions (ID-only citations, server-side resolution, refusal) → the result **with numbers** (for example, "keyword 17/20, embeddings 19/20; refused 9/10 unsupported") → what I would change.

#### Done when

- [ ] Deployed separately; nhussein.io unchanged and still static.
- [ ] API key server-side only; rate limiting in place; costs capped.
- [ ] Evaluation set committed; results published on the story page.
- [ ] Zero invented URLs or claims in the evaluation run.

### Learn / read

- **YAGNI:** Martin Fowler, "Yagni" (martinfowler.com).
- **Incremental delivery:** build steps that are each useful alone.
- **Evaluation-driven LLM development:** Anthropic docs, "Define success criteria" and "Create strong empirical evaluations" (docs.claude.com).
- **Retrieval-augmented generation (RAG)** and **hybrid search** (keyword + embeddings).

### Open questions (decide later)

- Hosting for Part 2 (serverless provider, free-tier limits, privacy terms)?
- Which model and provider, and a monthly cost cap?
- Arabic and Turkish questions: after C1, or never?
