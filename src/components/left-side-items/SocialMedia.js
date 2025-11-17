import styles from "./SocialMedia.module.css";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { TfiGithub } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <div className={styles.line}></div>
      <div className={styles.socialLinks}>
        <ul>
          <li>
            <a
              href="https://github.com/nhussein2026"
              target="_blank"
              rel="noreferrer"
            >
              <TfiGithub className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nhussein2026/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className={styles.icon} />
            </a>
          </li>
          <li>
            <a
              href="mailto:naser738nas@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FiMail className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
