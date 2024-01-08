import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Card.css';
// import ""

function Card({ title, image, aref, arefrepo, information, className }) {
  return (
    <div className={`col-lg-6 mb-4 ${className}`}>
      <div className="card-wrapper">
        <div className="card h-100">
          <a href={aref} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img src={image} className="card-img-top" alt={`Screenshot of ${title}`} />
            </div>
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{information}</p>
            <a href={aref} className="btn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a href={arefrepo} className="btn repo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
