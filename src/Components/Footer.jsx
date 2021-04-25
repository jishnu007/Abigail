import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import logo from "../Images/abigail white.png"

function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-container">
        <div className="about-company-outer">
          <h3 class="footer-section-title">Abigail</h3>

          <p>
            Abigail Accounting and Bookkeeping is a fresh entity which we
            started as a service providing unit.
          </p>
          <a href="/">
            <img src={logo} alt="logo" width="240px" height="80px" />
          </a>
        </div>
        <div className="footer-servces">
          <h3 class="footer-section-title">Services</h3>
          <ul>
            <li>Accounting & Book keeping</li>
            <li>VAT Advisory</li>
            <li>Business Proposal</li>
            <li>Budget Preparatio</li>
            <li>Internal Auditing</li>
            <li>Management Consultancy</li>
          </ul>
        </div>
        <div className="contact-outer">
          <h3 class="footer-section-title">Contact</h3>
          <div className="contact-inner">
            <div class="contact-widget type1">
              <span class="fa fa-map-marker"> </span>Abigail Accounting and
              Bookkeeping
              <br />
              UAE
            </div>
            <div class="contact-widget type1">
              <span class="fa fa-mobile"> </span> 056 711 8999 <br />
              056 211 2848
            </div>
            <div class="contact-widget type1">
              <span class="fa fa-location-arrow"> </span>
              <a href="/">support@abigail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
