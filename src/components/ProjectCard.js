import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/ProjectCard.css"

const ProjectCard = ({project, photos}) => {
    console.log(photos)
    return (
        <div className="card">
            <NavLink to="/work" className="navlink"><img src={photos.length ? photos[0].source : null} alt="screenshot" className="preview" /></NavLink>
            <p className="overlay">{project.name}</p>
        </div>
    )
}

export default ProjectCard