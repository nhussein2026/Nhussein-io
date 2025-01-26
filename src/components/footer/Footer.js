import styles from "./Footer.module.css";
import { SiGithubactions } from "react-icons/si";
import { RxStar } from "react-icons/rx";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [repoData, setRepoData] = useState({ forks: 0, stars: 0 });

  useEffect(() => {
    const fetchRepoData = async () => {
      const access = process.env.REACT_APP_GITHUB_TOKEN;
      const repositoryName = "Nhussein-io"; // Replace with your repository name

      try {
        const response = await fetch(
          `https://api.github.com/repos/nhussein2026/${repositoryName}`,
          {
            headers: {
              Authorization: `token ${access}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setRepoData({
            forks: data.forks_count,
            stars: data.stargazers_count,
          });
        } else {
          console.error("Error fetching repo data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching repo data:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <footer>
      <a
        href="https://github.com/nhussein2026/Nhussein-io"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.footerContent}>
          <h3>Designed & built by Nasser Hussein</h3>
        </div>
        <div className={styles.footerIcons}>
          <span>
            <RxStar />
          </span>
          <span>{repoData.stars}</span>
          <span>
            <SiGithubactions />
          </span>
          <span>{repoData.forks}</span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
