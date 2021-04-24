import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import BreadcrumbImg from "../Images/aboutus-image1.jpg"
import "./AboutUs.css"
import HeaderBox from "../Components/HeaderBox"
import AboutUsImg from "../Images/about1.jpg"

function AboutUs() {
  var sectionStyle = {
    background: `url(${BreadcrumbImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div className="aboutus-page-container">
      <Navbar />
      <HeaderBox sectionStyle={sectionStyle}>About Us</HeaderBox>
      <div className="aboutus-section">
        <div className="aboutus-content">
          <h4>Our Mission</h4>
          <h2 className="aboutus-title">To be the Leader</h2>
          <p>
            To be the leading accountants and business advisers, with a
            reputation of quality services when dealing with our valued clients.
            Adhering strictly to applicable financial reporting standards and
            best practice.
          </p>
        </div>
        <div className="aboutus-image">
          <img src={AboutUsImg} alt="abt1" className="aboutus-img" />
        </div>
      </div>
      <div className="aboutus-section">
        <div className="aboutus-image">
          <img src={AboutUsImg} alt="abt1" className="aboutus-img" />
        </div>
        <div className="aboutus-content">
          <h4>Our Vission</h4>
          <h2 className="aboutus-title">Providing the Best</h2>
          <p>
            We aim to be the practice of choice in Accounting, Taxation in the
            growing UAE market. To achieve this, we aim to champion the needs of
            the market in the application of consistent international financial
            reporting standards, promoting the value of sustainable business,
            which we believe best supports local business and meet the local
            regulation standards.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
