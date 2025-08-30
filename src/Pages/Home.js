import React from 'react';

const Home = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <h1 className="intro">Hi, I'm Atishay Jain</h1>
        <h2 className="title">Dev, Tech-Enthusiast & Learner</h2>
        
        <div className="social-links">
          <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/ajain70/" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href="mailto:atishay2305@gmail.com">Email</a>
        </div>
        
        <div className="current-status">
          <div className="status-item">
            <span className="arrow">&gt;</span> Software Developer based in USA, Master's Graduate in Software Engineering
          </div>
          <div className="status-item">
            <span className="arrow">&gt;</span> <span className="label">Current Journey:</span> Advancing skills in AI, Algorithms & Problem Solving
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
