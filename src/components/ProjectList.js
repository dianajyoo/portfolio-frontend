import React from "react"
import "../styling/ProjectList.css"

const ProjectList = ({ renderPhotos }) => {
    return (
      <div className="grid-container">
        <p>WORK<span>.</span></p>
        {renderPhotos}
      </div>
    )
}

export default ProjectList
