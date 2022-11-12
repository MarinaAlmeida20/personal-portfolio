import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";

import GitHubIcon from "@material-ui/icons/GitHub";
import EngineeringIcon from '@mui/icons-material/Engineering';

import "../styles/ProjectDisplay.css"

type ParamsID = {
    id?: string
}

function ProjectDisplay() {
    const { id } = useParams<ParamsID>();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const project = ProjectList[id]; // position inside the projectList file

    return (
        <>
            {project.image ? (
                <div className="project">
                    <h1 className="main-title">{project.name}</h1>
                    <img src={project.image} alt={project.name} />
                    <p><b>Skills: </b>{project.skills}</p>
                    <GitHubIcon className="githubIcon" onClick={(event) =>
                        (window.location.href = project.link)
                    } />
                </div>
            ) : (
                <div className="projectWithOutImage">
                    <h1 className="title">{project.name}</h1>
                    <h2 className="progress"><EngineeringIcon className="engineeringIcon" />Project in Progress</h2>
                    <p><b>Skills: </b>{project.skills}</p>
                    <GitHubIcon className="githubIcon" onClick={(event) =>
                        (window.location.href = project.link)
                    } />
                </div>
            )}
        </>
    );
}

export default ProjectDisplay;
