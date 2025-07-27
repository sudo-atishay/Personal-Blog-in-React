import React from 'react';
import '../styles/ExperienceComponent.css';

const ExperienceComponent = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">EXPERIENCE</h1>
      <div className="experience-item">
        <h2 className="experience-title">Software Developer</h2>
        <p className="experience-details">
          Amdocs | Georgia, USA | June 2024 – Present
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Software Developer Intern</h2>
        <p className="experience-details">
          Infogen Labs | California, USA | May 2023 – July 2023
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Software Engineer in Test</h2>
        <p className="experience-details">
          Qualitest | Uttar Pradesh, India | May 2021 – June 2022
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Software Engineer Intern</h2>
        <p className="experience-details">
          Minerva Solutions | Delhi, India | March 2020 – July 2020
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Research Intern</h2>
        <p className="experience-details">
          HCL Tech | Noida, India | July 2020 – November 2020
        </p>
      </div>
    </div>
  );
};

export default ExperienceComponent;
