import React from 'react';
import AttachFileIcon from "@material-ui/icons/AttachFile";

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1dS4JrrrUysd3_IkJsi5Yoew2duTTsUPH/view?usp=drive_link'; // Replace with the actual URL or path to your resume file

  return (
    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
      <AttachFileIcon/>
    </a>
  );
};

export default Resume;
