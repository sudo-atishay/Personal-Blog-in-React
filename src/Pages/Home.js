
import React from "react";
import "../styles/Home.css";
import "../styles/Navbar.css";
import RectangleImage from "../assets/rectangle.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement  
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const AchievementList = [
    "Provoste Master's Scholarship Awardee, Stevens Institute Of Technology, NJ",
    "Graduate Student Assistant, Stevens Institute Of Technology, NJ",
    "IEEE Student Member and Volunteer 2023, Stevens Institute Of Technology, NJ",
  ];
  
  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/file/d/1XF2gzonqskJfP34rdHAbm3_g6g1XzQcv/view?usp=sharing"; 
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="home">
      <div className="navbar">
        <div className="links">
          <a href="#" onClick={() => scrollToSection("projects")}>
            Projects
          </a>
          <a href="#" onClick={() => scrollToSection("experience")}>
            Experience
          </a>
        </div>
      </div>
    <div className="top-level">
      <div className="rectangle-image-container">
      </div>
      <div className="summary-box">
                <p className="summary-text" style={{ textAlign: "center" }}>
                  Atishay Jain
                  <br />
                  <span className="role">Software Engineer based in New Jersey, USA</span>
                </p>
                <button className="resume-download-button" onClick={handleResumeDownload}>
          RESUME
        </button>
                
              </div>

              </div>
              
      <div className="content">
        <div className="about">
          <div className="about-content">
            <div className="summary-container">
             

              <h1 className="summary">
                <center>SUMMARY</center>

              </h1>
            

              <p className="professional-summary">
                As a Software Engineer, I have earned a Master's in Software Engineering
                from Stevens Institute of Technology. My proficiency spans various
                programming languages, including Python, Java, and JavaScript, with
                expertise in full-stack development, testing methodologies, and agile
                practices. I have excelled in impactful roles in both the USA and India,
                demonstrating my ability to develop robust backend APIs, implement
                serverless architectures using AWS technologies, and conduct
                comprehensive testing with tools such as Selenium WebDriver and CircleCI.
                My contributions include enhancing user experiences in eCommerce web
                applications, conducting influential research on IoT in Sports, and
                leading teams in the development of innovative applications. My
                commitment to excellence is underscored by academic achievements,
                certifications, and successful project outcomes, making me a valuable
                asset to any software engineering team.
                
              </p>
</div>
<div className="achievements-container">
        <h1>ACHIEVEMENTS</h1>
        <div className="achievements-box">
          <ul>
            {AchievementList.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>

            <div className="skills-container">
              <div className="skills-box">
                <h1 className="skills"><center>SKILLS</center></h1>
                <ul>
                  <li>
                    <strong>Programming:</strong> Python, JAVA, JavaScript,
                    JSON, SQL, C, C++, Bash, HTML, CSS
                  </li>
                  <li>
                    <strong>Technologies:</strong> GIT, GitHub, AWS, Linux,
                    React.js, Node.js, Express.js, Socket.IO, jQuery, Flask,
                    Docker
                  </li>
                  <li>
                    <strong>Data Tools and Databases:</strong> NumPy,
                    Scikit-Learn, Pandas, Matplotlib, MySQL, PostgreSQL,
                    MongoDB, AWS DynamoDB
                  </li>
                  <li>
                    <strong>Testing:</strong> Postman, Selenium WebDriver,
                    BeautifulSoup, CircleCI, Junit, PyTest, PyLint, Code
                    Coverage, Apache JMeter, Burp Suite
                  </li>
                  <li>
                    <strong>Certifications:</strong> AWS Certified Cloud
                    Practitioner, Datacamp: Data Manipulation in SQL
                  </li>
                  <li>
                    <strong>Functional:</strong> Agile, SCRUM, Waterfall, SDLC,
                    STLC, JIRA, Bitbucket, Confluence, Microsoft Office
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects" id="projects">
        <h1>PROJECTS</h1>
        <VerticalTimeline lineColor="#3e497a">
          {ProjectList.map((project) => (
            <VerticalTimelineElement
              key={project.id}
              className="vertical-timeline-element--project"
              date={project.date}
            >
              <h3 className="vertical-timeline-element-title">{project.name}</h3>
              <p className="vertical-timeline-element-title"><b>Skills:</b> {project.skills}</p>
              <p className="vertical-timeline-element-title">{project.Objective}</p>
              {/* Add any additional project details here */}
              <a href={project.githubRepoURL} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      <div className="experience" id="experience">
        <h1><center>EXPERIENCE</center></h1>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2017 - July 2021"
          >
            <h3 className="vertical-timeline-element-title">
              ABES Institute of Technology, Uttar Pradesh, India
            </h3>
            <p>Bachelor's of Technology in Information Technology</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2020 - July 2020"
          >
            <h3 className="vertical-timeline-element-title">
              Minerva Solutions, New Delhi, India
            </h3>
            <p>Software Engineer Intern</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2020 - November 2020"
          >
            <h3 className="vertical-timeline-element-title">
              HCL Tech, New Delhi, India
            </h3>
            <p>Research Intern</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2021 - June 2022"
          >
            <h3 className="vertical-timeline-element-title">
              Qualitest, Uttar Pradesh, India
            </h3>
            <p>Software Test Engineer</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2022 - January 2024"
          >
            <h3 className="vertical-timeline-element-title">
              Stevens Institute of Technology, New Jersey, United States of
              America
            </h3>
            <p>Master's of Science in Software Engineering</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2023 - July 2023"
          >
            <h3 className="vertical-timeline-element-title">
              Infogen Labs Inc, California, USA
            </h3>
            <p>Software Developer Intern</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Home;
