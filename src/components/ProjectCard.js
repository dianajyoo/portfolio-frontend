import React from "react"
import "../styling/ProjectCard.css"

const ProjectCard = ({source}) => {
    return (
        <div className="card">
            <img src={source} alt="screenshot" className="preview" />
        </div>
    )
}

export default ProjectCard