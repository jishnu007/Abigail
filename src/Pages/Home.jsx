import React from "react"
import "./Home.css"
import Slider from "../Components/Slider"

function Home() {
  return (
    <div className="homepage-container">
      <Slider />
      <h2 className="banner-title">
        A complete solution to all your accounting needs
      </h2>
    </div>
  )
}

export default Home
