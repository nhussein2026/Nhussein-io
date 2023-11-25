import React, { useState } from 'react';
import data from "../../data/data"
import style from "./Navbar.module.css";
import { TbMenu } from "react-icons/tb";
import { BrowserRouter, Link } from 'react-router-dom';
import resume from '../../assets/Resume2023.pdf'


const Navbar = () => {
    //destructuring the navbar items
    const { navLinks } = data;

    //use state for the button of small screens
    const [isVisible, setIsVisible] = useState(false);

    //toggle functions for the small screens button
    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav className={style.nav}>
            {/*small screens  */}
            <div className={style.menue}>
                <TbMenu className={style.menueIcon} onClick={toggleVisiblity} />
                <div
                    className={`${style.sideMenue} ${isVisible ? style.visible : ""}`}
                >
                    {isVisible && (
                        <div className={style.popMenue}>
                            <ul className={style.navItemSmallScreen}>
                                {
                                    navLinks &&
                                    navLinks.map(({ url, name }, i) => (
                                        <li className={style.navLinks} key={i}>
                                            <span className={style.itemNum}>{i + 1 < 10 ? `0${i + 1}.` : i + 1}</span>
                                            <Link to={url}>{name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}

                    <div className={style.menueSocial}>

                    </div>
                </div>
            </div>

            {/* logo Section */}
            <div className={style.logo}>
                <Link to='/'>
                    <code className={style.Logo}>Nasser <span className={style.Hussein}>Hussein</span></code>
                </Link>
            </div>

            {/* large screen */}
            <div className={style.navItems}>
                <ul className={style.navItem}>
                    {
                        navLinks &&
                        navLinks.map(({ url, name }, i) => (
                            <li className={style.navLinks} key={i}>
                                <span className={style.itemNum}>{i + 1 < 10 ? `0${i + 1}.` : i + 1}</span>
                                <Link to={url}>// {name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Resume Button */}
            <div className={style.resume}>
                <a id={style.resumeButton} target='_blank' href={resume} rel="noopener noreferrer" onClick={() => window.open(resume)}>
                    Resume
                </a>
            </div>
        </nav>
    )
}

export default Navbar;