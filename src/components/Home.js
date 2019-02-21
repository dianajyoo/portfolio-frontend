import React from "react"
import "../styling/Home.css"

const Home = (props) => {
  const text = "Diana J. Yoo \n full stack developer \n from nyc"

  return (
    <div className="home">
      <span className="text">
        {text}
      </span>
    </div>
  )
}

export default Home
