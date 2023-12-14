import styles from './Contact.module.css'
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {

    return (
        <div className={styles.parent}>
            <h1>Get In Touch</h1>
            <div className={styles.contact}>
                <span className={styles.social}><a href='https://www.linkedin.com/in/nhussein2026/' target='_blank' rel='noopener noreferrer'><GrLinkedinOption /></a> </span>
                <span className={styles.social}><a href='mailto:naser738nas@gmail.com'><HiOutlineMail /></a></span>
            </div>
        </div>
    )
}

export default Contact;