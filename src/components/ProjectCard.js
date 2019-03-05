import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/ProjectCard.css"

const ProjectCard = ({photo}) => {
    return (
        <div className="card">
            <NavLink to="/work" className="navlink"><img src={photo.source} alt="screenshot" className="preview" /></NavLink>
            <p className="overlay">TITLE</p>
        </div>
    )
}

export default ProjectCard