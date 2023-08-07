import React from 'react';
import AttachFileIcon from "@material-ui/icons/AttachFile";

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1g219bPOEMjJ7FSq3nCYdG6VPZHQ5ycOT/view?usp=sharing';

  return (
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
      <AttachFileIcon/>
    </a>
  );
};

export default Resume;
