import Hero from "../hero/Hero";
import styles from "./MainContent.module.css";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import ShowcaseSection from "../right-side-section/ShowcaseSection";
import SocialMedia from "../left-side-items/SocialMedia";

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.socialComponent}>
        <SocialMedia />
      </div>
      <div className={styles.meddleComponent}>
        <div>
          <Hero />
        </div>
        <div id="about" className={styles.About}>
          <About />
        </div>
        <div id="experience" className={styles.experience}>
          <Experience />
        </div>
        <div id="projects" className={styles.projects}>
          <Projects />
        </div>
        <div id="contact" className={styles.contact}>
          <Contact />
        </div>
      </div>
      <div className={styles.emailComponent}>
        <ShowcaseSection />
      </div>
    </div>
  );
};

export default MainContent;
