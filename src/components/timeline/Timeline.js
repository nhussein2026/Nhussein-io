import About from "../about/About";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";
import Navbar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import style from './Timeline.module.css'

const Timeline = () => {

    return (
        <div className={style.timeline}>
            <div className={style.timeNav}>
                <Navbar />
            </div>
            <div  className={style.content}>
                <MainContent />
            </div>
            <div id="about" className={style.About}>
                <About />
            </div>
            <div id="experience" className={style.experience}>
                <Experience />
            </div>
            <div id="projects" className={style.projects}>
                <Projects />
            </div>
            <div id="contact" className={style.contact}>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Timeline;