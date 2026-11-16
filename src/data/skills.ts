// Skills with proof (decision D1): each skill links to the work that uses it.
// Kept small on purpose: 8 to 10 skills, one to three links each.
// A proof is either a story slug ("work/hop") or a full URL.

export type Skill = { name: string; group: string; proof: { label: string; href: string }[] };

const gh = (repo: string) => `https://github.com/nhussein2026/${repo}`;

export const skills: Skill[] = [
  {
    name: "TypeScript",
    group: "Languages",
    proof: [
      { label: "Hop", href: "/work/hop" },
      { label: "Ghiras", href: gh("Ghiras") },
    ],
  },
  {
    name: "JavaScript",
    group: "Languages",
    proof: [
      { label: "Eskici", href: "/work/eskici" },
      { label: "DevLab", href: gh("DevLab") },
    ],
  },
  {
    name: "Python",
    group: "Languages",
    proof: [{ label: "career-copilot", href: "/work/career-copilot" }],
  },
  {
    name: "React",
    group: "Frontend",
    proof: [
      { label: "Hop", href: "/work/hop" },
      { label: "Eskici", href: "/work/eskici" },
    ],
  },
  {
    name: "Astro",
    group: "Frontend",
    proof: [
      { label: "Safha", href: "/work/safha" },
      { label: "learn-turkish", href: gh("learn-turkish") },
      { label: "This site", href: gh("Nhussein-io") },
    ],
  },
  {
    name: "Node.js and Express",
    group: "Backend",
    proof: [
      { label: "Hop", href: "/work/hop" },
      { label: "Eskici", href: "/work/eskici" },
    ],
  },
  {
    name: "SQL databases",
    group: "Backend",
    proof: [
      { label: "Hop (SQLite)", href: "/work/hop" },
      { label: "Ghiras (PostgreSQL)", href: gh("Ghiras") },
    ],
  },
  {
    name: "MongoDB",
    group: "Backend",
    proof: [{ label: "Eskici", href: "/work/eskici" }],
  },
  {
    name: "AI-assisted engineering",
    group: "Practice",
    proof: [
      { label: "Hop", href: "/work/hop" },
      { label: "career-copilot", href: "/work/career-copilot" },
    ],
  },
  {
    name: "GitHub Actions CI",
    group: "Practice",
    proof: [
      { label: "career-copilot", href: "/work/career-copilot" },
      { label: "This site", href: gh("Nhussein-io") },
    ],
  },
];
