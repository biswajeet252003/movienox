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

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">Trending Now</h2>
      <div className="movie-list-grid">
        {movieData.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard title={movie.title} poster={movie.poster} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 