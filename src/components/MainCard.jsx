import React from 'react';

function MainCard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12" id="cocktail-nights">
          <div className="card" style={{ width: '100%' }}>
            <a href="https://cazbella.github.io/mums-night/" target="_blank" rel="noopener noreferrer">
              <img src="images/screenshot-landing-area 2.png" className="card-img-top" alt="Picture of people in a meeting" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Cocktail Nights</h5>
              <p className="card-text">My first major project as a front end developer, this project involved taking an idea from scratch and development from user to story to MVP and beyond.</p>
              <a href="https://cazbella.github.io/mums-night/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
