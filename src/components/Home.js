import React from "react"
import Menu from "./menu/Menu"
import "../styling/Home.css"

const Home = (props) => {
  const text = "Diana J. Yoo, \n full stack developer \n from nyc."

  return (
    <div className="home">
      <Menu />
      <span className="text">
        {text}
      </span>
    </div>
  )
}

export default Home
