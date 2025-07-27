import React from 'react';
import '../styles/EducationComponent.css';
const EducationComponent = () => {
  return (
    <div className="education-container">
      <h1 className="education-heading">EDUCATION</h1>
      <div className="education-item">
        <div className="education-details">
          <h2 className="education-title">Master of Science in Software Engineering</h2>
          <p>Stevens Institute of Technology | Hoboken, NJ</p>
          <p>September 2022 - May 2024</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-details">
          <h2 className="education-title">Bachelor of Technology in Information Technology</h2>
          <p>ABES Institute of Technology | Uttar Pradesh, India</p>
          <p>May 2024 - July 2021</p>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
