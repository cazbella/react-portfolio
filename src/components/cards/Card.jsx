import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

// Import images
import landingAreaSchedulerImage from '../../assets/images/Screenshot-landing-area-scheduler.png';
import weatherForecastImage from '../../assets/images/screenshot-weather-search-showing-history.png';
import codingStudentQuizImage from '../../assets/images/Screenshot-first-question.png';
import passwordGeneratorImage from '../../assets/images/screenshot-password-generator.png';
import teamProfileImage from '../../assets/images/screenshot-cards.png';
import birthdayCupcakesImage from '../../assets/images/Screenshot-birthday-cupcakes.png';

function Card({ title, image, aref, arefrepo, information, className }) {
  // Using the imported images directly as they disappeared
  let imagePath;

  switch (title) {
    case "Work Day Scheduler":
      imagePath = landingAreaSchedulerImage;
      break;
    case "Weather Forecast Dashboard":
      imagePath = weatherForecastImage;
      break;
    case "Coding Student Quiz":
      imagePath = codingStudentQuizImage;
      break;
    case "Random Password Generator":
      imagePath = passwordGeneratorImage;
      break;
    case "Team Profile Generator":
      imagePath = teamProfileImage;
      break;
    case "Birthday Cupcakes":
      imagePath = birthdayCupcakesImage;
      break;
    default:
      imagePath = image;
  }

  return (
    <div className={`col-lg-6 mb-4 ${className}`}>
      <div className="card-wrapper">
        <div className="card h-100">
          <a href={aref} target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img src={imagePath} className="card-img-top" alt={`Screenshot of ${title}`} />
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
