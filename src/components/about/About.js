import styles from "./About.module.css";
import skills from "../../data/skills";

const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles.smalltextSpan}>
        <span className={styles.smallSpan}>01. </span> About Me
      </span>
      <div className={styles.aboutMe}>
        <h2 className={styles.name}>Nasser Hussein</h2>
        <p className={styles.location}>Istanbul, Türkiye</p>
        <p className={styles.bio}>
          I'm a Software Engineer and full-stack web developer based in Istanbul.
          I build web applications end to end — React/Astro front ends and
          Node/Express back ends on MongoDB or PostgreSQL. I'm a Software
          Engineering graduate (Nişantaşı University), currently building
          production apps for clients at Veribir, and I've contributed to open
          source (a merged pull request to a widely-used developer tool). I like
          owning a feature from the database all the way to the UI.
        </p>
        <div className={styles.skills}>
          <h3>Skills</h3>
          {skills.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>{group.group}</h4>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
