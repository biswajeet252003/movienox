import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieGridCard from '../MovieGridCard/MovieGridCard';
import { UserContext } from '../Navbar/UserContext';
import './MovieGrid.css';

import { movieData } from '../../data/movieData';

const MovieGrid = ({ searchQuery = '' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(UserContext);

  const handleCardClick = (movieId) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    // Ad popup for movie grid card click
    const adUrl = 'https://www.profitableratecpm.com/mjj12vwuuj?key=c002a7196561d807248831d2effff2ec';
    window.open(adUrl, '_blank');
    navigate(`/movie/${movieId}`);
  };

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort movies by release year (descending)
  const sortedMovies = filteredMovies.sort((a, b) => {
    // Extract year from releaseDate (format: 'DD Month YYYY')
    const getYear = (movie) => {
      if (!movie.releaseDate) return 0;
      const parts = movie.releaseDate.trim().split(' ');
      const year = parseInt(parts[parts.length - 1], 10);
      return isNaN(year) ? 0 : year;
    };
    return getYear(b) - getYear(a); // Descending order
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const displayMovies = sortedMovies.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="movie-grid-wrapper">
      <div className="movie-grid-container">
        {displayMovies.map((movie) => (
          <div onClick={() => handleCardClick(movie.id)} key={movie.id} style={{ cursor: 'pointer' }}>
            <MovieGridCard
              image={movie.poster}
              title={movie.title}
            />
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination-info">
            Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, sortedMovies.length)} of {sortedMovies.length} movies
          </div>
          <div className="pagination-buttons">
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            
            <button 
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieGrid; 