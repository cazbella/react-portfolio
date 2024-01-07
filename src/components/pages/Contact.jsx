import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Header from "../layout/Header";
import "./Contact.css";

function Contact() {
  const iconStyle = { color: "black" }; // variable to store the colour style

  return (
    <div>
      <Header title="Contact" />

      {/* Bootstrap Contact Form */}
      <div className="container mt-4">
        <h2>Contact Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn submit">Submit</button>
        </form>
      </div>

      {/* Icons */}
      <div className="container-fluid mb-4 icon-container">
        <div className="container-fluid mb-4 rounded-3 work-header" id="icon-container">
          <div className="row">
            <div className="column">
              <a href="https://www.linkedin.com/in/caroline-lane7" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" style={iconStyle} />
              </a>
              <a href="mailto:cartolinelane@live.co.uk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="icon" style={iconStyle} />
              </a>
              <a href="https://www.facebook.com/CarolineBellaMusic" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
