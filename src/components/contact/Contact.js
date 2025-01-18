import styles from "./Contact.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  return (
    <div className={styles.parent}>
      <span className={styles.contactSpan}>
        <span className={styles.smallSpan}>04. </span> Eager for New Ventures!
      </span>
      <h1>Let's Connect</h1>
      <p>
        While I'm currently engaged in exciting endeavors, I'm always thrilled
        about potential opportunities. Feel free to reach out if you have an
        exciting project or just want to connect. I'll reply to you as soon as
        possible!
      </p>
      <div className={styles.contact}>
        <span className={styles.social}>
          <a
            href="https://www.linkedin.com/in/nhussein2026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>{" "}
        </span>
        <span className={styles.social}>
          <a href="mailto:naser738nas@gmail.com">
            <HiOutlineMail />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
