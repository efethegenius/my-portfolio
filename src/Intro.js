import React from "react";
import saly from "./images/Saly-14.png";
import saly13 from "./images/Saly-13.png";
import Fade from "react-reveal/Fade";
import resume from "./efe-samuel-resume.pdf";

export const Intro = () => {
  return (
    <section>
      <div className="intro-container">
        <div className="full-intro">
          <Fade bottom cascade>
            <div className="intro-text">
              <h1 id="main-heading">Hi there, my name is </h1>
              <h1 id="name">EFE SAMUEL</h1>
              <p>Front-End Web Developer</p>
            </div>
          </Fade>
          <Fade right>
            <img src={saly} alt="saly" className="saly" />
          </Fade>
        </div>
        <div className="about-container">
          <Fade bottom cascade>
            <div className="about-me">
              <h1>“Who is Efe?” you might ask...</h1> {/*MAKE THEM LARGER*/}
              <p id="p1">
                I am a profesional front-end web developer. I've been in the web
                development space for over 3 years while developing fully
                responsive web applications and websites using modern
                technologies such as Javascript Es6+, React.js, HTML5 and CSS3
                and consistently recieving high user experience score for all my
                web development projects.
              </p>
              <p id="p2">
                i am innovative, highly creative, good “out of the box” thinker
                with great analytics and problem solving skills (if i do say so
                myself). I am also proficient in using Photoshop, Figma, Adobe
                illustrator, Adobe XD and GIT.
              </p>
              <a
                href={resume}
                target="_blank"
                rel="noopener"
                className="resume"
              >
                My Resume
              </a>
              {/* <Fade bottom>
                <h1 className="techy">
                  “You’re a techy Nerd...” you might say...
                </h1>
                <p>
                  Well, I have a Bsc in Computer Science plus a burning passion
                  and talent in all things computer related, what do you expect?
                </p>
              </Fade> */}
            </div>
          </Fade>
          <Fade left>
            <img src={saly13} alt="saly13" className="saly13" />
          </Fade>
        </div>
      </div>
    </section>
  );
};
