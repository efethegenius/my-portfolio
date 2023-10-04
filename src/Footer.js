import React from "react";
import saly19 from "./images/Saly-19.png";
import Fade from "react-reveal/Fade";

export const Footer = () => {
  return (
    <Fade bottom cascade>
      <footer>
        <h1>Woah!</h1>
        <p id="thanks">
          Thank you for stopping by and taking your time to go through my
          portfolio. If you think i might be a good fit for your team or your
          website/web application design , do not hesitate to reach out to me
          let us create something amazing together and bring your ideas to life!
        </p>
        <p id="creator">Designed and Built By Efe Samuel</p>
        <img src={saly19} alt="pic" />
      </footer>
    </Fade>
  );
};
