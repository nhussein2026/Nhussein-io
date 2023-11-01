import EmailSection from '../email/EmailSection';
import Hero from '../hero/Hero';
import SocialMedia from '../socialMedia/SocialMedia';
import styles from './MainContent.module.css'

const MainContent = () => {

    return (
        <div className={styles.mainContent}>
            <div className={styles.socialComponent}>
                <SocialMedia />
            </div>
            <div className={styles.heroComponent}>
                <Hero />
            </div>
            <div className={styles.emailComponent}>
                <EmailSection />
            </div>
        </div>
    )
}

export default MainContent;