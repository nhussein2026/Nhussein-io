import styles from "./Experience.module.css";

const roles = [
  {
    title: "Frontend Web Developer",
    company: "Veribir Technology Services Ltd",
    period: "Jul 2025 – Present",
    points: [
      "Develop responsive production front-end features with Astro.js, Tailwind CSS, and JavaScript for client web projects.",
      "Build a client's application end to end — implementing backend logic and a headless CMS alongside the front end and fixing issues across the stack.",
      "Integrate AI tooling (MCP) to automate onboarding a client's entire site into the CMS.",
      "Refactor code into reusable, modular components and work in Git-based workflows with regular code reviews.",
    ],
    skills: ["Astro.js", "Tailwind CSS", "JavaScript", "Node.js", "headless CMS"],
  },
  {
    title: "Software Engineer Intern",
    company: "Veribir Technology Services Ltd",
    period: "Feb 2025 – Jul 2025",
    points: [
      "Built a custom headless-CMS front end using Astro, Tailwind CSS, and Flowbite UI components for dynamic content delivery.",
      "Defined TypeScript interfaces and type definitions to improve data integrity and reduce runtime errors.",
      "Followed Git/GitHub best practices: feature branches, pull requests, and code reviews before merging.",
    ],
    skills: ["Astro.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Software Engineer Intern",
    company: "EARTech Information Technology",
    period: "Dec 2023 – Feb 2024",
    points: [
      "Built and tested backend features using Node.js and configured local development environments.",
      "Collaborated within a team using GitHub workflows and structured development and deployment processes.",
    ],
    skills: ["Node.js", "JavaScript", "Git"],
  },
];

const Experience = () => {
  return (
    <div className={styles.parent}>
      <span className={styles.smalltextSpan}>
        <span className={styles.smallSpan}>02. </span> Where I've Worked
      </span>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.experience}>
        {roles.map((role, i) => (
          <div key={i} className={styles.card}>
            <h4 className={styles.role}>{role.title}</h4>
            <p className={styles.company}>{role.company}</p>
            <p className={styles.period}>{role.period}</p>
            <ul className={styles.points}>
              {role.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
            <div className={styles.skills}>
              {role.skills.map((skill) => (
                <span key={skill} className={styles.skillSpan}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
