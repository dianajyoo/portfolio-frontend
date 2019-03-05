import React from "react"
import { connect } from "react-redux"
import ProjectCard from "./ProjectCard"
import { getPhotoUrl, getProject } from "../store/actions/projectActions"
import "../styling/ProjectContainer.css"

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.getPhotoUrl("api/v1/photos")
    this.props.getProject("api/v1/projects")
  }
    
  render() {    
    let renderPhotos = this.props.photos.map(photo => <ProjectCard photo={photo} project={this.props.projects} />)

    return (
      <div className="grid-container">
        {renderPhotos}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.projects.photos,
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPhotoUrl: (url) => dispatch(getPhotoUrl(url)),
      getProject: (url) => dispatch(getProject(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)
