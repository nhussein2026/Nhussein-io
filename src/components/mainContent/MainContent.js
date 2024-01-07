import EmailSection from '../email/EmailSection';
import Hero from '../hero/Hero';
import SocialMedia from '../socialMedia/SocialMedia';
import styles from './MainContent.module.css'
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";

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
                <EmailSection  />
            </div>
        </div>
    )
}

export default MainContent;