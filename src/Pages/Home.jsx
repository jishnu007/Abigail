import React from "react"
import "./Home.css"
import Slider from "../Components/Slider"
import AboutUsImg from "../Images/aboutus-image1.jpg"
import ServiceSlider from "../Components/ServiceSlider"

function Home() {
  return (
    <div className="homepage-container">
      <Slider />
      <div className="aboutus-section">
        <div className="aboutus-image">
          <img src={AboutUsImg} alt="abt1" className="aboutus-img" />
        </div>
        <div className="aboutus-content">
          <h4>About Us</h4>
          <h2 className="aboutus-title">
            Providing the full range of
            <br /> <span>Accounting</span> Services{" "}
          </h2>
          <p>
            Abigail Accounting and Bookkeeping is a fresh entity which we
            started as a service providing unit.
          </p>
          <p>
            We being in this field for around two decades thought of extending
            our hands for the needy who really deserves to get their business
            supported by strong accounting and decision making analysis
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section-outer">
        <div className="services-section">
          <h4>Our Services</h4>
          <h2 className="service-section-title">What We Do</h2>
          <ServiceSlider />
        </div>
      </div>
    </div>
  )
}

export default Home
