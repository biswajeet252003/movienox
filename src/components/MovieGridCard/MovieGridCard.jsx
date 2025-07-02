import React from 'react';
import './MovieGridCard.css';

const MovieGridCard = ({ image, title }) => {
  return (
    <div className="movie-grid-card">
      <img src={image} alt={title} className="movie-grid-card-image" />
      <div className="movie-grid-card-overlay">
        <h3 className="movie-grid-card-title">{title}</h3>
        <div className="download-text">Download</div>
      </div>
    </div>
  );
};

export default MovieGridCard; 