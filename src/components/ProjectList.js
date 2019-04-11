import React from "react"
import "../styling/ProjectList.css"

class ProjectList extends React.Component {

  render() {

    const { renderPhotos } = this.props

    if (renderPhotos.length) {
      return (
        <div className="grid">
          <div className="grid-container">
            <p>WORK<span>.</span></p>
            {renderPhotos}
          </div>
        </div>
      )
    }

    return (
      <div className="grid-container">
        <div className="lds-grid">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    )
  }
    
}

export default ProjectList
