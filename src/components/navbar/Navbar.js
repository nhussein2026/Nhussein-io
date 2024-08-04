import React, { useState } from "react";
import data from "../../data/data";
import style from "./Navbar.module.css";
import { TbMenu } from "react-icons/tb";
import { HashLink as Link } from 'react-router-hash-link';
import resume from "../../assets/pdf/Nasser_Hussein_CV.pdf";

const Navbar = () => {
  //destructuring the navbar items
  const { navLinks } = data;
  //use state for the button of small screens
  const [isVisible, setIsVisible] = useState(false);

  //toggle functions for the small screens button
  const toggleVisiblity = () => {
    setIsVisible(!isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };

  // Function to handle item click in small screen menu
  const handleItemClick = () => {
    setIsVisible(false);
  };

  return (
    <nav className={style.nav}>
      {/*small screens  */}
      <div className={style.menue}>
        {/* small screen menue and logo */}
        <div className={style.navMenueLogo}>
          <button
            className={style.menueIconButton}
            onClick={toggleVisiblity}
            name="Navbar Menu"
          >
            <TbMenu className={style.menueIcon} />
          </button>
          {/* logo Section */}
          <div className={style.smallScreenLogo}>
            <Link to="/" onClick={handleItemClick}>
              <code className={style.LogoSmall}>
                <span className={style.Nasser}>Nasser </span>{" "}
                <span className={style.Hussein}>Hussein</span>
              </code>
            </Link>
          </div>
        </div>

        <div className={`${style.sideMenue} ${isVisible ? style.visible : ""}`}>
          {isVisible && (
            <div className={style.popMenue}>
              <ul className={style.navItemSmallScreen}>
                {navLinks &&
                  navLinks.map(({ link, name }, i) => (
                    <li className={style.navLinks} key={i}>
                      {/* <span className={style.itemNum}></span> */}
                      <Link
                      smooth
                        to={link}
                        className={style.MenueItems}
                        onClick={handleItemClick}
                      >
                        {i + 1 < 10 ? `0${i + 1} ` : i + 1}
                        {name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* large screen */}
      <div className={style.logo}>
        <Link onClick={scrollToTop} to="/">
          <code className={style.Logo}>
            Nasser <span className={style.Hussein}>Hussein</span>
          </code>
        </Link>
      </div>
      <div className={style.navItems}>
        <ul className={style.navItem}>
          {navLinks &&
            navLinks.map(({ link, name }, i) => (
              <li className={style.navLinks} key={i}>
                <span className={style.itemNum}>
                  {i + 1 < 10 ? `0${i + 1}.` : i + 1}
                </span>
                {/* <Link onClick={(e) => handleClick(e, `${url}`)} to={`${url}`}>// {name}</Link> */}
                <a href={`${link}`}>//{name}</a>
              </li>
            ))}
        </ul>
      </div>

      {/* Resume Button */}
      <div className={style.resume}>
        <a
          id={style.resumeButton}
          target="_blank"
          href={resume}
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
