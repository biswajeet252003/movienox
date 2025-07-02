import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={`${title} poster`} className="movie-card-poster" />
    </div>
  );
};

export default MovieCard; 