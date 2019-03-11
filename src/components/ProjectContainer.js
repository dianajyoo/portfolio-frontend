import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import ProjectCard from "./ProjectCard"
import Work from "./Work"
import ProjectList from "./ProjectList"
import { getProjects } from "../store/actions/projectActions"

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects("api/v1/projects")
  }
    
  render() {    
    const { match } = this.props

    let renderPhotos = this.props.projects.map(project => <ProjectCard project={project} photos={project.photos} />)

    return (
      <div className="project-container">
        <ProjectList renderPhotos={renderPhotos} />
        <Route path={`${match.url}/:workId`} render={(props) => <Work {...props} />} />
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
