import React from "react";
import Header from "../layout/Header";
import "./CV.css"

function CV() {
  return (
    <div>
      <Header title="CV" />
      <div className="container-fluid mb-4 cv">
        <div className="container-fluid mb-4 rounded-3 work-header" id="cv-container">
          <p>Please find a link below to my CV in PDF format and images of my CV</p>
          <a href="/pdf/cvpdf.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
            Open CV (PDF)
            
          </a>
          <div className="cv-images">
            {/* Add image tags for each image */}
            <img src="./images/cv-image1.jpg" alt="CV Image 1" />
            <img src="./images/cv-image2.jpg" alt="CV Image 2" />
            {/* Add more images as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;

