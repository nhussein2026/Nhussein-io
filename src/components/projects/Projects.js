import { useState } from "react";
import styles from "./Projects.module.css";
import { LuFolder } from "react-icons/lu";
import { TfiGithub } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoStar } from "react-icons/go";

// To add a real screenshot: drop an image into `public/projects/` named exactly
// as the `img` field below (e.g. public/projects/3skici.png). Until then, a
// branded placeholder is shown automatically — no code change needed.
const projects = [
  {
    title: "3skici — Sustainable Second-Hand Marketplace",
    mark: "3skici",
    img: "3skici.png",
    des: "A trilingual (Arabic / English / Turkish) marketplace on the MERN stack. I led a 3-person team (90 of 112 commits) and owned the hardest parts myself: real-time buyer–seller messaging and a reporting system to keep listings trustworthy.",
    skills: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    live: null,
    code: "https://github.com/3skici",
  },
  {
    title: "Ghiras — Full-Stack Web Application",
    mark: "Ghiras",
    img: "ghiras.png",
    des: "A full-stack app with a typed React front end and an Express/PostgreSQL backend (Drizzle ORM). The interesting part: sharing Zod schemas across client and server for end-to-end type safety — one source of truth, no drift between the API and the UI.",
    skills: ["React", "TypeScript", "Express.js", "PostgreSQL"],
    live: null,
    code: "https://github.com/nhussein2026/Ghiras",
  },
  {
    title: "Safha — Arabic Tech Content Platform",
    mark: "Safha",
    img: "safha.png",
    des: "A deployed platform of blogs and tutorials for Arabic-speaking developers. Built readability-first for right-to-left technical content, with code-display sections and a live example editor.",
    skills: ["Astro.js", "Tailwind CSS", "MDX", "JavaScript"],
    live: "https://safha.dev",
    code: null,
  },
  {
    title: "Isnnad — Web Application",
    mark: "Isnnad",
    img: "isnnad.png",
    des: "A deployed TypeScript/React application I designed and shipped, managing features through pull requests and code review with a co-contributor.",
    skills: ["React", "TypeScript"],
    live: "https://isnnad.vercel.app",
    code: null,
  },
  {
    title: "DevLab — Developer Resource Hub",
    mark: "DevLab",
    img: "devlab.png",
    des: "A deployed hub of curated tools and references for developers — a place to find the right resource fast.",
    // TODO: confirm DevLab's stack and fill in the chips below.
    skills: [],
    live: "https://devlab.nhussein.io",
    code: null,
  },
];

const Thumb = ({ img, mark, title }) => {
  const [errored, setErrored] = useState(false);
  const src = img ? `${process.env.PUBLIC_URL}/projects/${img}` : null;

  if (!src || errored) {
    return (
      <div className={styles.placeholder} aria-hidden="true">
        <LuFolder className={styles.placeholderIcon} />
        <span className={styles.placeholderMark}>{mark}</span>
      </div>
    );
  }
  return (
    <img
      className={styles.thumb}
      src={src}
      alt={`${title} screenshot`}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

const Projects = () => {
  return (
    <div className={styles.projectsSection}>
      <span className={styles.title}>
        <span className={styles.smallTitle}>03. </span> Projects
      </span>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <article key={index} className={styles.project}>
            <Thumb img={project.img} mark={project.mark} title={project.title} />
            <div className={styles.body}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.des}>{project.des}</p>
              {project.skills.length > 0 && (
                <div className={styles.chips}>
                  {project.skills.map((skill) => (
                    <span key={skill} className={styles.skillSpan}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <div className={styles.actions}>
                {project.live && (
                  <a
                    className={styles.btnPrimary}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
                {project.code && (
                  <a
                    className={styles.btnGhost}
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TfiGithub aria-hidden="true" /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <a
        className={styles.openSource}
        href="https://github.com/live-codes/livecodes/pull/905"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.openSourceIcon}>
          <GoStar />
        </span>
        <span className={styles.openSourceText}>
          <strong>Open source:</strong> Merged a pull request to{" "}
          <strong>livecodes</strong>, a widely-used open-source code playground
          (1,400+ stars).
        </span>
      </a>
    </div>
  );
};

export default Projects;
