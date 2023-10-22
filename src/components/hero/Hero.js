import style from "./Hero.module.css"

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
                <div>
                    <p className={style.intro}>
                        I’m a software engineering student and a web developer
                        who creates convenient and user-friendly digital experiences.
                        I have learned cutting-edge web development skills at a prestigious
                        bootcamp powered by Woz U and built a website for book lovers.
                        I’m passionate about learning new things and taking on new challenges
                        in the software industry.
                    </p>
                </div>
            </div>

        </>
    )
}
export default Hero;