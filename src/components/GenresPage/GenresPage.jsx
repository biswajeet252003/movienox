import React from 'react';
import { Link } from 'react-router-dom';
import { movieData } from '../../data/movieData';
import './GenresPage.css';

const GenresPage = () => {
  // Get all unique genres from movieData
  const allGenres = movieData.flatMap(movie => movie.genres);
  const uniqueGenres = [...new Set(allGenres)];

  return (
    <div className="genres-page-container">
      <h1 className="genres-title">Explore Genres</h1>
      <div className="genres-grid">
        {uniqueGenres.map(genre => (
          <Link key={genre} to={`/genre/${genre.toLowerCase()}`} className="genre-card">
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage; 