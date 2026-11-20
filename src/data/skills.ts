// Skills with proof (decision D1): each skill links to the work that uses it.
// Kept small on purpose: 8 to 10 skills, one to three links each.
// Each proof is a project from the list below, so a reader who has never
// heard of "Hop" still sees what it is: name, a few words, and a link.

export type Project = { label: string; what?: string; href: string };
export type Skill = { name: string; group: string; proof: Project[] };

const gh = (repo: string) => `https://github.com/nhussein2026/${repo}`;

const p = {
  hop: { label: "Hop", what: "my planning app", href: "/work/hop/" },
  eskici: { label: "Eskici", what: "a second-hand marketplace", href: "/work/eskici/" },
  careerCopilot: { label: "career-copilot", what: "AI job-search skills", href: "/work/career-copilot/" },
  safha: { label: "Safha", what: "tutorials in Arabic", href: "/work/safha/" },
  devlab: { label: "DevLab", what: "a web dev toolkit", href: gh("DevLab") },
  learnTurkish: { label: "learn-turkish", what: "a Turkish learning site", href: gh("learn-turkish") },
  site: { label: "this site", href: gh("Nhussein-io") },
} satisfies Record<string, Project>;

export const skills: Skill[] = [
  { name: "TypeScript", group: "Languages", proof: [p.hop] },
  { name: "JavaScript", group: "Languages", proof: [p.eskici, p.devlab] },
  { name: "Python", group: "Languages", proof: [p.careerCopilot] },
  { name: "React", group: "Frontend", proof: [p.hop, p.eskici] },
  { name: "Astro", group: "Frontend", proof: [p.safha, p.learnTurkish, p.site] },
  { name: "Node.js and Express", group: "Backend", proof: [p.hop, p.eskici] },
  { name: "SQL (SQLite)", group: "Backend", proof: [p.hop] },
  { name: "MongoDB", group: "Backend", proof: [p.eskici] },
  { name: "AI-assisted engineering", group: "Practice", proof: [p.hop, p.careerCopilot] },
  { name: "GitHub Actions CI", group: "Practice", proof: [p.careerCopilot, p.site] },
];
