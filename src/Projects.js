import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { projects } from "./data";
import Fade from "react-reveal/Fade";

export const Projects = () => {
  const [myProjects, setMyProjects] = useState(projects);
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const filterProjects =
    filter === "all"
      ? myProjects
      : filter
      ? myProjects.filter((project) =>
          project.type.toLowerCase().includes(filter.toLowerCase())
        )
      : myProjects;

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <section className="projects-container">
      <Fade bottom cascade>
        <div className="projects-header">
          <h1>“What have you worked on?”</h1>
          <p>Here are some of my personal projects: </p>
          <p className="filter-by" onClick={handleFilter}>
            Filter by{" "}
            <MdKeyboardArrowDown
              className={showFilter ? "rotate-arrow" : "arrow"}
            />
          </p>
          {showFilter && (
            <div className="filter-options">
              <div className="filter-option">
                <label htmlFor="webApp">Web Apps</label>
                <input
                  type="radio"
                  name="filter"
                  value="webApp"
                  id="webApp"
                  onChange={handleChange}
                />
              </div>
              <div className="filter-option">
                <label htmlFor="website">Websites</label>
                <input
                  type="radio"
                  name="filter"
                  value="website"
                  id="website"
                  onChange={handleChange}
                />
              </div>
              <div className="filter-option">
                <label htmlFor="all">All</label>
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  id="all"
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>
      </Fade>
      <div className="all-projects">
        {filterProjects.map((myProject) => {
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
