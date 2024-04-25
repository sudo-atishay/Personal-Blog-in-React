import React from "react";
import "../styles/Home.css";
import SkillsComponent from "../Components/skills";
import AchievementsComponent from "../Components/achievements";
import ImageGallery from "../Components/ImageGallery";
import Gallery from "../Components/Gallery";
import ExperienceComponent from '../Components/experience';
import EducationComponent from "../Components/education";
import SummarySection from "../Components/summary"; // Changed import to match component name
import "react-vertical-timeline-component/style.min.css";
import Footer from '../Components/Footer'
import rectangleImage from '../assets/rectangle.jpeg';
import profile2 from '../assets/IMG_1707.png'
import profile5 from '../assets/profile5.jpg'
import profile3 from '../assets/profile3.JPG';
import profile4 from '../assets/profile4.jpg';



function Home() {
  const handleResumeDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1XF2gzonqskJfP34rdHAbm3_g6g1XzQcv/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  // Define images array
  const images = [profile3,profile4,profile5, profile2];


  return (
    <div className="home">
      <div className="top-level">
        <div className="profile-section">
          <img src={rectangleImage} alt="Rectangle Image" className="circle-image" />
          <p className="name">Atishay Jain</p>
          <div className="social-icons">
            <a href="https://twitter.com/atishay23" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/atishay23/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/atishay2305-hub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:atishay23@email.com">
              <i className="far fa-envelope"></i>
            </a>
            <button className="resume-download-button" onClick={handleResumeDownload}>
              RESUME
            </button>
          </div>
        </div>
        <div className="summary-box">
          <p className="summary-text" style={{ textAlign: "center" }}>
            Software Engineer based in New Jersey, USA
          </p>
        </div>
      </div>
      <hr className="divider" />
      <div className="content">
        <div className="about">
          <div className="about-content">
            <SummarySection />
            <hr className="divider" />
            <AchievementsComponent />
            <hr className="divider" />
            <SkillsComponent />
            <hr className="divider" />
            <ImageGallery />
            <hr className="divider" />
            <ExperienceComponent/>
            <hr className="divider" />
            <EducationComponent/>
            <hr className="divider" />
            {/* Pass images props to Gallery component */}
            <Gallery images={images} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
