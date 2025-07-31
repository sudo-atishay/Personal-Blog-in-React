import React from 'react';

const Home = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="intro">Hi, I'm Atishay Jain</h1>
        <h2 className="title">Dev, Tech-Enthusiast & Learner</h2>
        
        <div className="social-links">
          <a href="https://github.com/atishay2305-hub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/ajain70/" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href="mailto:atishay2305@gmail.com">Email</a>
        </div>
        
        <div className="current-status">
          <div className="status-item">
            <span className="arrow">&gt;</span> Working as a Software Developer at Amdocs, Gerogia, USA
          </div>
          <div className="status-item">
            <span className="arrow">&gt;</span> Master's Graduate in Software Engineering from Stevens Institute of Technology, NJ 
          </div>
          <div className="status-item">
            <span className="arrow">&gt;</span> Current Pursuits: Machine Learning, Maths, Algorithms & Problem Solving
          </div>
        </div>
        
        <div className="personal-section">
          <h3 className="personal-title">Mini-Blog:</h3>
          <div className="personal-item">
            <span className="personal-label">Favorite Game:</span> Red Dead Redemption 2
          </div>
          <div className="personal-item">
            <span className="personal-label">Running:</span> Over 6 years of running, 2000+ km logged
          </div>
          <div className="personal-item">
            <span className="personal-label">Tech I Love Using:</span> Mac, Android, PlayStation, Plex, Spotify
          </div>
          <div className="personal-item">
            <span className="personal-label">Tech Stack Ethos:</span> Minimal, open, and privacy-conscious by default
          </div>
          
          <div className="updated-year">
            Updated 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
