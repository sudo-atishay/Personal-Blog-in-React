import React from "react";
import "../styles/Home.css";
import SkillsComponent from "../Components/skills";
import Timeline from "../Components/Timeline";
import "react-vertical-timeline-component/style.min.css";
import rectangleImage from '../assets/rectangle.jpeg';

function Home() {
  return (
    <div className="home slate-theme">
      <div className="top-level">
        <div className="profile-section">
          <img src={rectangleImage} alt="Atishay's profile" className="circle-image" />
          <p className="name">Atishay Jain</p>
          <p className="impact-statement">
            Currently working as a Software Developer in USA 🇺🇸 / on a path to learn Quant/Math/ML 📊🔢🤖
          </p>
          <div className="social-links">
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
      </div>
      <hr className="divider" />
      <div className="content">
        <div className="about">
          <div className="about-content">
            <SkillsComponent />
            <hr className="divider" />
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

