import styles from './Footer.module.css'

const Footer = () => {

    return (
        <footer>
            <div className={styles.footerContent}>
                <h3>Designed & built by Nasser Hussein</h3>
            </div>
            <div className={styles.footer}>
                <a href='https://github.com/nhussein2026/Nhussein-io' target='_blank' rel='noreferrer'>repo</a>
            </div>
        </footer>
    )
}

export default Footer