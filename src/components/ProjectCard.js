import React from "react"
import "../styling/ProjectCard.css"

const ProjectCard = ({ match, project }) => {
    return (
        project.id === parseInt(match.params.workId) ? 
          <div className="project-show">
            <img src={`${project.gif.split(", ")[0]}`} alt={project.name} className="gif" />
            <div className="details">{project.summary} <br /><br /> Built With: {project.tools} <br /><br /> State: In Development</div>
          </div>
          : <div></div>
    )
}

export default ProjectCard