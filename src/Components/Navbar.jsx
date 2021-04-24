import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../Images/abigail white.png"
function Navbar() {
  let [isMenuOn, setIsMenuOn] = useState(false)
  let [button, setButton] = useState(true)
  const handleMenu = () => {
    setIsMenuOn(!isMenuOn)
  }
  const showMenuIcon = () => {
    if (window.innnerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showMenuIcon()
  }, [])
  window.addEventListener("resize", showMenuIcon)
  return (
    <>
      <div className="header-container">
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" width="240px" height="80px" />
            </Link>
            <div className="menu-icon" onClick={handleMenu}>
              <i className={isMenuOn ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={isMenuOn ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-links">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
            {button}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
