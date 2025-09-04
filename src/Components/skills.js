import React from 'react';

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
    <div>
      <h1>SKILLS</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill.name} - {skill.level}%</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsComponent;