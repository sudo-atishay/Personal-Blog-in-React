import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  const GitHubAccountUrl = 'https://github.com/atishay2305-hub';
  const LinkedInAccountUrl = 'https://www.linkedin.com/in/atishay23/';

  return (
    <div className='footer'>
      <div className='socialMedia'> 
        <a href={LinkedInAccountUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href={GitHubAccountUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; 2023 atishayjain.site</p>
    </div>
  );
}

export default Footer;
