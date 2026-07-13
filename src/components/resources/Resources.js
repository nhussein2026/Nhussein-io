import React from "react";
import { Helmet } from "react-helmet-async";
import resources from "../../data/resources";
import styles from "./Resources.module.css";

const Resources = () => {
  return (
    <div className={styles.Resources}>
      <Helmet>
        <title>Developer Resources — Nasser Hussein</title>
        <meta
          name="description"
          content="Websites, tools, and references Nasser Hussein uses as a developer — a curated list of developer resources."
        />
      </Helmet>
      <h1>Developer Resources</h1>

      {Object.keys(resources).map((category) => (
        <section key={category} className={styles.category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

          {Object.keys(resources[category]).map((type) => (
            <div key={type} className={styles.subCategory}>
              <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>

              <ul>
                {resources[category][type].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceLink}
                    >
                      <div className={styles.resourceItem}>
                        {item.icon && (
                          <span className={styles.icon}>{item.icon}</span>
                        )}

                        <div className={styles.details}>
                          <div className={styles.titleRow}>
                            <span className={styles.title}>{item.title}</span>

                            {item.time && (
                              <span className={styles.timeBadge}>
                                {item.time}
                              </span>
                            )}
                          </div>

                          {item.description && (
                            <p className={styles.description}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Resources;
