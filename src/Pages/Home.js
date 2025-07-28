import React from "react";

function Home() {
  return (
    <div className="container">
      {/* Top Half - Profile Hero Section */}
      <div className="hero-section">
        <div className="profile-section">
          <img 
            src="/IMG_0057.JPG" 
            alt="Atishay Jain" 
            className="profile-photo"
          />
          <h1 className="name">Atishay Jain</h1>
          <p className="bio">Embarking on my journey to learn Math, Machine Learning, and Algorithms.</p>
          
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/atishay2305-hub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://leetcode.com/u/ajain70/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
            <a href="mailto:atishay23@email.com">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Half - Content */}
      <div className="content-section">
        {/* Pursuits */}
        <div className="section">
          <h2>Pursuits</h2>
          <div className="pursuits-grid">
            <div className="pursuit-item">
              <span className="pursuit-emoji">💻</span>
              <span className="pursuit-name">Programming</span>
              <div className="pursuit-bar">
                <div className="pursuit-fill" style={{width: '90%'}}></div>
              </div>
            </div>
            <div className="pursuit-item">
              <span className="pursuit-emoji">🏃‍♂️</span>
              <span className="pursuit-name">Running</span>
              <div className="pursuit-bar">
                <div className="pursuit-fill" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="pursuit-item">
              <span className="pursuit-emoji">📚</span>
              <span className="pursuit-name">Learning</span>
              <div className="pursuit-bar">
                <div className="pursuit-fill" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="pursuit-item">
              <span className="pursuit-emoji">🎮</span>
              <span className="pursuit-name">Gaming</span>
              <div className="pursuit-bar">
                <div className="pursuit-fill" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="section">
          <h2>Experience</h2>
          <div className="timeline-item">
            <div className="timeline-title">Software Developer</div>
            <div className="timeline-company">Amdocs</div>
            <div className="timeline-duration">Jun 2024 – Present</div>
            <div className="timeline-location">Alpharetta, Georgia, United States</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Graduate Student Assistant</div>
            <div className="timeline-company">Stevens Institute of Technology</div>
            <div className="timeline-duration">Aug 2023 – Dec 2023</div>
            <div className="timeline-location">Hoboken, New Jersey, United States</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Software Developer Intern</div>
            <div className="timeline-company">Infogen Labs Inc.</div>
            <div className="timeline-duration">May 2023 – Jul 2023</div>
            <div className="timeline-location">California, United States</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Software Engineer in Test</div>
            <div className="timeline-company">Qualitest</div>
            <div className="timeline-duration">May 2021 – Jun 2022</div>
            <div className="timeline-location">Noida, Uttar Pradesh, India</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Intern</div>
            <div className="timeline-company">HCLTech</div>
            <div className="timeline-duration">Jul 2020 – Nov 2020</div>
            <div className="timeline-location">Noida, Uttar Pradesh, India</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-title">Software Engineer Intern</div>
            <div className="timeline-company">Minerva Technology Solutions Limited</div>
            <div className="timeline-duration">Jun 2020 – Jul 2020</div>
            <div className="timeline-location">Delhi, India</div>
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
