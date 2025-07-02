import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SeriesGridCard from '../SeriesGridCard/SeriesGridCard';
import { UserContext } from '../Navbar/UserContext';
import './SeriesGrid.css';

import { seriesData } from '../../data/seriesData';

const SeriesGrid = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(UserContext);

  const handleCardClick = (seriesId) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    // Ad popup for series grid card click
    const adUrl = 'https://www.profitableratecpm.com/qbrqn7491?key=e0a9d9b4fbd916fbb59a79b9a64cf06c';
    window.open(adUrl, '_blank');
    navigate(`/series/${seriesId}`);
  };

  return (
    <div className="series-grid-container">
      {[...seriesData].reverse().map((series) => (
        <div onClick={() => handleCardClick(series.id)} key={series.id} style={{ cursor: 'pointer' }}>
          <SeriesGridCard
            image={series.poster}
            title={series.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SeriesGrid; 