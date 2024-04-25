import React from 'react';
import '../styles/skills.css';

const SkillsComponent = () => {
  return (
      <div className="skills-container">
          <div className="skills-box">
              <h1 className="skills">SKILLS</h1>
              <ul className="skills-list">
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
  );
};

export default SkillsComponent;