import React from "react"
import "./Home.css"
import Slider from "../Components/Slider"
import AboutUsImg from "../Images/aboutus-image1.jpg"
import ParallexBg from "../Images/parallex-bg2.jpg"
import ServiceSlider from "../Components/ServiceSlider"
import Team from "../Components/Team"
import Contactformimg from "../Images/contact-form-img1.jpg"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ContactForm from "../Components/ContactForm"
import TextLoop from "react-text-loop"
import { Parallax, Background } from "react-parallax"
function Home() {
  return (
    <div className="homepage-container">
      <Navbar />
      <Slider />
      <div className="aboutus-section">
        <div className="aboutus-image" data-aos="fade-right">
          <img src={AboutUsImg} alt="abt1" className="aboutus-img" />
        </div>
        <div className="aboutus-content" data-aos="fade-left">
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
          <h4 data-aos="fade-up">Our Services</h4>
          <h2 className="service-section-title" data-aos="fade-up">
            What We Do
          </h2>
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
      {/* looking For ... */}
      <Parallax bgImage={ParallexBg} strength={500}>
        <div class="looking-for-outer">
          <div className="looking-for-container">
            <div class="looking-for-content">
              <h2 class="looking-for-heading">
                LOOKING FOR{" "}
                <TextLoop>
                  <span>ACCOUNTING</span>
                  <span>AUDIT</span>
                  <span>VAT</span>
                  <span>MANAGEMENT</span>
                </TextLoop>{" "}
                CONSULTING?
              </h2>
              <a href="/contact" className="banner-button">
                Contact us Today
              </a>
            </div>
          </div>
        </div>
      </Parallax>
      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="contact-section-content">
          <div className="cotact-info" data-aos="fade-right">
            <div className="contact-image">
              <img src={Contactformimg} alt="contact" />
              <div className="contact-overlay">
                <div className="contact-text"></div>
              </div>
            </div>
          </div>
          <div className="contact-form-outer" data-aos="fade-left">
            <h4>Contact Form</h4>
            <h2 className="contact-section-title">Let's discuss</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default Home
