import React from 'react';
import YouTube from 'react-youtube';
import './TrailerPlayer.css';

const TrailerPlayer = ({ trailerId }) => {
  const opts = {
    height: '480',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="trailer-container">
      <h2 className="trailer-title">Official Trailer</h2>
      <div className="video-player-wrapper">
        <YouTube videoId={trailerId} opts={opts} />
      </div>
    </div>
  );
};

export default TrailerPlayer; 