import React from 'react';
import { Link } from 'react-router-dom';
import MovieGridCard from '../MovieGridCard/MovieGridCard';
import './RelatedMovies.css';

const RelatedMovies = ({ allMovies, currentMovieId }) => {
  const related = allMovies.filter(movie => movie.id !== currentMovieId).slice(0, 5);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="related-movies-container">
      <h2 className="section-title">Related Movies</h2>
      <div className="related-movies-list">
        {related.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="related-movie-link">
            <MovieGridCard image={movie.poster} title={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies; 