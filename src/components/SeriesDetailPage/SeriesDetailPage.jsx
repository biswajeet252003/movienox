import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { seriesData } from '../../data/seriesData';
import TrailerPlayer from '../TrailerPlayer/TrailerPlayer';
import CastAndCrew from '../CastAndCrew/CastAndCrew';
import Screenshots from '../Screenshots/Screenshots';
import LikeDislike from '../LikeDislike/LikeDislike';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './SeriesDetailPage.css';

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

const SeriesDetailPage = () => {
  const { seriesId } = useParams();
  const series = seriesData.find(s => s.id === seriesId);
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    // Ad popup for series download button
    const adUrl = 'https://www.profitableratecpm.com/qbrqn7491?key=e0a9d9b4fbd916fbb59a79b9a64cf06c';
    window.open(adUrl, '_blank');
    navigate(`/download/${series.id}`);
  };

  if (!series) {
    return (
      <div className="detail-page-container not-found">
        <h1>404 - Series Not Found</h1>
      </div>
    );
  }

  return (
    <div className="detail-page-container">
      <h1 className="movie-main-title">{series.title}</h1>
      <div className="movie-banner-image-wrapper">
        <img src={series.banner} alt={`${series.title} Banner`} className="movie-banner-image" />
      </div>
      
      <div className="movie-content-area">
        <div className="left-column">
          <img src={series.poster} alt={`${series.title} Poster`} className="movie-poster-small" />
          <p><strong>Genre:</strong> {series.genres.join(', ')} | <strong>Release Date:</strong> {series.releaseDate} | <strong>Seasons:</strong> {series.seasons}</p>
          {series.industry && (
            <p><strong>Industry:</strong> <span className="industry-pill">{series.industry}</span></p>
          )}
          {series.writer && (
            <p><strong>Writer:</strong> {series.writer}</p>
          )}
          {series.producer && (
            <p><strong>Producer:</strong> {series.producer}</p>
          )}
          {series.music && (
            <p><strong>Music:</strong> {series.music}</p>
          )}
          {series.runtime && (
            <p><strong>Runtime:</strong> {series.runtime}</p>
          )}
          {series.language && (
            <p><strong>Language:</strong> {series.language}</p>
          )}
          {series.budget && (
            <p><strong>Budget:</strong> {series.budget}</p>
          )}
          {series.boxOffice && (
            <p><strong>Box Office:</strong> {series.boxOffice}</p>
          )}
          {series.certification && (
            <p><strong>Certification:</strong> {series.certification}</p>
          )}
          {series.awards && series.awards.length > 0 && (
            <p><strong>Awards:</strong> {series.awards.join(', ')}</p>
          )}
          {series.streaming && series.streaming.length > 0 && (
            <p><strong>Streaming:</strong> {series.streaming.join(', ')}</p>
          )}
          <p><strong>Creators:</strong> {series.creators.map((creator, index) => (
            <span key={index} className="director-pill">{creator}</span>
          ))}</p>
          <p><strong>Synopsis:</strong> {series.fullDescription}</p>
        </div>

        <div className="right-column">
          <h2>Ratings</h2>
          <div className="ratings-summary">
            <span className="rating-score">{series.rating.toFixed(1)}</span>
            <div className="rating-stars-reviews">
              <StarRating rating={Math.round(series.rating / 2)} />
              <span>{series.reviews} reviews</span>
            </div>
          </div>
          <div className="ratings-distribution">
            {series.ratingDistribution.map(item => (
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
      
      <div className="trailer-section">
        {series.trailerId ? (
          <TrailerPlayer trailerId={series.trailerId} />
        ) : (
          <div className="trailer-not-available">Trailer not available</div>
        )}
      </div>
      <ScrollReveal>
        <CastAndCrew cast={series.cast} />
      </ScrollReveal>
      <div className="download-button-container">
        <button className="download-button" onClick={handleDownloadClick}>
          Download
        </button>
      </div>
      <ScrollReveal>
        <Screenshots screenshots={series.screenshots} />
      </ScrollReveal>
      <ScrollReveal>
        <LikeDislike movieId={series.id} movieTitle={series.title} />
      </ScrollReveal>
    </div>
  );
};

export default SeriesDetailPage; 