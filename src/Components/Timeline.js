import React from 'react';
import '../styles/Timeline.css';

const Timeline = ({ type }) => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Software Developer',
      organization: 'Amdocs',
      location: 'Alpharetta, GA, USA',
      date: 'June 2024 – Present',
      description: 'API automation, CI/CD, Python utilities.'
    },
    {
      id: 2,
      type: 'education',
      title: 'Master of Science in Software Engineering',
      organization: 'Stevens Institute of Technology',
      location: 'Hoboken, NJ, USA',
      date: 'May 2024',
      description: 'GPA: 3.88'
    },
    {
      id: 3,
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'Infogen Labs',
      location: 'California, USA',
      date: 'May 2023 – July 2023',
      description: 'Backend APIs, AWS Lambda, DynamoDB.'
    },
    {
      id: 4,
      type: 'work',
      title: 'Software Engineer in Test',
      organization: 'Qualitest',
      location: 'Uttar Pradesh, India',
      date: 'July 2021 – July 2022',
      description: 'UI/API automation, Agile testing.'
    },
    {
      id: 5,
      type: 'education',
      title: 'Bachelor of Technology in Information Technology',
      organization: 'ABES Institute of Technology',
      location: 'Uttar Pradesh, India',
      date: 'July 2021',
      description: ''
    },
    {
      id: 6,
      type: 'work',
      title: 'Research Intern',
      organization: 'HCL Technologies',
      location: 'Uttar Pradesh, India',
      date: 'April 2020 – July 2020',
      description: 'Software development & documentation.'
    },
    {
      id: 7,
      type: 'work',
      title: 'Web Developer Intern',
      organization: 'Minerva Technologies',
      location: 'New Delhi, India',
      date: 'February 2020 – May 2020',
      description: 'Frontend/backend web development.'
    }
  ];

  const filteredData = type ? timelineData.filter(item => item.type === type) : timelineData;

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line"></div>
        {filteredData.map((item, index) => (
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
                {item.description && <p className="timeline-description">{item.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
