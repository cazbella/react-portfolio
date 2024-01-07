import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function MainCard() {
  return (
    <div className="container-fluid mb-4"> {/* mb-4 for consistent margin */}
      <div className="row">
        <div className="col-12" id="cocktail-nights">
          <div className="card" style={{ width: '100%' }}>
            <a href="https://cazbella.github.io/mums-night/" target="_blank" rel="noopener noreferrer">
              <img src="images/screenshot-landing-area 2.png" className="card-img-top" alt="Picture of people in a meeting" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Cocktail Nights</h5>
              <p className="card-text">My first major project as a front end developer, this project involved taking an idea from scratch and development from user to story to MVP and beyond.</p>
              <a href="https://cazbella.github.io/mums-night/" className="btn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
              <a href="https://github.com/cazbella/mums-night/" className="btn repo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
