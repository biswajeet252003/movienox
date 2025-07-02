import React from 'react';
import './SeriesGridCard.css';

const SeriesGridCard = ({ image, title }) => {
  return (
    <div className="series-grid-card">
      <img src={image} alt={title} className="series-grid-card-image" />
      <div className="series-grid-card-overlay">
        <h3 className="series-grid-card-title">{title}</h3>
        <div className="download-text">Download</div>
      </div>
    </div>
  );
};

export default SeriesGridCard; 