import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import saly34 from "./images/Saly-34.png";

export const Contact = () => {
  return (
    <section className="about2">
      <div className="others">
        <h1>“What else?, do you sit all day on the computer?...”</h1>
        <p id="others1">
          in as much as i spend most of my time on the computer, designing and
          improving myself, i also enjoy listening to Hip-Hop and R&B music. My
          Favorite artise of all time is J.Cole and my favourite music is{" "}
          <span>“Love Yourz”</span> by J.Cole.
        </p>
        <p id="others2">
          I also enjoy travelling and visiting new places, meeting new people
          and trying out foods of other cultures.
        </p>
        <img src={saly34} alt="party" className="party" />
      </div>
      <div className="contact">
        <h1 id="contact-me">“How do i get in touch with you?”</h1>
        <p>
          Pop me an email at <span>samuelefe.37@gmail.com</span> or give me a
          shout on social media through the links below.
        </p>
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
      </div>
    </section>
  );
};
