import ProjectItem from "../components/ProjectItem";

import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css"

function Projects() {
    return (
        <div className="projects">
            <h1>My Personal Projects</h1>
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return <ProjectItem id={idx} name={project.name} image={project.image} />
                })}
            </div>
        </div>
    );
}

export default Projects;
