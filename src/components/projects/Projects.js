import styles from './Projects.module.css'
import { LuFolder } from "react-icons/lu";
import { TfiGithub } from "react-icons/tfi";

const Projects = () => {
    return (
        <div>
            <span className={styles.title}><span className={styles.smallTitle}>03. </span> Passionate about Innovation!</span>
            <div className={styles.projects}>
                {/* Project items */}
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><TfiGithub /></span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><TfiGithub /></span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><TfiGithub /></span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><TfiGithub /></span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><a href='https://github.com/nhussein2026/quiz-management-system' target='_blank' rel='noopener noreferrer' ><TfiGithub /></a></span>
                    </div>
                    <div className={styles.projectDes}>
                        <span className={styles.ProjectTitle}>
                            Quiz Management System
                        </span>
                        <p className={styles.des}>
                        Designed and implemented a Java-based Quiz System for 
                        online quiz creation, management, and participation.
                         Utilized MySQL for seamless data storage and retrieval.
                        </p>
                        <span className={styles.skills}></span>
                    </div>
                    <div className={styles.projecFooter}>
                        <span>Java</span>
                        <span>MySQL</span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={styles.projectNav}>
                        <span className={styles.icon}><LuFolder /></span>
                        <span className={styles.icon}><TfiGithub /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;