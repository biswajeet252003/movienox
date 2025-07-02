import React from 'react';
import './CastAndCrew.css';

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const CastAndCrew = ({ cast }) => {
  return (
    <div className="cast-crew-container">
      <h2 className="section-title">Cast & Crew</h2>
      <div className="cast-list">
        {cast.map(member => (
          <div key={member.name} className="cast-member">
            <div className="cast-initials-circle">
              <span>{getInitials(member.name)}</span>
            </div>
            <p className="cast-name">{member.name}</p>
            <p className="cast-character">as {member.as}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastAndCrew; 