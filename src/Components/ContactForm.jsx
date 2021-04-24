import React from "react"
import "./ContactForm.css"

function ContactForm() {
  return (
    <div className="form-outer">
      <form className="contact-form">
        <div>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="text" className="email" placeholder="Email Address" />
        </div>
        <div>
          <input type="text" className="phone-no" placeholder="Phone Number" />
          <input type="text" className="subject" placeholder="Subject" />
        </div>
        <textarea className="message" rows="5" placeholder="Message" />
        <input type="submit" className="submit" />
      </form>
    </div>
  )
}

export default ContactForm
