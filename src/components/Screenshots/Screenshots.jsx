import React from 'react';
import './Screenshots.css';

const Screenshots = ({ screenshots }) => {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="screenshots-container">
      <h2 className="section-title">Screenshots</h2>
      <div className="screenshot-image-wrapper">
        <img src={screenshots[0]} alt="Movie Screenshot" className="screenshot-image" />
      </div>
    </div>
  );
};

export default Screenshots; 