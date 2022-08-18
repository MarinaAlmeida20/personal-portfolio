import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/ProjectDisplay.css"


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id]; // position inside the projectList file
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name}/>
      <p><b>Skills: </b>{project.skills}</p>
      <GitHubIcon className="githubIcon" onClick={(event) =>
              (window.location.href = project.link)
            }/>
    </div>
  );
}

export default ProjectDisplay;
