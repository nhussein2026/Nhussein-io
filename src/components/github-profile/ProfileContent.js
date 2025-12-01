import React, { useEffect, useState } from "react";
import styles from "./GitHubProfile.module.css";
import { ActivityCalendar } from "react-activity-calendar";
import HeatmapFromGitHub from "./HeatmapFromGitHub";

const username = "nhussein2026";

const ProfileContent = () => {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [stats, setStats] = useState({
    totalStars: 0,
    totalForks: 0,
    totalRepos: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        const data = await res.json();
        setRepos(data);

        let totalStars = 0;
        let totalForks = 0;
        const langCount = {};

        data.forEach((repo) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });

        setStats({
          totalStars,
          totalForks,
          totalRepos: data.length,
        });

        setLanguages(langCount);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading GitHub Data...</div>;
  }

  return (
    <div className={styles.githubContainer}>
      {/* Stats Summary */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Repos</h3>
          <p>{stats.totalRepos}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Stars</h3>
          <p>{stats.totalStars}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Total Forks</h3>
          <p>{stats.totalForks}</p>
        </div>
      </div>
      {/* Contribution Heatmap (Last Year) */}
      <div className={styles.contributionMap}>
        <h3>Contributions in the Last Year</h3>
        <HeatmapFromGitHub username={username} />
      </div>

      {/* Most Used Languages */}
      <div className={styles.languages}>
        <h3>Most Used Languages</h3>
        <div className={styles.languageList}>
          {Object.entries(languages)
            .sort((a, b) => b[1] - a[1])
            .map(([lang, count]) => (
              <div key={lang} className={styles.languageItem}>
                <span>{lang}</span>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${(count / stats.totalRepos) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Recent Activity / Updated Repos */}
      <div className={styles.recentActivity}>
        <h3>Recent Projects</h3>
        <div className={styles.repoList}>
          {repos
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 5)
            .map((repo) => (
              <div key={repo.id} className={styles.repoCard}>
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
                <div className={styles.repoStats}>
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  <span>
                    🕒 {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
