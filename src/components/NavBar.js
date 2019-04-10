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
      <div className="container">
        <div className={!this.state.isOpen ? "navbar" : "mobile-links"}>
          <NavLink exact to="/" className="navlink" id="home">D. J. YOO</NavLink>
          <NavLink to="/about" className="navlink" id="about">ABOUT</NavLink>
          <NavLink to="/projects" className="navlink" id="work">WORK</NavLink>
          <a href={`mailto:${process.env.REACT_APP_EMAIL_USER}`} className="navlink">CONTACT</a>
        </div>
  
        <div className={!this.state.isOpen ? "mobile-navbar" : "menu"}>
          <NavLink exact to="/" className="navlink" id="home">D. J. YOO</NavLink>
          
          <button className={!this.state.isOpen ? "hamburger hamburger--slider" : "hamburger hamburger--slider is-active"} type="button" onClick={() => this.toggleMenu()}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    )
  }

}

export default NavBar
