import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { downloadLinks as allDownloadLinks } from '../../data/movieDownloadLinks';
import { seriesDownloadLinks } from '../../data/seriesDownloadLinks';
import './LinkProtector.css';

const LinkProtector = () => {
  const [selectedQuality, setSelectedQuality] = useState(null);
  const { movieId } = useParams();

  // Determine if this is a series or movie
  const isSeries = Object.prototype.hasOwnProperty.call(seriesDownloadLinks, movieId);
  const movieDownloadData = isSeries
    ? seriesDownloadLinks[movieId]
    : allDownloadLinks[movieId] || allDownloadLinks['default'];
  const { title, fileSizes, downloadLinks } = movieDownloadData;
  
  // Define button styles for different qualities
  const getButtonStyle = (quality) => {
    switch(quality) {
      case '480p': return 'green';
      case '720p': return 'orange';
      case '1080p': return 'red';
      case '1080p HQ': return 'red';
      case '4K': return 'purple';
      default: return 'green';
    }
  };

  // Handle quality button click
  const handleQualityClick = (quality) => {
    setSelectedQuality(selectedQuality === quality ? null : quality);
  };

  // Handle download option click
  const handleDownloadOption = (link) => {
    if (link && link !== '#') {
      // Open link in a new tab
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      alert('Download link not available.');
    }
  };

  // Removed ad scripts

  // Generate download buttons dynamically
  const renderDownloadButtons = () => {
    if (!downloadLinks) {
      // Default buttons if no download links provided
      return (
        <>
          <button className="lp-download green" onClick={() => handleQualityClick('480p')}>Download Now 480p</button>
          <button className="lp-download orange" onClick={() => handleQualityClick('720p')}>Download Now 720p</button>
          <button className="lp-download red" onClick={() => handleQualityClick('1080p')}>Download Now 1080p</button>
        </>
      );
    }

    // Generate buttons based on available qualities
    return Object.keys(downloadLinks).map((quality) => (
      <div key={quality} className="quality-section">
        <button 
          className={`lp-download ${getButtonStyle(quality)} ${selectedQuality === quality ? 'active' : ''}`}
          onClick={() => handleQualityClick(quality)}
        >
          Download Now {quality}
        </button>
        
        {/* Show download options when quality is selected */}
        {selectedQuality === quality && downloadLinks[quality] && (
          <div className="download-options">
            {Object.entries(downloadLinks[quality]).map(([optionName, link]) => (
              <button 
                key={optionName}
                className="download-option-btn"
                onClick={() => handleDownloadOption(link)}
              >
                {optionName}
              </button>
            ))}
          </div>
        )}
      </div>
    ));
  };
  
  return (
    <div className="lp-root">
      <div className="lp-container">
        <div className="lp-card">
          <div className="lp-movie-title">{title}</div>

          <div className="lp-download-btns">
            {renderDownloadButtons()}
          </div>
        </div>
        <div className="lp-desc-card">
          <p>
            Welcome to our secure download platform! We provide high-quality movie downloads with multiple resolution options to suit your preferences. Our download links are protected and optimized for fast, reliable downloads. Choose your preferred quality and enjoy your movie experience. All downloads are safe and verified for your entertainment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkProtector; 