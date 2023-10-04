import React from "react";
import {
  FaCss3,
  FaGit,
  FaHtml5,
  FaNpm,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Fade from "react-reveal/Fade";

export const Skillsets = () => {
  return (
    <div className="skillset-container">
      <h1>My Skillsets</h1>
      <Fade left cascade>
        <div className="skillsets">
          <FaAws className="skill" />
          <FaReact className="skill" />
          <IoLogoJavascript className="skill" />
          <FaHtml5 className="skill" />
          <FaCss3 className="skill" />
          <FaGit className="skill" />
          <FaNpm className="skill" />
          <FaNodeJs className="skill" />
        </div>
      </Fade>
    </div>
  );
};
