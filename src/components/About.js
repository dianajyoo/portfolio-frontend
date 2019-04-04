import React from "react"
import "../styling/About.css"

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-container">
          <img src={require("../images/profile.jpg")} />
          <p>
            <span>
              Hi, my name is Diana J. Yoo. I'm a full stack web developer based in New York City.
              I love the creative process of building applications from scratch.
              I'm constantly learning new web technologies and design.
            </span>

            <br />
            <br />
            
            <span>
              When I'm not coding, I like to run, travel, read, and try new dishes.
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default About
