import React from "react"

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <a href={`mailto:${process.env.REACT_APP_EMAIL_USER}`}>mailto</a>
      </div>
    )
  }
}

export default About
