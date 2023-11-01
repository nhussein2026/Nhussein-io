import styles from './EmailSection.module.css'

const EmailSection = () => {

    return (
        <div className={styles.EmailSection}>
            <div className={styles.email}>
                <a href='mailto:naser738nas@gmail.com'>naser738nas@gmail.com</a>
            </div>
            <div className={styles.emailLine}></div>
        </div>
    )
}
export default EmailSection;