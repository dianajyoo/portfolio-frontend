import React from "react"
import { NavLink } from 'react-router-dom'

import "../../styling/Menu.css"

const Menu = (props) => {

  return (
    <div className="menu">
        <NavLink to="/about" className="navlink">about</NavLink>
        <NavLink to="/projects" className="navlink">work</NavLink>
    </div>
  )

}

export default Menu
