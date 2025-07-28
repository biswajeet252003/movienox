import React, { useState, useRef, useContext, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { movieData } from '../../data/movieData';
import { seriesData } from '../../data/seriesData';
import './Navbar.css';
import app from '../../firebase';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { UserContext } from './UserContext';
import { googleProvider } from '../../firebase';
import RequestForm from '../MovieRequest/RequestForm';
import { FaTelegramPlane } from 'react-icons/fa';

const auth = getAuth(app);
const database = getDatabase(app);

const Navbar = () => {
  const { user, setShowLogin, showLogin } = useContext(UserContext);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showSignup, setShowSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [showNoResults, setShowNoResults] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Ad popup for home button click
    const adUrl = 'https://www.profitableratecpm.com/qbrqn7491?key=e0a9d9b4fbd916fbb59a79b9a64cf06c';
    window.open(adUrl, '_blank');
    navigate('/');
  };

  // Close profile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset showLogoutConfirm when dropdown closes
  useEffect(() => {
    if (!showProfileMenu) setShowLogoutConfirm(false);
  }, [showProfileMenu]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setActiveIndex(-1);
    setShowNoResults(true);
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const movieMatches = movieData.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      ).map(movie => ({ ...movie, type: 'movie' }));
      
      const seriesMatches = seriesData.filter(series =>
        series.title.toLowerCase().includes(value.toLowerCase())
      ).map(series => ({ ...series, type: 'series' }));
      
      const allSuggestions = [...movieMatches, ...seriesMatches];
      console.log('Search results:', {
        query: value,
        movies: movieMatches.length,
        series: seriesMatches.length,
        total: allSuggestions.length,
        results: allSuggestions.map(item => `${item.title} [${item.type}]`)
      });
      
      setSuggestions(allSuggestions);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length === 1) {
      handleSuggestionClick(suggestions[0]);
    }
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

  const openLogin = () => {
    setLoginEmail('');
    setLoginPassword('');
    setShowLogin(true);
  };

  const openSignup = () => {
    setSignupEmail('');
    setSignupPassword('');
    setShowSignup(true);
  };

  // Helper to map Firebase error codes to user-friendly messages
  const getFriendlyAuthError = (error) => {
    if (!error || !error.code) return 'An unknown error occurred.';
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/invalid-credential':
        return 'User not found or invalid credentials.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'Email already in use.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      default:
        return 'Authentication failed. Please try again.';
    }
  };

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      // Check if user is banned
      const userRef = ref(database, 'users/' + userCredential.user.uid);
      const snapshot = await (await import('firebase/database')).get(userRef);
      if (snapshot.exists() && snapshot.val().status === 'banned') {
        setAuthError('You have been banned by the admin.');
        await signOut(auth);
        return;
      }
      // Update lastLoggedIn
      await update(userRef, { lastLoggedIn: Date.now() });
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        setShowLogin(false);
        setShowProfileMenu(false);
        setShowLogoutConfirm(false);
        if (userCredential.user.email === 'bishub766@gmail.com') {
          navigate('/admin/dashboard');
        }
      }, 2000);
    } catch (error) {
      setAuthError(getFriendlyAuthError(error));
    }
  };

  // Signup handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      const user = userCredential.user;
      // Add user to Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        email: user.email,
        role: 'user',
        status: 'active',
        uid: user.uid,
      });
      setShowSignup(false);
      // Optionally, show success or update UI for logged-in user
    } catch (error) {
      setAuthError(getFriendlyAuthError(error));
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      if (user) {
        const userRef = ref(database, 'users/' + user.uid);
        await update(userRef, { lastLoggedOut: Date.now() });
      }
      await signOut(auth);
      setShowLogin(false);
    } catch (error) {
      alert('Logout failed. Please try again.');
    }
  };

  // Google Sign-In handler
  const handleGoogleSignIn = async () => {
    setAuthError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Check if user is banned
      const userRef = ref(database, 'users/' + user.uid);
      const snapshot = await (await import('firebase/database')).get(userRef);
      if (snapshot.exists() && snapshot.val().status === 'banned') {
        setAuthError('You have been banned by the admin.');
        await signOut(auth);
        return;
      }
      // Add user to Realtime Database if not present
      if (!snapshot.exists()) {
        await set(userRef, {
          email: user.email,
          role: 'user',
          status: 'active',
          uid: user.uid,
        });
      }
      // Update lastLoggedIn
      await update(userRef, { lastLoggedIn: Date.now() });

      setShowLogin(false);
      setShowSignup(false);
      setShowProfileMenu(false);
      setShowLogoutConfirm(false);

      if (user.email === 'bishub766@gmail.com') {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      setAuthError(getFriendlyAuthError(error));
    }
  };

  useEffect(() => {
    if (!user) return;
    const userRef = ref(database, 'users/' + user.uid);
    const unsubscribe = onValue(userRef, (snapshot) => {
      if (snapshot.exists() && snapshot.val().status === 'banned') {
        setAuthError('You have been banned by the admin.');
        signOut(auth);
      }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <NavLink to="/" className="navbar-logo">
            <span className="movienox-logo">Movie<span className="logo-x">Nox</span></span>
          </NavLink>
          
          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            <NavLink to="/" className="navbar-link" onClick={handleHomeClick}>Home</NavLink>
            <NavLink to="/series" className="navbar-link">Series</NavLink>
            <NavLink to="/genres" className="navbar-link">Genres</NavLink>
            <NavLink to="/request" className="navbar-link">Request</NavLink>
            <NavLink to="/about" className="navbar-link">About</NavLink>
            <a 
              href="https://t.me/MovieNox"
              className="navbar-link telegram-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
              <span>Join Telegram</span>
            </a>
          </div>
        </div>

        <div className="navbar-right">
          {!isHome && (
            <div className="navbar-search-wrapper" style={{ position: 'relative', width: '100%' }}>
              <form className="navbar-search" onSubmit={handleSubmit} autoComplete="off">
                <input
                  type="text"
                  className="navbar-search-input"
                  placeholder="Search movies or series..."
                  value={input}
                  onChange={handleInputChange}
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                />
                <button type="submit" className="navbar-search-btn">
                  <span role="img" aria-label="search">🔍</span>
                </button>
                {input && suggestions.length > 0 && (
                  <ul className="search-suggestions navbar-suggestions">
                    {suggestions.map((item, idx) => (
                      <li
                        key={item.type + '-' + item.id}
                        className={
                          'search-suggestion-item' + (idx === activeIndex ? ' active-suggestion' : '')
                        }
                        onClick={() => handleSuggestionClick(item)}
                      >
                        <div className="suggestion-content">
                          <div className="suggestion-title">{item.title}</div>
                          <div className="suggestion-meta">
                            <span className="suggestion-type" style={{color: item.type === 'movie' ? '#e74c3c' : '#3498db', fontSize:'0.8em', fontWeight: 'bold'}}>
                              {item.type === 'movie' ? '🎬 Movie' : '📺 Series'}
                            </span>
                            {item.rating && (
                              <span className="suggestion-rating" style={{color: '#f39c12', fontSize:'0.8em', marginLeft: '8px'}}>
                                ⭐ {item.rating}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {input && suggestions.length === 0 && showNoResults && (
                  <div className="no-search-results">
                    <button
                      className="close-no-results-btn"
                      style={{ position: 'absolute', top: 8, right: 12, background: 'none', border: 'none', fontSize: 20, color: '#888', cursor: 'pointer' }}
                      onClick={() => { setInput(''); setShowNoResults(false); }}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <div style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: 8 }}>
                      Sorry, no results found for "{input}".
                    </div>
                    <button
                      className="request-content-btn"
                      style={{ background: '#1ed290', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 'bold', cursor: 'pointer', marginTop: 8 }}
                      onClick={e => { e.preventDefault(); setShowRequestForm(true); }}
                    >
                      Request this content
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
          
          {/* Desktop Auth Buttons */}
          <div className="desktop-auth-buttons">
            {user ? (
              <div className="profile-menu-container" ref={profileMenuRef}>
                <button
                  className="profile-icon-btn"
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  aria-label="Profile"
                >
                  <svg height="32" width="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="#1ed290" />
                    <circle cx="16" cy="13" r="6" fill="#fff" />
                    <ellipse cx="16" cy="24" rx="8" ry="5" fill="#fff" />
                  </svg>
                </button>
                {showProfileMenu && (
                  <div className="profile-dropdown">
                    <div className="profile-email">{user.email}</div>
                    {!showLogoutConfirm ? (
                      <button className="login-btn" onClick={() => setShowLogoutConfirm(true)} style={{ width: '100%', marginTop: '8px' }}>Log Out</button>
                    ) : (
                      <div style={{width:'100%',marginTop:'8px',textAlign:'center'}}>
                        <div style={{marginBottom:'8px',color:'#fff'}}>Are you sure to logout?</div>
                        <div style={{display:'flex',gap:'8px',justifyContent:'center'}}>
                          <button className="login-btn" style={{background:'#e74c3c',borderColor:'#e74c3c',padding:'6px 16px'}} onClick={handleLogout}>Yes</button>
                          <button className="login-btn" style={{background:'#24443a',borderColor:'#24443a',padding:'6px 16px'}} onClick={() => setShowLogoutConfirm(false)}>No</button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="signup-btn" onClick={openSignup}>Sign Up</button>
                <button className="login-btn" onClick={openLogin}>Log In</button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            <NavLink to="/" className="mobile-nav-link" onClick={handleHomeClick}>Home</NavLink>
            <NavLink to="/series" className="mobile-nav-link">Series</NavLink>
            <NavLink to="/genres" className="mobile-nav-link">Genres</NavLink>
            <NavLink to="/request" className="mobile-nav-link">Request</NavLink>
            <NavLink to="/about" className="mobile-nav-link">About</NavLink>
            <a 
              href="https://t.me/MovieNox"
              className="mobile-nav-link telegram-link"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
            >
              <FaTelegramPlane />
              <span>Join Telegram</span>
            </a>
          </div>
          
          <div className="mobile-auth-section">
            {user ? (
              <div className="mobile-profile-section">
                <div className="mobile-profile-info">
                  <div className="mobile-profile-avatar">
                    <svg height="40" width="40" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill="#1ed290" />
                      <circle cx="16" cy="13" r="6" fill="#fff" />
                      <ellipse cx="16" cy="24" rx="8" ry="5" fill="#fff" />
                    </svg>
                  </div>
                  <div className="mobile-profile-email">{user.email}</div>
                </div>
                {!showLogoutConfirm ? (
                  <button className="mobile-logout-btn" onClick={() => setShowLogoutConfirm(true)}>
                    Log Out
                  </button>
                ) : (
                  <div className="mobile-logout-confirm">
                    <div className="mobile-logout-text">Are you sure to logout?</div>
                    <div className="mobile-logout-buttons">
                      <button className="mobile-logout-btn confirm" onClick={handleLogout}>Yes</button>
                      <button className="mobile-logout-btn cancel" onClick={() => setShowLogoutConfirm(false)}>No</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mobile-auth-buttons">
                <button className="mobile-signup-btn" onClick={openSignup}>Sign Up</button>
                <button className="mobile-login-btn" onClick={openLogin}>Log In</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowLogin(false)}>&times;</button>
            <h2>Log In</h2>
            {loginSuccess && (
              <div style={{
                background: '#e6fff2',
                color: '#1ed290',
                padding: '10px',
                borderRadius: '6px',
                marginBottom: '12px',
                textAlign: 'center',
                fontWeight: 'bold',
                border: '1.5px solid #1ed290'
              }}>
                Successfully logged in!
              </div>
            )}
            <form className="modal-form" onSubmit={handleLogin}>
              <input type="email" placeholder="Email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
              <div className="password-input-container">
                <input
                  type={showLoginPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              <button type="submit" className="modal-submit-btn">Log In</button>
            </form>
            <button className="google-signin-btn" onClick={handleGoogleSignIn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 5.14 29.583 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c11.045 0 19.799-7.954 19.799-19 0-1.27-.138-2.54-.377-3.771z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 5.14 29.583 3 24 3 16.318 3 9.656 7.656 6.306 14.691z"/><path fill="#FBBC05" d="M24 43c5.373 0 10.373-2.14 14.207-5.626l-6.586-5.396C31.377 33.01 28.803 34 26 34c-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.01-4.377 6.917-11.303 6.917-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45c5.373 0 10.373-2.14 14.207-5.626l-6.586-5.396C31.377 33.01 28.803 34 26 34c-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45c11.045 0 19.799-7.954 19.799-19 0-1.27-.138-2.54-.377-3.771z"/></g></svg>
              Continue with Google
            </button>
            {authError && <p style={{color: 'red', marginTop: '10px'}}>{authError}</p>}
            <p className="modal-switch">Don't have an account? <span onClick={() => { setShowLogin(false); openSignup(); }} style={{color:'#1ed290', cursor:'pointer'}}>Sign Up</span></p>
          </div>
        </div>
      )}
      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowSignup(false)}>&times;</button>
            <h2>Sign Up</h2>
            <form className="modal-form" onSubmit={handleSignup}>
              <input type="email" placeholder="Email" required value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
              <div className="password-input-container">
                <input
                  type={showSignupPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={signupPassword}
                  onChange={e => setSignupPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                >
                  {showSignupPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
              <button type="submit" className="modal-submit-btn">Sign Up</button>
            </form>
            <button className="google-signin-btn" onClick={handleGoogleSignIn}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 5.14 29.583 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20c11.045 0 19.799-7.954 19.799-19 0-1.27-.138-2.54-.377-3.771z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.803 0 5.377.99 7.413 2.626l6.293-6.293C34.583 5.14 29.583 3 24 3 16.318 3 9.656 7.656 6.306 14.691z"/><path fill="#FBBC05" d="M24 43c5.373 0 10.373-2.14 14.207-5.626l-6.586-5.396C31.377 33.01 28.803 34 26 34c-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.01-4.377 6.917-11.303 6.917-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45c5.373 0 10.373-2.14 14.207-5.626l-6.586-5.396C31.377 33.01 28.803 34 26 34c-5.001 0-9.345-3.104-11.123-7.51l-6.571 4.819C9.656 40.344 16.318 45 24 45c11.045 0 19.799-7.954 19.799-19 0-1.27-.138-2.54-.377-3.771z"/></g></svg>
              Continue with Google
            </button>
            {authError && <p style={{color: 'red', marginTop: '10px'}}>{authError}</p>}
            <p className="modal-switch">Already have an account? <span onClick={() => { setShowSignup(false); openLogin(); }} style={{color:'#1ed290', cursor:'pointer'}}>Log In</span></p>
          </div>
        </div>
      )}
      {showRequestForm && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.45)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowRequestForm(false)}>
          <div style={{ background: '#fff', borderRadius: 10, maxWidth: 520, width: '95vw', maxHeight: '90vh', overflowY: 'auto', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }} onClick={e => e.stopPropagation()}>
            <button style={{ position: 'absolute', top: 10, right: 16, background: 'none', border: 'none', fontSize: 28, color: '#888', cursor: 'pointer', zIndex: 10 }} onClick={() => setShowRequestForm(false)}>&times;</button>
            <RequestForm />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 