import React from "react"
import { NavLink } from 'react-router-dom'

import "../../styling/Menu.css"

const Menu = (props) => {

  return (
    <div className="menu">
      <NavLink to="/about" className="navlink" id="about">about</NavLink>
      <NavLink to="/projects" className="navlink" id="work">work</NavLink>
      <NavLink to="/contact" className="navlink" id="contact">contact</NavLink>
    </div>
  )

}

export default Menu
