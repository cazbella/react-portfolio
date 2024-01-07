import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="container">
    <div className="container">
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">My GitHub repository</h5>
          <p className="card-text">If you would like to see my project repositories or my other projects on GitHub, please click the link below.</p>
          <a href="https://github.com/cazbella" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find me on GitHub</a>
        </div>
        <div className="card-footer text-body-secondary">
          Thank you for Visiting!
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
