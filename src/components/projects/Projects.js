import styles from './Projects.module.css'
import { LuFolder } from "react-icons/lu";
import { TfiGithub } from "react-icons/tfi";

const Projects = () => {
    return (
        <div>
            <span className={styles.title}><span className={styles.smallTitle}>03. </span> Eager for New Ventures!</span>
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
                        <span className={styles.icon}><TfiGithub /></span>
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