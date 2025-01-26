import styles from "./Projects.module.css";
import { LuFolder } from "react-icons/lu";
import { TfiGithub } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const projects = [
    {
      title: "Quiz System",
      des: " Designed and implemented a Java-based Quiz System for online quiz creation, management, and participation. Utilized MySQL for seamless data storage and retrieval.",
      skills: ["Java", "MySQL", "OOP"],
      github: "https://github.com/nhussein2026/quiz-management-system",
      link: null,
    },
    {
      title: "DevLab",
      des: "DevLab, a dynamic developer tools platform, showcases my proficiency in front-end technologies. Offering code editing, collaboration, and debugging, it embodies my commitment to enhancing coding experiences.",
      skills: ["JavaScript", "HTML/CSS"],
      github: "https://github.com/nhussein2026/DevLab",
      link: "https://devlab.nhussein.io",
    },
    {
      title: "Safha",
      des: "Safha is an Arabic blog dedicated to publishing technology and programming content.",
      skills: ["PHP", "HTML/CSS", "Wordpress"],
      github: null,
      link: "https://safha.dev",
    },
    {
      title: "Eskici",
      des: "Eskici is scond-hand platform that make bridge between the buyer and seller without any freely with various features",
      skills: [
        "JavaScript",
        "HTML/CSS",
        "Reactjs",
        "Tailwindcss",
        "Expressjs",
        "MongoDB",
        "Socket.io",
      ],
      github: null,
      link: "https://3skici.com",
    },
    {
      title: "My Portfolio",
      des: "A showcase of my skills and projects. It demonstrates my proficiency in front-end and back-end development, as well as my commitment to creating user-friendly and visually appealing interfaces.",
      skills: ["JavaScript", "HTML/CSS", "Reactjs"],
      github: null,
      link: "https://nhussein.io",
    },
  ];

  return (
    <div>
      <span className={styles.title}>
        <span className={styles.smallTitle}>03. </span> Passionate about
        Innovation!
      </span>
      <div className={styles.projects}>
        {projects &&
          projects.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              onClick={() =>
                project.link && window.open(project.link, "_blank")
              }
              style={{ cursor: project.link ? "pointer" : "default" }}
            >
              <div className={styles.single}>
                <div className={styles.projectNav}>
                  <span className={styles.folderIcon}>
                    <LuFolder />
                  </span>
                  <span className={styles.longProjectTitle}>
                    {project.title}
                  </span>
                  <span className={styles.twoIcons}>
                    {project.github && (
                      <span className={styles.icon}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TfiGithub />
                        </a>
                      </span>
                    )}
                    {/* {project.link && (
                      <span className={styles.externalLinkIcon}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </span>
                    )} */}
                  </span>
                </div>
                <div className={styles.projectDes}>
                  <p className={styles.des}>{project.des}</p>
                  <span className={styles.skills}></span>
                </div>
                <div className={styles.projecFooter}>
                  {project.skills &&
                    project.skills.map((skill) => (
                      <span className={styles.skillSpan}>{skill}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
