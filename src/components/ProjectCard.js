import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/ProjectCard.css"

const ProjectCard = ({project, photos}) => {
    return (
        <div className="card">
            <NavLink to="/work" className="navlink"><img src={photos.length ? photos[0].source : null} alt="screenshot" className="preview" /></NavLink>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard