import React from "react"
import { connect } from "react-redux"
import ProjectCard from "./ProjectCard"
import { getPhotoUrl } from "../store/actions/projectActions"
import "../styling/ProjectContainer.css"

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.getPhotoUrl("api/v1/photos")
  }
    
  render() {    
    let renderPhotos = this.props.photos.map(photo => <ProjectCard source={photo.source} />)

    return (
      <div className="container">
        <ul>
          {renderPhotos}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.projects.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getPhotoUrl: (data) => dispatch(getPhotoUrl(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer)
