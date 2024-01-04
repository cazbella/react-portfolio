import React from 'react';

function Navbar() {
  return (
    <div className="container-fluid mb-4">
      <nav className="navbar navbar-expand-lg bg-body-tertiary customNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about-me">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#CV">CV</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-me">Contact Me</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="mailto:carolinelane@live.co.uk">Email</a></li>
                  <hr className="dropdown-divider" />
                  <li><a className="dropdown-item"
                    href="https://www.linkedin.com/in/caroline-lane-690b92264/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank">LinkedIn</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="https://www.facebook.com/CarolineBellaMusic"
                    target="_blank">Facebook</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="btn btn-primary btn-lg navCTA" href="mailto:carolinelane@live.co.uk" role="button">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
