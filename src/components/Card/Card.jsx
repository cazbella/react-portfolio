import React from 'react';

function Card({ title, image, aref, information }) {
  return (
    <div className="col-6">
      <div className="card my-3 border-bottom rounded-bottom h-100">
        <a href={aref} target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img src={image} className="card-img-top" alt={`Screenshot of ${title}`} />
          </div>
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{information}</p>
          <a href={aref} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Explore here</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
