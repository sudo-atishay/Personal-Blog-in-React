import React from 'react';
import Navbar from '../Components/Navbar';
import SummarySection from '../Components/summary';
import Timeline from '../Components/Timeline';

const Home = () => {

  const handleSectionChange = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-container dark">
      <Navbar onSectionChange={handleSectionChange} />
      <div className="main-center">
        <main className="main-content">
          {/* HERO */}
          <section id="home" className="hero-section">
            <div className="circle-image">
              <img src="/profile.png" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <h1 className="intro">Hi, I'm Atishay Jain</h1>
            <h2 className="title">Dev, Tech-Enthusiast & Learner</h2>
            <SummarySection />
            <div className="social-links">
              <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/atishay23" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://leetcode.com/u/ajain70/" target="_blank" rel="noopener noreferrer">LeetCode</a>
              <a href="mailto:atishay2305@gmail.com">Email</a>
            </div>
          </section>
          {/* TIMELINES */}
          <section className="timeline-sections">
            <div id="experience" className="timeline-block">
              <h2 className="timeline-heading">Experience</h2>
              <Timeline type="work" />
            </div>
            <div id="education" className="timeline-block">
              <h2 className="timeline-heading">Education</h2>
              <Timeline type="education" />
            </div>
          </section>
        </main>
      </div>
    {/* Footer removed as contact info is already present above */}
    </div>
  );
};

export default Home;
