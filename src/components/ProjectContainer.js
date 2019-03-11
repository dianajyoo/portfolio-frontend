import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import ProjectCard from "./ProjectCard"
import Overlay from "./Overlay"
import ProjectList from "./ProjectList"
import { getProjects } from "../store/actions/projectActions"

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.getProjects("api/v1/projects")
  }
    
  render() {    
    const { match } = this.props

    let renderPhotos = this.props.projects.map(project => <Overlay project={project} photos={project.photos} match={match} />)

    return (
      <div className="project-container">
        {this.props.projects.map(project => <Route path={`${match.url}/:workId`} render={(props) => <ProjectCard {...props} project={project} />} />)}  

        <ProjectList renderPhotos={renderPhotos} />
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
