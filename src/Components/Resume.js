import React from 'react';
import AttachFileIcon from "@material-ui/icons/AttachFile";

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1IOs1JpFGORyQStNa7712F2hBylwUbPx4/view?usp=drive_link';

  return (
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
      <AttachFileIcon/>
    </a>
  );
};

export default Resume;
