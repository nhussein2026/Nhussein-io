import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";
import Navbar from "../navbar/Navbar";
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
           
            <div>
            <Footer />
            </div>
        </div>
    )
}

export default Timeline;