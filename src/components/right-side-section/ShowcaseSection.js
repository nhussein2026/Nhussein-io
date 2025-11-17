import { Link } from "react-router-dom";
import {
  FiCode,
  FiBriefcase,
  FiGithub,
  FiFolder,
  FiShare2,
} from "react-icons/fi";
import styles from "./ShowcaseSection.module.css";

const ShowcaseSection = () => {
  const icons = [
    {
      icon: <FiCode />,
      // link: "/code",
      label: "Code",
      description: "Display your coding samples or snippets",
    },
    {
      icon: <FiBriefcase />,
      // link: "/experience",
      label: "Experience",
      description: "Timeline of your work experience",
    },
    // {
    //   icon: <FiGithub />,
    //   // link: "/github-profile",
    //   label: "GitHub Profile",
    //   description: "Internal page showing commits and contributions",
    // },
    {
      icon: <FiFolder />,
      // link: "/projects",
      label: "Projects",
      description: "Showcase your production projects",
    },
    {
      icon: <FiShare2 />,
      // link: "/open-source",
      label: "Open Source Contributions",
      description: "Highlight GitHub open source contributions coding skills",
    },
  ];

  return (
    <div className={styles.ShowcaseSection}>
      <div className={styles.line}></div>
      <div className={styles.icons}>
        {icons.map((item, index) => {
          return item.external ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ) : (
            <Link
              key={index}
              to={item.link}
              className={styles.icon}
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseSection;
