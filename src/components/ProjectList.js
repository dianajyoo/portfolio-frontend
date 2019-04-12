import React from "react"
import Footer from "./Footer"
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
          <Footer />
        </div>
      )
    }

    return (
      <div className="grid">
        <div className="lds-grid">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    )
  }
    
}

export default ProjectList
