import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import "../styles/Home.css";
import RectangleImage from '../assets/rectangle.jpg';
import Resume from '../Components/Resume';
import LinkIcon from '@material-ui/icons/Link'

function Home() {
  const GitHubAccountUrl = 'https://github.com/atishay2305-hub';
  const LinkedInAccountUrl = 'https://www.linkedin.com/in/atishay23/';
  const mailAccountUrl = 'mailto:ajain70@stevens.edu'; 
  const blogAccountUrl = 'https://rawdev.hashnode.dev/';
  const LinkAccountUrl = 'https://atishay23.bio.link/';

  return (
    <div className='home'>  
      <div className='about'>
        <h2>Hi, My Name is Atishay Jain</h2>
        <div className='prompt'>
          <p>A Software Developer with a passion for learning and creating.</p>
          <a href={LinkedInAccountUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={mailAccountUrl}>
            <EmailIcon />
          </a>
          <a href={GitHubAccountUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <Resume/> 
          <a href={blogAccountUrl} target="_blank" rel="noopener noreferrer">
            <RssFeedIcon />
          </a>
          <a href={LinkAccountUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>

        </div>
      </div>
      <div className='rectangle-image-container'>
        <img src={RectangleImage} alt="Rectangle Image" className="rectangle-image" />
      </div>
      <h1 className='aboutme'><center>About Me</center></h1>
      <h2><center>I am currently pursuing a Master's of Science in Software Engineering at Stevens Institute of Technology in New Jersey. My proficiency extends across several programming languages, including JavaScript, Python, Java, C, and C++. Additionally, I hold an AWS Certified Cloud Practitioner certification. My true passion lies in working as a full stack developer, and I am enthusiastic about utilizing my skills and knowledge to excel in this field.</center></h2>
      <br></br>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Web Development</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap, Yarn, TailwindCSS, NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span>C, C++, Java, JavaScript, Python</span>
          </li>
          <li className='item'>
            <h2>Tools & Technologies</h2>
            <span>Linux, Git, GitHub, Bitbucket, AWS, Postman, Docker, JIRA</span>
          </li>
          <li className='item'>
            <h2>Professional Certification</h2>
            <span>AWS Certified Cloud Practitioner</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
