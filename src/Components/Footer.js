import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import '../styles/Footer.css';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';

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
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className='footer'>
      {/* Connect with Me and Social Media Links */}
      <div className='social-media'>
        <p>Connect</p>
        <div className='social-links'>
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target='_blank' rel='noopener noreferrer'>
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Gif Images */}
      <div className='gif-container'>
        <img src={gif1} alt='Gif 1' loading="lazy"/>
        <img src={gif2} alt='Gif 2' loading="lazy"/>
        <img src={gif3} alt='Gif 3' loading="lazy"/>
      </div>

      {/* Scroll-to-top button */}
      {showScroll && (
        <div className='scroll-to-top' onClick={scrollTop}>
          <KeyboardArrowUpIcon />
        </div>
      )}
    </div>
  );
}

export default Footer;
