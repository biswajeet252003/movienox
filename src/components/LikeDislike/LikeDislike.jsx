import React, { useState, useEffect } from 'react';
import './LikeDislike.css';

const LikeDislike = ({ movieId, movieTitle }) => {
  const [reactions, setReactions] = useState({
    excellent: 0,
    loved: 0,
    thanks: 0,
    wow: 0,
    sad: 0
  });
  const [userReaction, setUserReaction] = useState(null);

  const reactionOptions = [
    { key: 'excellent', emoji: '🤩', label: 'Excellent' },
    { key: 'loved', emoji: '❤️', label: 'Loved' },
    { key: 'thanks', emoji: '🙏', label: 'Thanks' },
    { key: 'wow', emoji: '😮', label: 'Wow' },
    { key: 'sad', emoji: '😢', label: 'Sad' }
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(`movie_${movieId}_reactions`);
    if (savedData) {
      const data = JSON.parse(savedData);
      setReactions(data);
    }

    // Check if user has already reacted
    const userReactionData = localStorage.getItem(`user_reaction_${movieId}`);
    if (userReactionData) {
      setUserReaction(userReactionData);
    }
  }, [movieId]);

  const saveReactionData = (newReactions) => {
    localStorage.setItem(`movie_${movieId}_reactions`, JSON.stringify(newReactions));
  };

  const handleReaction = (reactionKey) => {
    let newReactions = { ...reactions };

    if (userReaction === reactionKey) {
      // User is removing their reaction
      newReactions[reactionKey] = Math.max(0, reactions[reactionKey] - 1);
      setUserReaction(null);
      localStorage.removeItem(`user_reaction_${movieId}`);
    } else {
      // User is adding/changing their reaction
      if (userReaction) {
        // Remove previous reaction
        newReactions[userReaction] = Math.max(0, reactions[userReaction] - 1);
      }
      newReactions[reactionKey] = reactions[reactionKey] + 1;
      setUserReaction(reactionKey);
      localStorage.setItem(`user_reaction_${movieId}`, reactionKey);
    }

    setReactions(newReactions);
    saveReactionData(newReactions);
  };

  const totalReactions = Object.values(reactions).reduce((sum, count) => sum + count, 0);
  const topReaction = Object.entries(reactions).reduce((a, b) => reactions[a[0]] > reactions[b[0]] ? a : b);
  const topReactionPercentage = totalReactions > 0 ? Math.round((topReaction[1] / totalReactions) * 100) : 0;

  return (
    <div className="like-dislike-container">
      <h3 className="like-dislike-title">How did you feel about "{movieTitle}"?</h3>
      
      <div className="reaction-buttons">
        {reactionOptions.map((option) => (
          <button
            key={option.key}
            className={`reaction-btn ${option.key}-btn ${userReaction === option.key ? 'active' : ''}`}
            onClick={() => handleReaction(option.key)}
            aria-label={`React with ${option.label}`}
          >
            <span className="reaction-emoji">{option.emoji}</span>
            <span className="reaction-label">{option.label}</span>
            <span className="reaction-count">{reactions[option.key]}</span>
          </button>
        ))}
      </div>

      {totalReactions > 0 && (
        <div className="reaction-stats">
          <div className="top-reaction">
            <span className="top-reaction-text">
              Most popular: {reactionOptions.find(opt => opt.key === topReaction[0])?.emoji} {reactionOptions.find(opt => opt.key === topReaction[0])?.label} ({topReactionPercentage}%)
            </span>
            <div className="reaction-bar">
              <div 
                className="reaction-bar-fill" 
                style={{ width: `${topReactionPercentage}%` }}
              ></div>
            </div>
          </div>
          <span className="total-reactions">{totalReactions} total reactions</span>
        </div>
      )}
    </div>
  );
};

export default LikeDislike; 