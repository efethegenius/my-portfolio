import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "./data";
import Fade from "react-reveal/Fade";

export const Projects = () => {
  const [myProjects, setMyProjects] = useState(projects);
  return (
    <section className="projects-container">
      <Fade bottom cascade>
        <div className="projects-header">
          <h1>“What have you worked on?”</h1>
          <p>Here are some of my projects: </p>
        </div>
      </Fade>
      {myProjects.map((myProject) => {
        const { id, name, description, link, api, languages, img } = myProject;
        return (
          <div key={id} className="my-project">
            <img src={img} alt="pic" />
            <div className="project-details">
              <div className="project-name">
                <h1>{name}</h1>
                <p id="api">{api ? "API" : "JSON"}</p>
              </div>
              <p id="project-description">{description}</p>
              <a
                href={link}
                className="live"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit live project <FaExternalLinkAlt />
              </a>
              <p id="languages">{languages}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
