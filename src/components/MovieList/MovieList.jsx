import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

import { movieData } from '../../data/movieData';

// Import movie posters
import img3Idiots from '../../assets/banner/3 idiots banner.jpg';
import imgBahubali from '../../assets/banner/bahubali banner.jpg';
import imgDangal from '../../assets/banner/Dangal  banner.jpg';
import imgKantara from '../../assets/banner/kantara.jpg';
import imgKGF from '../../assets/banner/kgf chapter 1.jpg';
import imgPK from '../../assets/banner/pk banner.jpg';
import imgSaaho from '../../assets/banner/saaho.jpg';
import imgKubera from '../../assets/banner/kubera17banner.jpg'

const parseReleaseDate = (dateStr) => {
  if (!dateStr) return 0;
  // Try to parse 'DD Month YYYY' or 'YYYY'
  const date = Date.parse(dateStr);
  if (!isNaN(date)) return date;
  // If only year is present
  const yearMatch = dateStr.match(/\d{4}/);
  if (yearMatch) return Date.parse(`01 Jan ${yearMatch[0]}`);
  return 0;
};

const MovieList = () => {
  // Sort by release date (newest first)
  const sortedMovies = [...movieData].sort((a, b) => parseReleaseDate(b.releaseDate) - parseReleaseDate(a.releaseDate));
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">Trending Now</h2>
      <div className="movie-list-grid">
        {sortedMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard title={movie.title} poster={movie.poster} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 