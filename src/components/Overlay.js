import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/Overlay.css"

const Overlay = ({project, photos }) => {

    const scrollIntoView = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="card">
            <NavLink to={`/projects/${project.id}`} className="navlink"><img src={photos.length ? photos[0].source : null} alt="screenshot" className="preview" onClick={scrollIntoView()} /></NavLink>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default Overlay