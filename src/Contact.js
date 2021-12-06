import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import saly34 from "./images/Saly-34.png";
import saly31 from "./images/Saly-31.png";
import Fade from "react-reveal/Fade";

export const Contact = () => {
  return (
    <section className="about2">
      <Fade bottom cascade>
        <div className="others">
          <div className="others-details">
            <h1>“What else?, do you sit all day on the computer?...”</h1>
            <p id="others1">
              In as much as I spend most of my time on the computer, designing
              and improving myself, I also enjoy listening to Hip-Hop and R&B
              music. My Favorite artise of all time is J.Cole and my favourite
              music is <span>“Love Yourz”</span> by J.Cole.
            </p>
            <p id="others2">
              I also enjoy travelling and visiting new places, meeting new
              people and trying out different foods from other cultures.
            </p>
          </div>
          <Fade right>
            <img src={saly34} alt="party" className="party" />
          </Fade>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="contact">
          <Fade left>
            <img src={saly31} alt="contact" className="contact-img" />
          </Fade>
          <div className="contact-container">
            <h1 id="contact-me">“How do i get in touch with you?”</h1>
            <p className="email-me">
              Pop me an email at <span>samuelefe.37@gmail.com</span> or{" "}
              <a
                href="mailto:samuelefe.37@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Email me <HiMail />{" "}
              </a>
              . You can also give me a shout on social media through the links
              below.
            </p>
            <Fade left cascade>
              <div className="socials-container">
                <a
                  href="https://www.instagram.com/efethegenius/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/efe-samuel/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.twitter.com/efethegenius/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaTwitter />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </section>
  );
};
