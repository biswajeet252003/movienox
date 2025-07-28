import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-header">
          <h1 className="about-title">About MovieNox</h1>
          <p className="about-subtitle">Your Ultimate Movie & Series Destination</p>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <div className="section-icon">🎬</div>
            <h2>Our Mission</h2>
            <p>
              At MovieNox, we believe that great entertainment should be accessible to everyone. 
              Our mission is to provide a seamless, user-friendly platform where movie and series 
              enthusiasts can discover, explore, and enjoy their favorite content.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">🌟</div>
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">🎭</span>
                <h3>Vast Collection</h3>
                <p>Thousands of movies and TV series across all genres</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <h3>Smart Search</h3>
                <p>Find exactly what you're looking for with our advanced search</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <h3>Cross-Platform</h3>
                <p>Access your content on any device, anywhere</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <h3>Fast & Reliable</h3>
                <p>High-quality streaming with minimal buffering</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <div className="section-icon">👥</div>
            <h2>Our Team</h2>
            <p>
              MovieNox is built by a passionate team of developers, designers, and entertainment 
              enthusiasts who are committed to creating the best possible user experience. 
              We continuously work to improve our platform and add new features based on user feedback.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">📞</div>
            <h2>Get In Touch</h2>
            <p>
              Can't find what you're looking for? You can request a movie or series, and we'll do our best to add it. 
              Reach out to us through our contact page or join our Telegram community for updates and discussions.
            </p>
            <div className="about-us-actions">
              <a href="/request" className="contact-btn">Request a Movie</a>
              <a 
                href="https://t.me/MovieNox"
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-btn telegram-btn"
              >
                Join Telegram Community
              </a>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Movies & Series</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 