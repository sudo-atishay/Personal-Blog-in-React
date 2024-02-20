import React from "react";
import "../styles/Home.css";
import "../styles/Navbar.css";
import RectangleImage from "../assets/rectangle.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,  
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "react-vertical-timeline-component/style.min.css";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

      <div className="rectangle-image-container">
        <img src={RectangleImage} alt="Rectangle" className="rectangle-image" />
      </div>

      <div className="content">
        <div className="about">
          <div className="about-content">
            <div className="summary-container">
              <div className="summary-box">
                <p className="summary-text" style={{ textAlign: "center" }}>
                  Atishay Jain, Software Engineer
                </p>
                <h1 className="summary"><center>PROFESSIONAL SUMMARY</center></h1>

                <p>
                As a Software Engineer, I have earned a Master's in Software Engineering from Stevens Institute of Technology. My proficiency spans various programming languages, including Python, Java, and JavaScript, with expertise in full-stack development, testing methodologies, and agile practices. I have excelled in impactful roles in both the USA and India, demonstrating my ability to develop robust backend APIs, implement serverless architectures using AWS technologies, and conduct comprehensive testing with tools such as Selenium WebDriver and CircleCI. My contributions include enhancing user experiences in eCommerce web applications, conducting influential research on IoT in Sports, and leading teams in the development of innovative applications. My commitment to excellence is underscored by academic achievements, certifications, and successful project outcomes, making me a valuable asset to any software engineering team.

                </p>

                <div className="achievements-container">
  <h1>ACHIEVEMENTS</h1>
  <div className="achievements-box">
    <ul>
      <li>Provoste Master's Scholarship Awardee, Stevens Institute Of Technology, NJ</li>
      <li>Graduate Student Assistant, Stevens Institute Of Technology, NJ</li>
      <li>IEEE Student Member and Volunteer 2023, Stevens Institute Of Technology, NJ</li>
    </ul>
  </div>
</div>
              </div>
            </div>

            <div className="skills-container">
              <div className="skills-box">
                <h1 className="skills"><center>TECHNICAL SKILLS</center></h1>
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
        <h1>ACADEMIC PROJECTS</h1>
        <div className="projectList">
          {ProjectList.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              githubRepoURL={project.githubRepoURL} // Pass the GitHub repository URL as a prop
            />
          ))}
        </div>
      </div>

        <div className="experience" id="experience">
        <h1><center>EXPERIENCE</center></h1>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2017 - July 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
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
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
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
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
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
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
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
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
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
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
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
