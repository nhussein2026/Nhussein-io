import style from "./Hero.module.css";

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
          <h3 className={style.heading}>Software Engineer | Web Developer</h3>
        </div>
        <div className={style.intro}>
          <p>
            I’m a Software Engineer and Web Developer focused on building
            reliable, user-centered digital products. I specialize in modern web
            technologies and enjoy turning complex ideas into clean, scalable
            solutions. Driven by continuous learning and real-world problem
            solving.
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
