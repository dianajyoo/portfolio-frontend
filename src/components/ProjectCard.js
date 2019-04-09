import React from "react"
import "../styling/ProjectCard.css"

const ProjectCard = ({ match, project }) => {
    return (
        project.id === parseInt(match.params.workId) ? 
          <div className="project-container">
            <div id="project-id">#{project.id}<span>.</span></div>
            <div className="details-container">
              <img src={`${project.gif.split(", ")[0]}`} alt={project.name} className="gif" />

              {/* {project.gif.split(", ")[1] ? <img src={`${project.gif.split(", ")[1]}`} alt={project.name} className="gif" /> : null} */}

              <div className="summary">{project.summary} <br /><br /> Built With: {project.tools} <br /><br /> State: In Development</div>
            </div>
          </div>
          : <div></div>
    )
}

export default ProjectCard