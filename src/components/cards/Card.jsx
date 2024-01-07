import React from 'react';
import "./Card.css";

// ... other imports

function Card({ title, image, aref, information, className }) {
  return (
    <div className={`col-lg-6 mb-4 rounded-bottom ${className}`}>
      <div className="card h-100"> {/* Use 'h-100' to make cards the same height */}
        <a href={aref} target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img src={image} className="card-img-top" alt={`Screenshot of ${title}`} />
          </div>
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{information}</p>
          <a href={aref} className="btn" target="_blank" rel="noopener noreferrer">
            Explore here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
