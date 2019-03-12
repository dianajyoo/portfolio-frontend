import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/NavBar.css"

const NavBar = () => {

  return (
    <div className="navbar">
      <NavLink to="/" className="navlink" id="home">DIANA J. YOO</NavLink>
      <NavLink to="/about" className="navlink" id="about">ABOUT</NavLink>
      <NavLink to="/projects" className="navlink" id="work">WORK</NavLink>
      <NavLink to="/contact" className="navlink" id="contact">CONTACT</NavLink>
    </div>
  )

}

export default NavBar
