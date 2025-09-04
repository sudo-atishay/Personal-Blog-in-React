import React from 'react';

const Navbar = ({ onSectionChange }) => {
  return (
    <nav>
      <button onClick={() => onSectionChange('home')}>Home</button>
      <button onClick={() => onSectionChange('education')}>Education</button>
      <button onClick={() => onSectionChange('experience')}>Experience</button>
    </nav>
  );
};

export default Navbar;
