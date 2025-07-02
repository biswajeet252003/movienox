import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Navbar/UserContext';
import { ref, push, serverTimestamp } from 'firebase/database';
import { db } from '../../firebase';
import './RequestForm.css';

const RequestForm = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    title: '',
    type: 'movie'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setSubmitStatus({ type: 'error', message: 'Please log in to submit a request.' });
      return;
    }

    if (!formData.title.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter a title.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting request with data:', formData);
      console.log('User:', user.uid, user.email);
      
      const requestData = {
        ...formData,
        userId: user.uid,
        userEmail: user.email,
        status: 'pending',
        createdAt: Date.now(),
        updatedAt: Date.now()
      };

      console.log('Request data to be submitted:', requestData);
      console.log('Realtime Database object:', db);

      const requestsRef = ref(db, 'movieRequests');
      const newRequestRef = await push(requestsRef, requestData);
      console.log('Request submitted with key: ', newRequestRef.key);
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Request submitted successfully! We\'ll review it and add it soon.' 
      });
      
      // Reset form
      setFormData({
        title: '',
        type: 'movie'
      });

    } catch (error) {
      console.error('Error submitting request:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      
      let errorMessage = 'Failed to submit request. Please try again.';
      
      if (error.code === 'PERMISSION_DENIED') {
        errorMessage = 'Permission denied. Please check your Firebase rules.';
      } else if (error.code === 'UNAVAILABLE') {
        errorMessage = 'Service temporarily unavailable. Please try again later.';
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  // Test Realtime Database connection
  const testDatabase = async () => {
    try {
      console.log('Testing Realtime Database connection...');
      const testRef = ref(db, 'test');
      const testData = {
        test: true,
        timestamp: Date.now()
      };
      const newTestRef = await push(testRef, testData);
      console.log('Realtime Database test successful, key:', newTestRef.key);
      return true;
    } catch (error) {
      console.error('Realtime Database test failed:', error);
      return false;
    }
  };

  // Test on component mount
  useEffect(() => {
    if (user) {
      testDatabase();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="request-form-container">
        <div className="login-required">
          <h2>Login Required</h2>
          <p>Please log in to submit movie requests.</p>
          <div className="login-emoji">🔐</div>
        </div>
      </div>
    );
  }

  return (
    <div className="request-form-container">
      <div className="request-form-content">
        <div className="request-header">
          <h1>Request a Movie or Series</h1>
          <p>Can't find what you're looking for? Request it and we'll add it to our collection!</p>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Basic Information</h3>
            
            <div className="form-group">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter movie or series title"
                required
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="movie">Movie</option>
                  <option value="series">TV Series</option>
                  <option value="anime">Anime</option>
                  <option value="documentary">Documentary</option>
                  <option value="web-series">Web Series</option>
                </select>
              </div>
            </div>
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>

        <div className="request-info">
          <h3>How it works:</h3>
          <div className="info-steps">
            <div className="info-step">
              <div className="step-icon">📝</div>
              <div className="step-content">
                <h4>Submit Request</h4>
                <p>Fill out the form above with details about the movie or series you want.</p>
              </div>
            </div>
            <div className="info-step">
              <div className="step-icon">👀</div>
              <div className="step-content">
                <h4>We Review</h4>
                <p>Our team reviews your request and checks availability and licensing.</p>
              </div>
            </div>
            <div className="info-step">
              <div className="step-icon">✅</div>
              <div className="step-content">
                <h4>Get Notified</h4>
                <p>We'll notify you when your requested content is added to our platform.</p>
              </div>
            </div>
          </div>
          
          <div className="history-link-section">
            <a href="/requests" className="history-link-btn">
              📋 View My Request History
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm; 