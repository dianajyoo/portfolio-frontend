import React from "react"
import { withRouter } from "react-router"
import "../styling/Footer.css"

const Footer = () => {

  const openClickedLink = (e) => {
    if (e.target.className === "github icon") {
      window.open("https://www.github.com/dianajyoo")
    } else if (e.target.className === "medium m icon") {
      window.open("https://www.medium.com/@dianajyoo") 
    } else if (e.target.className === "linkedin icon") {
      window.open("https://www.linkedin.com/in/dianajyoo")
    } else {
      // props.history.replace("/contact")
      window.location.href = `mailto:${process.env.REACT_APP_EMAIL_USER}`
    }
  }

  return (
    <div className="footer" id="footer-container">
      <div className="footer text-container">
        <p>STAY CONNECTED</p>
      
        <div className="links">
          <button className="big ui circular github icon button" onClick={e => openClickedLink(e)}>
            <i className="github icon"></i>
          </button>

          <button className="big ui circular medium m icon button" onClick={e => openClickedLink(e)}>
            <i className="medium m icon"></i>
          </button>

          <button className="big ui circular icon button" onClick={e => openClickedLink(e)}>
            <i className="linkedin icon"></i>
          </button>

          <button className="big ui circular icon button" onClick={e => openClickedLink(e)}>
            <i className="envelope outline icon"></i>
          </button>
        </div>
      </div>

      <div className="footer footnote">
        <i className="react icon"></i>
        <p>Powered by React.js </p>
      </div>
    </div>
  )
}

export default withRouter(Footer)