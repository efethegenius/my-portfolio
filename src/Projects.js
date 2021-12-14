import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "./data";
import Fade from "react-reveal/Fade";

export const Projects = () => {
  const [myProjects, setMyProjects] = useState(projects);
  return (
    <section className="projects-container">
      <Fade bottom cascade>
        <div className="projects-header">
          <h1>“What have you worked on?”</h1>
          <p>Here are some of my personal projects: </p>
        </div>
      </Fade>
      <div className="all-projects">
        {myProjects.map((myProject) => {
          const {
            id,
            name,
            description,
            link,
            api,
            languages,
            img,
            repository,
          } = myProject;
          return (
            <div key={id} className="my-project">
              <img src={img} alt="pic" />
              <div className="project-details">
                <div className="project-name">
                  <h1>{name}</h1>
                  <p id="api">{api ? "API" : "JSON"}</p>
                </div>
                <p id="project-description">{description}</p>
                <div className="visit-links">
                  <a
                    href={link}
                    className="live"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Visit live project <FaExternalLinkAlt />
                  </a>
                  <a
                    href={repository}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub className="github" />
                  </a>
                </div>
                <p id="languages">{languages}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
