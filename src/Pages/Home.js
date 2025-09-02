

import React, { useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import SummarySection from '../Components/summary';
import Timeline from '../Components/Timeline';

const Home = () => {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSectionChange = (section) => {
    if (section === 'education' && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'experience' && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`app-container${darkMode ? ' dark' : ''}`}>
      <Navbar onSectionChange={handleSectionChange} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="main-content" style={{ marginTop: 80 }}>
        {/* Hero Section */}
  <section className="hero-section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 40, width: '100%' }}>
          <h1 className="intro">Hi, I'm Atishay Jain</h1>
          <h2 className="title">Dev, Tech-Enthusiast & Learner</h2>
          <SummarySection />
          <div className="social-links" style={{ marginTop: 18 }}>
            <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/ajain70/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            <a href="mailto:atishay2305@gmail.com">Email</a>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-sections" style={{ width: '100%', marginTop: 60 }}>
          <div ref={educationRef} style={{ scrollMarginTop: 100 }}>
            <h2 className="timeline-heading" style={{ marginTop: 0, marginBottom: 40, textAlign: 'center' }}>Education</h2>
            <Timeline type="education" />
          </div>
          <div ref={experienceRef} style={{ scrollMarginTop: 100, marginTop: 80 }}>
            <h2 className="timeline-heading" style={{ marginTop: 0, marginBottom: 40, textAlign: 'center' }}>Experience</h2>
            <Timeline type="work" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
