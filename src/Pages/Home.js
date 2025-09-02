import React, { useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import SummarySection from '../Components/summary';
import Timeline from '../Components/Timeline';

const Home = () => {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSectionChange = (section) => {
    // prefer scrolling to element ids so navbar can target any section
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`app-container${darkMode ? ' dark' : ''}`}>
      <Navbar onSectionChange={handleSectionChange} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <main style={{ maxWidth: 900, width: '100%', padding: '20px 32px', boxSizing: 'border-box' }}>

          {/* HERO */}
          <section id="home" className="hero-section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 40, width: '100%' }}>
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

          {/* TIMELINES */}
          <section className="timeline-sections" style={{ width: '100%', marginTop: 60 }}>
            <div id="education" ref={educationRef} style={{ scrollMarginTop: 100 }}>
              <h2 className="timeline-heading" style={{ marginTop: 0, marginBottom: 40, textAlign: 'center' }}>Education</h2>
              <Timeline type="education" />
            </div>

            <div id="experience" ref={experienceRef} style={{ scrollMarginTop: 100, marginTop: 80 }}>
              <h2 className="timeline-heading" style={{ marginTop: 0, marginBottom: 40, textAlign: 'center' }}>Experience</h2>
              <Timeline type="work" />
            </div>
          </section>

          <section id="contact" style={{ marginTop: 80, paddingBottom: 80 }}>
            <h2 className="timeline-heading" style={{ textAlign: 'center', marginBottom: 24 }}>Contact</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ maxWidth: 640, background: 'rgba(30,34,44,0.85)', padding: 24, borderRadius: 12 }}>
                <p style={{ color: '#e0e0e0' }}>Email: <a href="mailto:atishay2305@gmail.com">atishay2305@gmail.com</a></p>
                <p style={{ color: '#e0e0e0' }}>LinkedIn: <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer">/in/atishay23</a></p>
                <p style={{ color: '#e0e0e0' }}>GitHub: <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer">sudo-atishay</a></p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default Home;
