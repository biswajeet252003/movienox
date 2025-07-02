import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Navbar/UserContext';
import { ref, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
import { db } from '../../firebase';
import './RequestHistory.css';

const RequestHistory = () => {
  const { user } = useContext(UserContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!user) return;

    const requestsRef = ref(db, 'movieRequests');
    const userRequestsQuery = query(
      requestsRef,
      orderByChild('userId'),
      equalTo(user.uid)
    );

    const unsubscribe = onValue(userRequestsQuery, (snapshot) => {
      const requestsData = [];
      snapshot.forEach((childSnapshot) => {
        requestsData.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
          createdAt: childSnapshot.val().createdAt ? new Date(childSnapshot.val().createdAt) : null
        });
      });
      
      // Sort by creation date (newest first)
      requestsData.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
      
      setRequests(requestsData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching requests:', error);
      setLoading(false);
    });

    return () => {
      off(requestsRef, 'value', unsubscribe);
    };
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f39c12';
      case 'approved': return '#27ae60';
      case 'added': return '#1ed290';
      case 'rejected': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'approved': return '✅';
      case 'added': return '🎬';
      case 'rejected': return '❌';
      default: return '❓';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return '#e74c3c';
      case 'high': return '#f39c12';
      case 'normal': return '#3498db';
      case 'low': return '#95a5a6';
      default: return '#95a5a6';
    }
  };

  const filteredRequests = requests.filter(request => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!user) {
    return (
      <div className="request-history-container">
        <div className="login-required">
          <h2>Login Required</h2>
          <p>Please log in to view your request history.</p>
          <div className="login-emoji">🔐</div>
        </div>
      </div>
    );
  }

  return (
    <div className="request-history-container">
      <div className="request-history-content">
        <div className="history-header">
          <h1>My Request History</h1>
          <p>Track the status of your movie and series requests</p>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({requests.length})
            </button>
            <button
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({requests.filter(r => r.status === 'pending').length})
            </button>
            <button
              className={`filter-btn ${filter === 'approved' ? 'active' : ''}`}
              onClick={() => setFilter('approved')}
            >
              Approved ({requests.filter(r => r.status === 'approved').length})
            </button>
            <button
              className={`filter-btn ${filter === 'added' ? 'active' : ''}`}
              onClick={() => setFilter('added')}
            >
              Added ({requests.filter(r => r.status === 'added').length})
            </button>
            <button
              className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
              onClick={() => setFilter('rejected')}
            >
              Rejected ({requests.filter(r => r.status === 'rejected').length})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading your requests...</p>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No requests found</h3>
            <p>
              {filter === 'all' 
                ? "You haven't submitted any requests yet. Start by requesting a movie or series!"
                : `No ${filter} requests found.`
              }
            </p>
            {filter === 'all' && (
              <a href="/request" className="request-link-btn">
                Submit Your First Request
              </a>
            )}
          </div>
        ) : (
          <div className="requests-grid">
            {filteredRequests.map((request) => (
              <div key={request.id} className="request-card">
                <div className="request-header">
                  <div className="request-title">
                    <h3>{request.title}</h3>
                    <span className="request-type">{request.type}</span>
                  </div>
                  <div className="request-status">
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(request.status) }}
                    >
                      {getStatusIcon(request.status)} {request.status}
                    </span>
                  </div>
                </div>

                <div className="request-details">
                  <div className="detail-item">
                    <span className="detail-label">Submitted:</span>
                    <span className="detail-value">{formatDate(request.createdAt)}</span>
                  </div>
                </div>

                {request.adminNote && (
                  <div className="admin-note">
                    <strong>Admin Note:</strong> {request.adminNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="history-info">
          <h3>Request Status Guide:</h3>
          <div className="status-guide">
            <div className="status-item">
              <span className="status-icon">⏳</span>
              <div>
                <strong>Pending:</strong> Your request is under review
              </div>
            </div>
            <div className="status-item">
              <span className="status-icon">✅</span>
              <div>
                <strong>Approved:</strong> Request approved, will be added soon
              </div>
            </div>
            <div className="status-item">
              <span className="status-icon">🎬</span>
              <div>
                <strong>Added:</strong> Content has been added to our platform
              </div>
            </div>
            <div className="status-item">
              <span className="status-icon">❌</span>
              <div>
                <strong>Rejected:</strong> Request cannot be fulfilled
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHistory; 