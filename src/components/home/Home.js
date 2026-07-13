import { Helmet } from "react-helmet-async";
import Footer from "../footer/Footer";
import MainContent from "../mainContent/MainContent";
import Navbar from "../navbar/Navbar";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <Helmet>
        <title>Nasser Hussein — Software Engineer &amp; Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Nasser Hussein — Software Engineer and Full-Stack Web Developer in Istanbul, building production web apps with React, Node.js, TypeScript, and PostgreSQL. Full-stack projects, an open-source contribution, and a year of professional experience."
        />
        <link rel="canonical" href="https://nhussein.io/" />
      </Helmet>
      <div className={style.homeNav}>
        <Navbar />
      </div>
      <div className={style.content}>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
