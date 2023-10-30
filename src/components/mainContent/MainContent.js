import EmailSection from '../email/EmailSection';
import Hero from '../hero/Hero';
import SocialMedia from '../socialMedia/SocialMedia';
import styles from './MainContent.module.css'

const MainContent = () => {

    return (
        <div className={styles.mainContent}>
            <SocialMedia />
            <Hero />
            <EmailSection />
        </div>
    )
}

export default MainContent;