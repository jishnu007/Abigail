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
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <Slider {...settings}>
      <div className="slider-content A">
        <h1>Abigail Accounting & Book Keeping Agency</h1>
        <h3>A complete solution to all your accounting needs</h3>
        <button className="banner-button">Read More</button>
      </div>
      <div className="slider-content B">
        <h1>You run your business.We'll do your Accounting</h1>
        <h3>Satisfied customer for us the most important</h3>
        <button className="banner-button">Read More</button>
      </div>
      <div className="slider-content C">
        <h1>Togather we can</h1>
        <h3>
          Our diversified team of professionals is Our biggest strength that
          ensures efficiency and excellence,
          <br /> which works together to achieve success.
        </h3>
        <button className="banner-button">Read More</button>
      </div>
    </Slider>
  )
}
export default SimpleSlider
