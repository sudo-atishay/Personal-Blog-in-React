import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/atishay23/',
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
    url: 'https://github.com/atishay2305-hub',
  },
  // Add more social media links as needed
];

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        {socialMediaLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <p>&copy; 2024 atishayjain.site</p>
      <p className='quote'>Crafting digital symphonies from lines of code, where precision meets creativity.</p>
    </div>
  );
}

export default Footer;
