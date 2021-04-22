import React from "react"
import "./Home.css"
import Slider from "../Components/Slider"
import AboutUsImg from "../Images/aboutus-image1.jpg"
import ServiceSlider from "../Components/ServiceSlider"
import Team from "../Components/Team"
import Contactformimg from "../Images/contact-form-img1.jpg"
import Footer from "../Components/Footer"

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

      {/* Our Team Section */}
      <div className="team-section-outer">
        <div className="team-section">
          <h4>Our Team</h4>
          <h2 className="team-section-title">Who We Are</h2>
          <Team />
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="contact-section-content">
          <div className="cotact-info">
            <div className="contact-image">
              <img src={Contactformimg} alt="contact" />
              <div className="contact-overlay">
                <div className="contact-text"></div>
              </div>
            </div>
          </div>
          <div className="contact-form-outer">
            <h4>Contact Form</h4>
            <h2 className="contact-section-title">Let's discuss</h2>
            <form className="contact-form">
              <div>
                <input type="text" className="name" placeholder="Your Name" />
                <input
                  type="text"
                  className="email"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="phone-no"
                  placeholder="Phone Number"
                />
                <input type="text" className="subject" placeholder="Subject" />
              </div>
              <textarea className="message" rows="5" placeholder="Message" />
              <input type="submit" className="submit" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
