import styles from './Experience.module.css'
const Experience = () => {

    return (
        <div className={styles.parent}>
        <span className={styles.smalltextSpan}><span className={styles.smallSpan}>02. </span> Eager for New Ventures!</span>
        <h1>My Experience</h1>
        <div className={styles.experience}>
            <div className={styles.first}>
                <h4>Full-Stack Web Development Bootcamp</h4>
                <p>Woz U, June 2023 - October 2023</p>
                <ul>
                    <li>Completed a comprehensive four-month bootcamp focusing on full-stack web development.</li>
                    <li>Mastered technologies such as JavaScript, MySQL, Node.js, React, Express.js, HTML, and CSS.</li>
                    <li>Collaborated with a team to create a fully functional book review website, showcasing skills in user registration, book reviews, and comment sections.</li>
                </ul>
                <p>Relevant Skills: JavaScript, MySQL, Node.js, React, Express.js, HTML, CSS</p>
            </div>
            <div className={styles.second}>
                <h4>Software Engineering Intern</h4>
                <p>EARTech Information Technology, December 2023 - Present</p>
                <ul>
                    <li>Engaged in real-world software engineering projects, gaining hands-on experience in DevOps practices.</li>
                    <li>Utilized skills in JavaScript, HTML, and CSS to contribute to the development of dynamic and responsive websites.</li>
                    <li>Continuously involved in learning and adapting to new challenges in the software development industry.</li>
                </ul>
                <p>Relevant Skills: DevOps, JavaScript, HTML, CSS</p>
            </div>
            <div className={styles.third}>
                <h4>Core Team Member</h4>
                <p>Google Developer Student Club, October 2023 - Present</p>
                <ul>
                    <li>Actively participated as a core team member, contributing to various development projects.</li>
                    <li>Applied expertise in JavaScript, Express.js, React, and Node.js to enhance the functionality of web applications.</li>
                    <li>Thrives on embracing new challenges and learning opportunities within the software development field.</li>
                </ul>
                <p>Relevant Skills: JavaScript, Express.js, React, Node.js</p>
            </div>
        </div>
    </div>
    
    )
}

export default Experience;