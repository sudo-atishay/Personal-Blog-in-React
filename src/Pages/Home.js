import React from "react";
import "../styles/Home.css";
import RectangleImage from "../assets/rectangle.jpeg";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        {/* Your existing navigation bar content goes here */}
      </nav>

      <div className="content">
        <div className="about">
          <div className="about-content">
            <div className="summary-container">
              <div className="summary-box">
                <h1 className="summary">Summary</h1>
                <p className="summary-text" style={{ textAlign: "center" }}>
                  Atishay Jain, Software Engineer
                </p>
                <p>
Dedicatedly pursuing a Master's of Science in Software Engineering at Stevens Institute of Technology in New Jersey, fueled by a profound passion for technology. Keenly interested in a diverse range of technologies, committed to crafting end-to-end software applications that exhibit efficiency and scalability.
                </p>
              </div>
            </div>

            <div className="rectangle-image-container">
              <img
                src={RectangleImage}
                alt="Rectangle"
                className="rectangle-image"
              />
            </div>

            <div className="skills-container">
              <div className="skills-box">
                <h1 className="skills">Skills</h1>
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
    </div>
  );
}

export default Home;
