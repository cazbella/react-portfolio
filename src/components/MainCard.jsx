import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import cocktailScreenshot from "../assets/images/Screenshot-cocktail-creations.png";

function MainCard() {
  return (
    <div className="container-fluid mb-4"> {/* mb-4 for consistent margin */}
      <div className="row">
        <div className="col-12" id="cocktail-nights">
          <div className="card" style={{ width: '100%' }}>
            <a href="https://cazbella.github.io/CocktailCreations/" target="_blank" rel="noopener noreferrer">
              <img src={cocktailScreenshot}
              className="card-img-top" alt="Screenshot of Cocktail Nights landing page" style={{ height: '350px', objectFit: 'cover', objectPosition: 'top'   }}  />
            </a>
            <div className="card-body">
              <h5 className="card-title">Cocktail Nights</h5>
              <p className="card-text">Find Cocktail Recipes based on selected ingredients! This project uses React, Flask and mySQL</p>
              <a href="https://cazbella.github.io/CocktailCreations/" className="btn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
              <a href="https://github.com/cazbella/CocktailCreations/" className="btn repo" target="_blank" rel="noopener noreferrer">
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
