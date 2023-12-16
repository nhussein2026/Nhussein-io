import styles from './Experience.module.css'
const Experience = () => {

    return (
        <div className={styles.parent}>
            <span className={styles.contactSpan}><span className={styles.smallSpan}>02. </span> Eager for New Ventures!</span>
            <h1>My Experience</h1>
            <div className={styles.experience}>
                <div className={styles.first}></div>
                <div className={styles.second}></div>
                <div className={styles.third}></div>
            </div>
        </div>
    )
}

export default Experience;