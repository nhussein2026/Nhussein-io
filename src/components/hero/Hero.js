import style from "./Hero.module.css";
import { HashLink } from "react-router-hash-link";
import data from "../../data/data";

const resume = `${process.env.PUBLIC_URL}/Nasser_Hussein_Resume.pdf`;

const Hero = () => {
  return (
    <>
      <div className={style.heroParent}>
        <div>
          <h1 className={style.smallText}>Hi, I am</h1>
        </div>
        <div>
          <h1 className={style.nhussein}>Nasser Hussein.</h1>
        </div>
        <div>
          <h3 className={style.heading}>
            Software Engineer &amp; Full-Stack Web Developer
          </h3>
        </div>
        <div className={style.intro}>
          <p>
            I build production web apps end to end with React, Node.js, and
            TypeScript — from database to UI.
          </p>
        </div>
        <div className={style.ctas}>
          <HashLink smooth to="/#projects" className={style.ctaPrimary}>
            View Projects
          </HashLink>
          <a
            href={data.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={style.cta}
          >
            GitHub
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={style.cta}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};
export default Hero;
