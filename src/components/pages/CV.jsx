import React from "react";
import Header from "../layout/Header";
import "./CV.css";
import cvImage1 from "../../assets/images/cv-image1.jpg";
import cvImage2 from "../../assets/images/cv-image2.jpg";

import cdpdf from "../../assets/pdf/cvpdf.pdf";

function CV() {
  return (
    <div>
      <Header title="CV" />
      <div className="container-fluid mb-4 cv-container">
        <div className="container-fluid mb-4 rounded-3 work-header" id="cv-container">
          <p>Please find a link below to my CV in PDF format and images of my CV.</p>
          <a href={cdpdf} target="_blank" rel="noopener noreferrer" className="cv-link">
            Open CV (PDF)
          </a>
          <br />
          <div className="cv-images">
            <img src={cvImage1} alt="CV Image 1" />
            <br />
            <br />
            <img src={cvImage2} alt="CV Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
