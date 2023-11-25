import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";
import Navbar from "../navbar/Navbar";
import style from './Timeline.module.css'

const Timeline = () => {

    return (
        <div className={style.timeline}>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Timeline;