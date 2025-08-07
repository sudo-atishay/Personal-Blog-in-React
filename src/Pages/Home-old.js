import React from "react";

function Home() {
  return (
    <div className="container">
      {/* Top Section - Photo and Summary */}
      <div className="top-section">
        <div className="photo-widget">
          <img 
            src="/IMG_0057.JPG" 
            alt="Atishay Jain" 
            className="profile-photo"
          />
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/sudo-atishay" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:atishay23@email.com">
              Email
            </a>
          </div>
        </div>
        
        <div className="summary-widget">
          <h1>Atishay Jain</h1>
          <p className="title">Software Developer | 3+ Years Experience</p>
          <p className="description">
            Currently working in the USA as a Software Developer with 3+ years of professional experience. 
            Passionate about building efficient systems and exploring cutting-edge technologies in software engineering.
          </p>
        </div>
      </div>

      {/* Bottom Section - Skills, Experience, Education */}
      <div className="bottom-section">
        <div className="skills-widget">
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

        <div className="experience-widget">
          <h2>Experience</h2>
          <div className="experience-item">
            <div className="experience-title">Software Developer</div>
            <div className="experience-company">Currently working in USA</div>
            <div className="experience-duration">3+ years of work experience</div>
          </div>
        </div>

        <div className="education-widget">
          <h2>Education</h2>
          <div className="education-item">
            <div className="education-degree">Master's degree, Software Engineering</div>
            <div className="education-school">Stevens Institute of Technology</div>
            <div className="education-duration">Sep 2022 - May 2024</div>
            <div className="education-grade">Grade: 3.89</div>
          </div>
          <div className="education-item">
            <div className="education-degree">Bachelor of Technology - BTech, Information Technology</div>
            <div className="education-school">APJ Abdul Kalam Technological University</div>
            <div className="education-duration">2017 - 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

