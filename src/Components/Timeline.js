import React from 'react';
import '../styles/Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Software Developer',
      organization: 'Amdocs',
      location: 'Georgia, USA',
      date: 'June 2024 – Present',
      description: 'Current position developing software solutions'
    },
    {
      id: 2,
      type: 'education',
      title: 'Master of Science in Software Engineering',
      organization: 'Stevens Institute of Technology',
      location: 'Hoboken, NJ',
      date: 'September 2022 - May 2024',
      description: 'Advanced studies in software engineering principles and practices'
    },
    {
      id: 3,
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'Infogen Labs',
      location: 'California, USA',
      date: 'May 2023 – July 2023',
      description: 'Internship focused on software development'
    },
    {
      id: 4,
      type: 'work',
      title: 'Software Engineer in Test',
      organization: 'Qualitest',
      location: 'Uttar Pradesh, India',
      date: 'May 2021 – June 2022',
      description: 'Quality assurance and testing engineering'
    },
    {
      id: 5,
      type: 'education',
      title: 'Bachelor of Technology in Information Technology',
      organization: 'ABES Institute of Technology',
      location: 'Uttar Pradesh, India',
      date: 'May 2024 - July 2021',
      description: 'Undergraduate studies in Information Technology'
    },
    {
      id: 6,
      type: 'work',
      title: 'Research Intern',
      organization: 'HCL Tech',
      location: 'Noida, India',
      date: 'July 2020 – November 2020',
      description: 'Research and development internship'
    },
    {
      id: 7,
      type: 'work',
      title: 'Software Engineer Intern',
      organization: 'Minerva Solutions',
      location: 'Delhi, India',
      date: 'March 2020 – July 2020',
      description: 'Software engineering internship'
    }
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">EDUCATION & EXPERIENCE</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div key={item.id} className={`timeline-item ${item.type}`}>
            <div className="timeline-marker">
              <div className={`timeline-icon ${item.type}-icon`}></div>
            </div>
            <div className="timeline-content">
              <div className="timeline-card">
                <h2 className="timeline-title">{item.title}</h2>
                <h3 className="timeline-organization">{item.organization}</h3>
                <p className="timeline-location">{item.location}</p>
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
