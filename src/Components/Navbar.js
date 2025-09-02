import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSectionChange }) => {
  return (
    <nav className="navbar dark">
  {/* ...existing code... */}
      <div className="navbar-center">
        <button className="nav-btn" onClick={() => onSectionChange('home')}>Home</button>
        <button className="nav-btn" onClick={() => onSectionChange('education')}>Education</button>
        <button className="nav-btn" onClick={() => onSectionChange('experience')}>Experience</button>
      </div>
    </nav>
  );
};

export default Navbar;
