import React from 'react';
import '../styles/skills.css';

const SkillsComponent = () => {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Algorithms', level: 90 },
    { name: 'Linux', level: 85 },
    { name: 'AWS', level: 80 },
    { name: 'Telecommunications', level: 75 },
    { name: 'AI-driven Development', level: 85 },
    { name: 'Software Testing', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'MERN Stack', level: 87 },
    { name: 'Java', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'SQL', level: 88 },
    { name: 'NoSQL', level: 82 }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-heading">SKILLS</h1>
      <div className="skills-graph">
        <div className="skills-line">
          {skills.map((skill, index) => (
            <div key={index} className="skill-node" style={{ '--skill-level': skill.level }}>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <div className="skill-label">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;