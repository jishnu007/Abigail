import React from "react"
import Navbar from "../Components/Navbar"
import HeaderBox from "../Components/HeaderBox"
import BreadcrumbImg from "../Images/aboutus-image1.jpg"

function Contact() {
  var sectionStyle = {
    background: `url(${BreadcrumbImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  return (
    <div className="Contact-page-outer-container">
      <Navbar />
      <HeaderBox sectionStyle={sectionStyle}>Contact</HeaderBox>
    </div>
  )
}

export default Contact
