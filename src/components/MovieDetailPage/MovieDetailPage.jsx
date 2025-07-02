import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieData } from '../../data/movieData';
import TrailerPlayer from '../TrailerPlayer/TrailerPlayer';
import CastAndCrew from '../CastAndCrew/CastAndCrew';
import Screenshots from '../Screenshots/Screenshots';
import RelatedMovies from '../RelatedMovies/RelatedMovies';
import LikeDislike from '../LikeDislike/LikeDislike';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './MovieDetailPage.css';

// Simple Star Rating Component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }
  return <div className="star-rating">{stars}</div>;
};

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const movie = movieData.find(m => m.id === movieId);
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    // Ad popup for movie download button
    const adUrl = 'https://www.profitableratecpm.com/mjj12vwuuj?key=c002a7196561d807248831d2effff2ec';
    window.open(adUrl, '_blank');
    navigate(`/download/${movie.id}`);
  };

  if (!movie) {
    return (
      <div className="detail-page-container not-found">
        <h1>404 - Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="detail-page-container">
      <h1 className="movie-main-title">{movie.title}</h1>
      <div className="movie-banner-image-wrapper">
        <img src={movie.banner} alt={`${movie.title} Banner`} className="movie-banner-image" />
      </div>
      
      <div className="movie-content-area">
        <div className="left-column">
          <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster-small" />
          <p><strong>Genre:</strong> {movie.genres.join(', ')} | <strong>Release Date:</strong> {movie.releaseDate}</p>
          {movie.industry && (
            <p><strong>Industry:</strong> <span className="industry-pill">{movie.industry}</span></p>
          )}
          <p><strong>Director:</strong> <span className="director-pill">{movie.director}</span></p>
          {movie.writer && (
            <p><strong>Writer:</strong> {movie.writer}</p>
          )}
          {movie.producer && (
            <p><strong>Producer:</strong> {movie.producer}</p>
          )}
          {movie.music && (
            <p><strong>Music:</strong> {movie.music}</p>
          )}
          {movie.runtime && (
            <p><strong>Runtime:</strong> {movie.runtime}</p>
          )}
          {movie.language && (
            <p><strong>Language:</strong> {movie.language}</p>
          )}
          {movie.budget && (
            <p><strong>Budget:</strong> {movie.budget}</p>
          )}
          {movie.boxOffice && (
            <p><strong>Box Office:</strong> {movie.boxOffice}</p>
          )}
          {movie.certification && (
            <p><strong>Certification:</strong> {movie.certification}</p>
          )}
          {movie.awards && movie.awards.length > 0 && (
            <p><strong>Awards:</strong> {movie.awards.join(', ')}</p>
          )}
          {movie.streaming && movie.streaming.length > 0 && (
            <p><strong>Streaming:</strong> {movie.streaming.join(', ')}</p>
          )}
          <p><strong>Synopsis:</strong> {movie.fullDescription}</p>
        </div>

        <div className="right-column">
          <h2>Ratings</h2>
          <div className="ratings-summary">
            <span className="rating-score">{movie.rating.toFixed(1)}</span>
            <div className="rating-stars-reviews">
              <StarRating rating={Math.round(movie.rating / 2)} />
              <span>{movie.reviews} reviews</span>
            </div>
          </div>
          <div className="ratings-distribution">
            {movie.ratingDistribution.map(item => (
              <div key={item.stars} className="rating-bar-container">
                <span>{item.stars}</span>
                <div className="rating-bar">
                  <div className="rating-bar-filled" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ScrollReveal>
        <div className="trailer-section">
          {movie.trailerId ? (
            <TrailerPlayer trailerId={movie.trailerId} />
          ) : (
            <div className="trailer-not-available">Trailer not available</div>
          )}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <CastAndCrew cast={movie.cast} />
      </ScrollReveal>
      
      <div className="download-button-container">
        <button className="download-button" onClick={handleDownloadClick}>
          Download
        </button>
      </div>
      
      <ScrollReveal>
        <Screenshots screenshots={movie.screenshots} />
      </ScrollReveal>
      <ScrollReveal>
        <LikeDislike movieId={movie.id} movieTitle={movie.title} />
      </ScrollReveal>
      <ScrollReveal>
        <RelatedMovies allMovies={movieData} currentMovieId={movie.id} />
      </ScrollReveal>
    </div>
  );
};

export default MovieDetailPage; 