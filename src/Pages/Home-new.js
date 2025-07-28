import React from "react";

function Home() {
  return (
    <div className="container">
      {/* Left Column - Profile */}
      <div className="profile-section">
        <div className="profile-header">
          <img 
            src="/IMG_0057.JPG" 
            alt="Atishay Jain" 
            className="profile-photo"
          />
          <h1 className="name">Atishay Jain</h1>
          <p className="title">Software Developer • 3+ Years Experience</p>
          <p className="bio">
            Currently working in the USA as a Software Developer with a passion for building efficient systems and exploring cutting-edge technologies in software engineering.
          </p>
        </div>
        
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/atishay2305-hub" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:atishay23@email.com">
            Email
          </a>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="content-section">
        {/* Skills */}
        <div className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <span className="skill-item">Python</span>
            <span className="skill-item">Algorithms</span>
            <span className="skill-item">Linux</span>
            <span className="skill-item">Amazon Web Services (AWS)</span>
            <span className="skill-item">Telecommunications</span>
            <span className="skill-item">AI-driven Development</span>
            <span className="skill-item">Software Testing</span>
            <span className="skill-item">JavaScript</span>
            <span className="skill-item">MERN Stack</span>
            <span className="skill-item">Java</span>
            <span className="skill-item">Git</span>
            <span className="skill-item">SQL</span>
            <span className="skill-item">NoSQL</span>
          </div>
        </div>

        {/* Experience */}
        <div className="section">
          <h2>Experience</h2>
          <div className="timeline-item">
            <div className="timeline-title">Software Developer</div>
            <div className="timeline-company">Currently working in USA</div>
            <div className="timeline-duration">3+ years of professional experience</div>
            <div className="timeline-description">
              Working on full-stack development projects, implementing scalable solutions, and contributing to software engineering excellence.
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <h2>Education</h2>
          <div className="timeline-item">
            <div className="timeline-title">Master's degree, Software Engineering</div>
            <div className="timeline-school">Stevens Institute of Technology</div>
            <div className="timeline-duration">Sep 2022 - May 2024</div>
            <div className="timeline-grade">Grade: 3.89</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Bachelor of Technology - BTech, Information Technology</div>
            <div className="timeline-school">APJ Abdul Kalam Technological University</div>
            <div className="timeline-duration">2017 - 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
