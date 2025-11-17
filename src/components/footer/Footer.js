import styles from "./Footer.module.css";
import { SiGithubactions } from "react-icons/si";
import { RxStar } from "react-icons/rx";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [repoData, setRepoData] = useState({ forks: 0, stars: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      const repositoryOwner = "nhussein2026";
      const repositoryName = "Nhussein-io";

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/${repositoryOwner}/${repositoryName}`
          // No token needed for public repos - unauthenticated requests get 60/hour rate limit
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepoData({
          forks: data.forks_count || 0,
          stars: data.stargazers_count || 0,
        });
        setError(null);
      } catch (err) {
        console.error("Error fetching repo data:", err);
        setError(err.message);
        // Keep default values of 0 on error
      } finally {
        setLoading(false);
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
          <span>{loading ? "..." : repoData.stars}</span>
          <span>
            <SiGithubactions />
          </span>
          <span>{loading ? "..." : repoData.forks}</span>
        </div>
        {error && <div className={styles.error}>Unable to load repo stats</div>}
      </a>
    </footer>
  );
};

export default Footer;
