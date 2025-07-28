import React from 'react';
import './Home.css';

const trendingMovies = [
  { title: 'Inception', year: 2010, img: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg', rating: 8.8 },
  { title: 'Interstellar', year: 2014, img: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', rating: 8.6 },
  { title: 'The Dark Knight', year: 2008, img: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: 9.0 },
  { title: 'Avengers: Endgame', year: 2019, img: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg', rating: 8.4 },
  { title: 'Joker', year: 2019, img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', rating: 8.5 },
  { title: 'Parasite', year: 2019, img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', rating: 8.6 },
];

const genres = [
  'Action', 'Comedy', 'Drama', 'Thriller', 'Sci-Fi', 'Romance', 'Horror', 'Animation', 'Adventure', 'Crime',
];

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <h1 className="hero-title animate-fadein">Welcome to MovieNox</h1>
          <p className="hero-subtitle animate-slideup">Discover, explore, and stream your favorite movies and series in HD quality.</p>
          <a href="#trending" className="hero-cta-btn animate-pop">Explore Now</a>
        </div>
      </section>

      {/* Trending Movies */}
      <section className="trending-section" id="trending">
        <h2 className="section-title">Trending Movies</h2>
        <div className="trending-grid">
          {trendingMovies.map((movie, idx) => (
            <div className="movie-card animate-fadein" key={movie.title} style={{ animationDelay: `${0.1 * idx}s` }}>
              <img src={movie.img} alt={movie.title} className="movie-img" />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <span className="movie-year">{movie.year}</span>
                <span className="movie-rating">⭐ {movie.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="genres-section">
        <h2 className="section-title">Browse by Genre</h2>
        <div className="genres-scroll">
          {genres.map((genre, idx) => (
            <div className="genre-chip animate-pop" key={genre} style={{ animationDelay: `${0.05 * idx}s` }}>{genre}</div>
          ))}
        </div>
      </section>

      {/* About/Features */}
      <section className="about-section">
        <h2 className="section-title">Why MovieNox?</h2>
        <div className="features-list">
          <div className="feature-card animate-fadein">
            <span role="img" aria-label="HD">🎬</span>
            <h4>HD Quality Streaming</h4>
            <p>Enjoy movies and series in crystal clear HD quality, anytime, anywhere.</p>
          </div>
          <div className="feature-card animate-fadein" style={{ animationDelay: '0.1s' }}>
            <span role="img" aria-label="No Ads">🚫</span>
            <h4>Ad-Free Experience</h4>
            <p>Watch your favorites without interruptions or annoying ads.</p>
          </div>
          <div className="feature-card animate-fadein" style={{ animationDelay: '0.2s' }}>
            <span role="img" aria-label="Fast">⚡</span>
            <h4>Fast & Easy Access</h4>
            <p>Lightning fast search and navigation for a seamless experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 