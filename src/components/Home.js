import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/Home.css"

const Home = (props) => {
  return (
    <div className="home">
      <p><span>Diana J. Yoo</span> {"\n"} full stack <span>developer</span> {"\n"} from nyc</p>

      <div className="btn">
        <NavLink to="/projects">
          <button className="big ui brown basic button">
            VIEW MY WORK
            <i className="arrow alternate circle right icon"></i>
          </button>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Home
