import styles from './Projects.module.css'
import { LuFolder } from "react-icons/lu";
import { TfiGithub } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
    return (
        <div>
            <span className={styles.title}><span className={styles.smallTitle}>03. </span> Passionate about Innovation!</span>
            <div className={styles.projects}>
                {/* Project items */}
           
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.longProjectTitle}>
                            Quiz Management System
                        </span>
                        <span className={styles.icon}><a href='https://github.com/nhussein2026/quiz-management-system' target='_blank' rel='noopener noreferrer' ><TfiGithub /></a></span>
                    </div>
                    <div className={styles.projectDes}>
                        
                        <p className={styles.des}>
                        Designed and implemented a Java-based Quiz System for 
                        online quiz creation, management, and participation.
                         Utilized MySQL for seamless data storage and retrieval.
                        </p>
                        <span className={styles.skills}></span>
                    </div>
                    <div className={styles.projecFooter}>
                        <span id={styles.skillsSpan}>Java</span>
                        <span id={styles.skillsSpan}>MySQL</span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.ProjectTitle}>
                            DevLab
                        </span>
                        <span className={styles.twoIcons}>
                            <span className={styles.icon}><a href='https://github.com/nhussein2026/quiz-management-system' target='_blank' rel='noopener noreferrer' ><TfiGithub /></a></span>
                            <span className={styles.externalLinkIcon}><a href='https://devlab.nhussein.io' rel='noreferrer noopener' target='_blank'><FaExternalLinkAlt /></a></span>
                        </span>
                    </div>
                    <div className={styles.projectDes}>
                        
                        <p className={styles.des}>
                        DevLab, a dynamic developer tools platform, showcases my proficiency in front-end technologies. Offering code editing, collaboration, and debugging, it embodies my commitment to enhancing coding experiences.
                        </p>
                        <span className={styles.skills}></span>
                    </div>
                    <div className={styles.projecFooter}>
                        <span id={styles.skillsSpan}>JavaScript</span>
                        <span id={styles.skillsSpan}>HTML/CSS</span>
                    </div>
                </div>
                {/* New Project - Safha */}
                {/* <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.ProjectTitle}>
                            Safha
                        </span>
                        <span className={styles.twoIcons}>
                            <span className={styles.externalLinkIcon}><a href='https://safha.dev' rel='noreferrer noopener' target='_blank'><FaExternalLinkAlt /></a></span>
                        </span>
                    </div>
                    <div className={styles.projectDes}>
                        <p className={styles.des}>
                            Safha is an Arabic blog dedicated to publishing technology and programming content.
                        </p>
                        <span className={styles.skills}></span>
                    </div>
                    <div className={styles.projecFooter}>
                        <span id={styles.skillsSpan}>HTML/CSS</span>
                        <span id={styles.skillsSpan}>Wordpress</span>
                        <span id={styles.skillsSpan}>PHP</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects;