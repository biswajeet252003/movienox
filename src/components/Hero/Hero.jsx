import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { movieData } from '../../data/movieData';
import { seriesData } from '../../data/seriesData';
import './Hero.css';
import { UserContext } from '../Navbar/UserContext';
import RequestForm from '../MovieRequest/RequestForm';

const getNewestBanners = () => {
  return movieData
    .filter(movie => movie.banner && movie.releaseDate)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 5)
    .map(movie => ({ src: movie.banner, title: movie.title, position: 'top' }));
};

const Hero = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setShowLogin } = useContext(UserContext);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [images, setImages] = useState(getNewestBanners());

  useEffect(() => {
    setImages(getNewestBanners());
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (input.trim() === '') {
      setSuggestions([]);
    } else {
      const movieMatches = movieData.filter(movie =>
        movie.title.toLowerCase().includes(input.toLowerCase())
      ).map(movie => ({ ...movie, type: 'movie' }));
      const seriesMatches = seriesData.filter(series =>
        series.title.toLowerCase().includes(input.toLowerCase())
      ).map(series => ({ ...series, type: 'series' }));
      setSuggestions([...movieMatches, ...seriesMatches]);
    }
  }, [input]);

  useEffect(() => {
    if (!user) {
      setShowLogin(true);
    }
  }, [user, setShowLogin]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        handleSuggestionClick(suggestions[activeIndex]);
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length === 1) {
      const item = suggestions[0];
      if (item.type === 'movie') {
        navigate(`/movie/${item.id}`);
      } else if (item.type === 'series') {
        navigate(`/series/${item.id}`);
      }
    }
  };

  const handleSuggestionClick = (item) => {
    setInput('');
    setSuggestions([]);
    setActiveIndex(-1);
    if (item.type === 'movie') {
      navigate(`/movie/${item.id}`);
    } else if (item.type === 'series') {
      navigate(`/series/${item.id}`);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <img 
          key={currentImageIndex}
          src={images[currentImageIndex].src} 
          alt="Banner" 
          className="hero-image" 
          style={{ objectPosition: images[currentImageIndex].position }}
        />
        <form className="hero-search" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Search for movies or series..."
            className="search-input"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" type="submit">Search</button>
          {input && suggestions.length > 0 && (
            <ul className="search-suggestions">
              {suggestions.map((item, idx) => (
                <li
                  key={item.type + '-' + item.id}
                  className={
                    'search-suggestion-item' + (idx === activeIndex ? ' active-suggestion' : '')
                  }
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item.title} <span style={{color:'#1ed290', fontSize:'0.9em'}}>[{item.type}]</span>
                </li>
              ))}
            </ul>
          )}
          {input && suggestions.length === 0 && (
            <div className="no-search-results" style={{ background: '#fff', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 15px rgba(0,0,0,0.12)', marginTop: 2, padding: '18px 16px', textAlign: 'center', position: 'absolute', left: 0, right: 0, zIndex: 10 }}>
              <div style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: 8 }}>
                Sorry, no results found for "{input}".
              </div>
              <button
                className="request-content-btn"
                style={{ background: '#1ed290', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer', marginTop: 8 }}
                onClick={e => { e.preventDefault(); navigate('/request'); }}
              >
                Request this content
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Hero; 