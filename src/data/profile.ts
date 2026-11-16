// Identity and facts. These strings must match LinkedIn, GitHub and the CV word for word
// (doc/2026-11-16-portfolio-rebuild-plan.md, section 1). Change the dossier first, then this file.

export const profile = {
  name: "Nasser Hussein",
  headline: "Software Engineer · Computer Engineering M.Sc. student at İTÜ",
  secondLine: "I build full-stack TypeScript products.",
  why: "I care about understanding how things work and building them properly, so they keep working long after launch.",
  now: "Part-time Software Engineer at Veribir · M.Sc. student at İTÜ · based in Istanbul",
  openTo:
    "I am open to part-time software roles and long paid internships, remote full-time work if it fits, and research projects at İTÜ.",
  location: "Istanbul, Türkiye",
  email: "nhussein2026@gmail.com",
  cv: "/Nasser_Hussein_Resume.pdf",
  links: {
    github: "https://github.com/nhussein2026",
    linkedin: "https://www.linkedin.com/in/nhussein2026",
    source: "https://github.com/nhussein2026/Nhussein-io",
  },
} as const;

export type Experience = {
  title: string;
  org: string;
  terms: string;
  start: string;
  end: string;
  lines: string[];
};

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    org: "Veribir Technology Services Ltd",
    terms: "Part-time, remote",
    start: "Jul 2025",
    end: "present",
    lines: [
      "Veribir puts industrial manufacturers' product data online, straight from their existing databases, with every website built on one standard CMS structure.",
      "I build multilingual websites on that structure, from the interface to the backend.",
      "I use AI in the team's daily work, with MCP, Claude and Claude Code skills.",
      "I ship through pull requests with regular code review, following the team's shared components and standards.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Veribir Technology Services Ltd",
    terms: "Istanbul",
    start: "Feb 2025",
    end: "Jul 2025",
    lines: [
      "I learned the team's stack and standard CMS structure, then took on production tasks in the final month.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "EARTech Information Technology",
    terms: "Istanbul",
    start: "Dec 2023",
    end: "Feb 2024",
    lines: [
      "An internship program covering team GitHub workflows, local development setup and Node.js basics.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. in Computer Engineering (thesis)",
    school: "İstanbul Teknik Üniversitesi (İTÜ)",
    start: "Sep 2026",
    end: "present",
    line: "Turkish language preparation year",
  },
  {
    degree: "B.Sc. in Software Engineering",
    school: "İstanbul Nişantaşı Üniversitesi",
    start: "Oct 2021",
    end: "Jul 2025",
    line: "Taught in English. Graduation project: Eskici.",
  },
];

export const languages = [
  { name: "Arabic", level: "native" },
  { name: "English", level: "TOEFL iBT" },
  { name: "Turkish", level: "A2, working toward C1" },
];
