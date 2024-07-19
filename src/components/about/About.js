import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles.smalltextSpan}>
        <span className={styles.smallSpan}>01. </span> About Me
      </span>
      <div className={styles.aboutMe}>
        <h2 className={styles.name}>Nasser Hussein</h2>
        <p className={styles.location}>Istanbul, Turkey</p>
        <p className={styles.bio}>
          Software Engineering student and web developer passionate about
          crafting dynamic and responsive websites that elevate user
          experiences. ‍
        </p>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>Mangodb</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Express.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
