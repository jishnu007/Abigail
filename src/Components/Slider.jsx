import React from "react"
import Slider from "react-slick"
import "./Slider.css"

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div className="slider-content A">
        <h3>A complete solution to all your accounting needs</h3>
      </div>
      <div className="slider-content B">
        <h3>Slider Content 2</h3>
      </div>
      <div className="slider-content C">
        <h3>Slider Content 3</h3>
      </div>
    </Slider>
  )
}
export default SimpleSlider
