import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    // You can add actual newsletter logic here
  };

  return (
    <footer className="footer">
      <div className="footer-content enhanced-footer footer-row-layout">
        <div className="footer-col footer-links-col">
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
        <div className="footer-col footer-center-col">
          <div className="footer-apps">
            <a href="#" className="app-badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" height="40" />
            </a>
            <a href="#" className="app-badge">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" height="40" />
            </a>
          </div>
          <form className="footer-newsletter" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletter-email" className="newsletter-label">Subscribe to our newsletter</label>
            <div className="newsletter-row">
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={submitted}
              />
              <button type="submit" className="newsletter-btn" disabled={submitted}>
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>
          <div className="footer-madeby">Made with <span style={{color:'#e25555', fontSize:'1.2em'}}>❤️</span> by MovieKnox Team</div>
          <span style={{display:'block', marginTop:'12px'}}>© {new Date().getFullYear()} MovieKnox. All rights reserved.</span>
        </div>
        <div className="footer-col footer-social-col">
          <div className="footer-social">
            <a href="https://t.me/Movieknox" className="social-icon" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#229ED9"/><path d="M17.5 7.5L15.5 17.5C15.5 17.5 15.25 18 14.75 18C14.5 18 14.25 17.75 14.25 17.75L11.5 15.5L10.25 16.5C10.25 16.5 10 16.75 9.75 16.75C9.5 16.75 9.5 16.5 9.5 16.5L9.25 13.75L15.25 9.25C15.25 9.25 15.5 9 15.25 8.75C15 8.5 14.5 8.75 14.5 8.75L7.75 11.25C7.75 11.25 7.25 11.5 7.25 12C7.25 12.5 8 12.75 8 12.75L10 13.25L13.25 11.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#E1306C"/><path d="M16 8.5C16 8.22386 15.7761 8 15.5 8C15.2239 8 15 8.22386 15 8.5C15 8.77614 15.2239 9 15.5 9C15.7761 9 16 8.77614 16 8.5Z" fill="white"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1.5"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1DA1F2"/><path d="M17 9.5C16.7 9.6 16.4 9.7 16.1 9.7C16.4 9.5 16.6 9.2 16.7 8.9C16.4 9.1 16.1 9.2 15.8 9.3C15.5 9 15.1 8.8 14.7 8.8C13.8 8.8 13.1 9.5 13.1 10.3C13.1 10.4 13.1 10.5 13.1 10.6C11.7 10.5 10.5 9.8 9.7 8.8C9.6 9 9.6 9.2 9.6 9.4C9.6 9.8 9.8 10.1 10.1 10.3C9.9 10.3 9.7 10.2 9.5 10.1C9.5 10.1 9.5 10.1 9.5 10.2C9.5 10.8 9.9 11.3 10.5 11.4C10.4 11.4 10.3 11.4 10.2 11.4C10.1 11.4 10.1 11.4 10.1 11.4C10.2 11.9 10.7 12.3 11.3 12.3C10.9 12.6 10.4 12.7 9.9 12.7C9.8 12.7 9.7 12.7 9.6 12.7C10.2 13.1 10.9 13.3 11.6 13.3C14.7 13.3 16.3 11 16.3 9.1C16.3 9.1 16.3 9.1 16.3 9.1C16.6 9 16.8 8.8 17 8.6C16.8 8.7 16.6 8.8 17 9.5Z" fill="white"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FF0000"/><path d="M15.5 12L10.5 15V9L15.5 12Z" fill="white"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 