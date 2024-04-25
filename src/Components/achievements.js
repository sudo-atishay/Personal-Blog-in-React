import React from 'react';
import '../styles/achievements.css'

const AchievementList = [
    "Provoste Master's Scholarship Awardee, Stevens Institute Of Technology, NJ",
    "Graduate Student Assistant, Stevens Institute Of Technology, NJ",
    "IEEE Student Member and Volunteer 2023, Stevens Institute Of Technology, NJ",
];

const AchievementsComponent = () => {
    return (
        <div className="achievements-container">
            <h1 className="achievements-heading">ACHIEVEMENTS</h1>
            <div className="achievements-box">
                <ul className="achievement-list">
                    {AchievementList.map((achievement, index) => (
                        <li key={index} className="achievement-item">{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AchievementsComponent;
