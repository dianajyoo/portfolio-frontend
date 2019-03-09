import React from "react"
import { connect } from "react-redux"
import ProjectCard from "./ProjectCard"
import { getProjects } from "../store/actions/projectActions"
import "../styling/ProjectContainer.css"

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects("api/v1/projects")
  }
    
  render() {    
    let renderPhotos = this.props.projects.map(project => <ProjectCard project={project} photos={project.photos} />)

    return (
      <div className="work">
        <p>WORK<span>.</span></p>
        <div className="grid-container">
          {renderPhotos}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: (url) => dispatch(getProjects(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)
