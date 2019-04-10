import React from "react"
import "../styling/About.css"

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-container">
          <img src={require("../images/profile.jpg")} alt="profile pic" />
          <p>
            <span>
              Hi, my name is Diana J. Yoo. I'm a full stack web developer and recent Flatiron School grad based in New York City.
              I love the creative process of building applications from conception to implementation.
              I work with React, Redux, and CSS for front end and Node and RoR for back end, but I'm constantly learning new web technologies and design.
            </span>

            <br />
            <br />
            
            <span>
              When I'm not coding, I like to run, travel, read, and try new dishes. Send me an <a href={`mailto:${process.env.REACT_APP_EMAIL_USER}`}>email</a> if you want to keep in touch!
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default About
