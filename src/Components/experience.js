import React from 'react';
import '../styles/ExperienceComponent.css';

const ExperienceComponent = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">EXPERIENCE</h1>
      <div className="experience-item">
        <h2 className="experience-title">Software Developer Intern</h2>
        <p className="experience-details">
          Infogen Labs | California, USA | May 2023 – July 2023
        </p>
        <p className="experience-description">
          Developed robust backend APIs for a live sports streaming application with Python and AWS Lambda Powertools. Employed AWS Lambda for serverless architecture, incorporating AWS IoT Core for hardware connectivity, AWS SNS for efficient push notifications, and enhanced Video output storage through S3, and AWS DynamoDB for User Data Storage. Pioneered unit tests and created thorough test plans to validate backend API reliability and functionality. Collaborated with clients, product managers, and senior developers to illustrate system architectural design models. Incorporated Bitbucket source code management and Jira Issue Tracking to ensure prompt client requirement delivery.
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Software Engineer in Test</h2>
        <p className="experience-details">
          Qualitest | Uttar Pradesh, India | May 2021 – June 2022
        </p>
        <p className="experience-description">
          Performed automated using Selenium WebDriver and manual testing on client web and mobile applications, engaging with cross-functional teams, and developing comprehensive test plans, test cases, and test scripts. Implemented CircleCI and GitHub Actions for test-focused continuous integration, improving code quality and reliability. Executed static code analysis by employing PyLint library, resulting in an impressive 80% boost in overall Code Coverage.
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Software Engineer Intern</h2>
        <p className="experience-details">
          Minerva Solutions | Delhi, India | March 2020 – July 2020
        </p>
        <p className="experience-description">
          Developed essential features (customer review retrieval, price updates, user authentication) for an eCommerce web app using Node.js, Express.js, MySQL, HTML, CSS, and Bootstrap, elevating the user experience for 1000+ customers. Incorporated payment processing and optimized data storage in MySQL to manage and store user and product details.
        </p>
      </div>
      <div className="experience-item">
        <h2 className="experience-title">Research Intern</h2>
        <p className="experience-details">
          HCL Tech | Noida, India | July 2020 – November 2020
        </p>
        <p className="experience-description">
          Conducted comprehensive research on 200+ diverse business data sets for an IoT in Sports Research Project, employing Python and Pandas, Matplotlib and Bluetooth M2M Mesh Technology to yield a 20% enhancement in data accuracy. Translated findings into a functional prototype, culminating in a Top-10 rank among 70 other Foundational Club Projects.
        </p>
      </div>
    </div>
  );
};

export default ExperienceComponent;
