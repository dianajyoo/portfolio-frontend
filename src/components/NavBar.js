import React from "react"
import { NavLink } from "react-router-dom"
import "../styling/NavBar.css"

class NavBar extends React.Component {

  state = {
    isOpen: false
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <NavLink exact to="/" className="navlink" id="home">D. J. YOO</NavLink>
          <NavLink to="/about" className="navlink" id="about">ABOUT</NavLink>
          <NavLink to="/projects" className="navlink" id="work">WORK</NavLink>
          <NavLink to="/contact" className="navlink" id="contact">CONTACT</NavLink>
        </div>
  
        <div className="mobile-navbar">
          <NavLink exact to="/" className="navlink" id="home">D. J. YOO</NavLink>
          <i class="big bars icon" onClick={() => this.toggleMenu()}></i>
        </div>
      </div>
    )
  }

}

export default NavBar
