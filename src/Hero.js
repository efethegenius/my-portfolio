import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import fingers from "./images/fingers.png";
import logo from "./images/Logo.png";
import doodle2 from "./images/doodle-2.png";
import doodle3 from "./images/doodle-3.png";
import doodle4 from "./images/Saly-45.png";
import doodle5 from "./images/Saly-43.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "animate.css";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section>
      <div className="doodles">
        <img src={doodle2} alt="doodle2" id="doodle2" />
        <img src={doodle3} alt="doodle3" id="doodle3" />
        <img src={doodle4} alt="doodle4" id="doodle4" />
        <img src={doodle5} alt="doodle5" id="doodle5" />
      </div>
      <div className="doodles-filter"></div>
      <div className="hero-container">
        <div className={`${isMenuOpen ? "menu show-menu" : "menu"}`}>
          <Link to="hero-container" smooth={true} duration={2000}>
            <button className="btn btn-intro" onClick={handleMenu}>
              home
            </button>
          </Link>
          <Link to="main-heading" smooth={true} duration={2000}>
            <button className="btn btn-about" onClick={handleMenu}>
              about
            </button>
          </Link>
          <Link to="projects-container" smooth={true} duration={2000}>
            <button className="btn btn-projects" onClick={handleMenu}>
              projects
            </button>
          </Link>
          <Link to="contact-me" smooth={true} offset={-10} duration={2000}>
            <button className="btn btn-contact" onClick={handleMenu}>
              contact me
            </button>
          </Link>
        </div>
        <navbar>
          <img src={logo} alt="logo" />
          <div className="menu-toggle">
            <FaBars
              className={`${isMenuOpen ? "bars hide-bars" : "bars"}`}
              onClick={handleMenu}
            />
            <FaTimes
              className={`${isMenuOpen ? "times show-times" : "times"}`}
              onClick={handleMenu}
            />
          </div>
        </navbar>
        <div className="peace-sign animate__animated animate__fadeInUp">
          <div className="greetings">
            <h1 className="hello">Hello</h1>
            <h1 className="hello">Hola</h1>
            <h1 className="hello">Bonjour</h1>
            <h1 className="hello">Nǐn hǎo</h1>
            <h1 className="hello">Konnichiwa</h1>
            <h1 className="hello">Olá</h1>
            <h1 className="hello">God dag</h1>
          </div>
          <img src={fingers} alt="peace" id="peace" />
        </div>
      </div>
    </section>
  );
};
