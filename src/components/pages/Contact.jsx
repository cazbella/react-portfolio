import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";


import Header from "../layout/Header";
import "./Contact.css";

function Contact() {
  // colour for icons
  const iconStyle = { color: "black" };
  //form logic - from class
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  //e is event - could be any name
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // need logic here to handle form submission, e.g send data to a server or process it in another way
    console.log("Form submitted:", formData);
    // klear form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>
      <Header title="Contact" />

      {/* Bootstrap Contact Form */}
      <div className="container mt-4">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn submit">Submit</button>
        </form>
      </div>

      {/* Icons */}
      <div className="container-fluid mb-4 icon-container">
        <div className="container-fluid mb-4 rounded-3 work-header" id="icon-container">
          <div className="row">
            <div className="column">
              {/* PDF CV Link */}
              <a href="/pdf/cvpdf.pdf" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFilePdf} className="icon" style={iconStyle} />
              </a>
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