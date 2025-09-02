
import React from "react";
import "./main.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* If favicon is present, remove AJ logo */}
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <h1 className="hero-title">HEY, I'M <span className="highlight">ATISHAY JAIN</span></h1>
        <p className="hero-summary">
            Dev, Learner &amp; Tech-Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="about-left">
            <h3>Know About Me!</h3>
            <p>
              Greetings! I'm Atishay Jain, a <b>dedicated software engineer</b> with 3+ years of experience and a master's in software engineering. My expertise spans backend, automation, CI/CD, and developer experience. I thrive at the intersection of reliability and quality, designing APIs, hardening data workflows, and embedding automation that raises release confidence.
            <p>
              Greetings! I'm Atishay Jain, a dedicated Software Engineer with 3+ years of experience and a Master's in Software Engineering. My expertise spans Backend Development, Automation, Linux Systems, and DevOps Practices. I thrive at the intersection of Reliability and Quality—designing APIs, hardening Data Workflows, and embedding Automation Pipelines that boost Developer Productivity and Release Confidence.

              With a strong foundation in Linux and Cloud-Native Tools, I enjoy building Resilient Systems, optimizing Infrastructure, and enabling teams through streamlined DevOps Workflows. From debugging Low-Level Issues to scaling Backend Services, I approach problems with Curiosity and Precision.

              I value Collaboration and Continuous Improvement, whether it’s mentoring peers, refining Deployment Strategies, or enhancing Observability. Let’s connect and build Systems that make an impact—Reliable, Efficient, and Future-Ready.
            </p>
            </p>
          </div>
          <div className="about-right">
            <h3>My Skills</h3>
            <div className="skills-list">
              <span>Software Development</span>
              <span>Cloud Computing</span>
              <span>QA Automation</span>
              <span>Testing</span>
              <span>Agile</span>
              <span>Programming</span>
            </div>
          </div>
        </div>
        <a href="#contact" className="contact-btn">Contact</a>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <ul className="experience-list">
          <li><strong>Software Developer</strong>, Amdocs, Alpharetta, GA, USA <span className="date">(June 2024 – August 2025)</span></li>
          <li><strong>Software Developer Intern</strong>, Infogen Labs, California, USA <span className="date">(May 2023 – July 2023)</span></li>
          <li><strong>Software Engineer in Test</strong>, Qualitest, Uttar Pradesh, India <span className="date">(July 2021 – July 2022)</span></li>
          <li><strong>Research Intern</strong>, HCL Technologies, Uttar Pradesh, India <span className="date">(April 2020 – July 2020)</span></li>
          <li><strong>Web Developer Intern</strong>, Minerva Technologies, New Delhi, India <span className="date">(Feb 2020 – May 2020)</span></li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2 className="section-title">EDUCATION</h2>
        <ul className="education-list">
          <li><strong>Master's degree, Software Engineering</strong>, Stevens Institute of Technology <span className="date">(Sep 2022 - May 2024)</span></li>
          <li><strong>Bachelor of Technology, Information Technology</strong>, APJ Abdul Kalam Technological University <span className="date">(2017 - 2021)</span></li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">CONTACT</h2>
        <div className="contact-icons-row">
          <a className="contact-icon" href="mailto:atishay2305@gmail.com" title="Email" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a className="contact-icon" href="https://www.linkedin.com/in/atishay23/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="contact-icon" href="https://github.com/sudo-atishay" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
    {/* Hyperlinks removed as icons are already present above */}
      </section>

  {/* Footer removed as requested */}
    </div>
  );
}

export default App;
