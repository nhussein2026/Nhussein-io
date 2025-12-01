import React, { useState } from "react";
import styles from "./GitHubProfile.module.css";
import avatar from "../../assets/logo/N-without-bg.png";

const ProfileSidebar = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <img
        src="https://avatars.githubusercontent.com/u/110671737?v=4&d=identicon"
        alt="Nasser GitHub Identicon"
        width="120"
        height="120"
        className={styles.avatar}
      />

      <h2 className={styles.name}>Nasser Hussein</h2>
      <span className={styles.department}>Software Engineer</span>
      <div className={styles.githubBtn}>
        <button className={styles.githubProfileButton}>
          <a
            href="https://github.com/nhussein2026"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </button>
      </div>
      <p className={styles.bio}>
        Passionate full-stack developer who builds creative tools.
      </p>
    </aside>
  );
};

export default ProfileSidebar;
