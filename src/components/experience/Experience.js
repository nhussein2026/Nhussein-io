import styles from './Experience.module.css'
const Experience = () => {

    return (
        <div className={styles.parent}>
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