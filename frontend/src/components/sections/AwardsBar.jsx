import React from 'react';


const AwardsBar = () => {
  const awards = [
    {
      title: "Rank 8th",
      subtitle: "Top Higher Ed institute in India",
      bgColor: "orange",
      icon: "🏆"
    },
    {
      title: "Rank 1st",
      subtitle: "Emerging Management Institute in India",
      bgColor: "blue",
      icon: "🥇"
    },
    {
      title: "AAA+",
      subtitle: "Best B-School Rating 2023-2024",
      bgColor: "purple",
      icon: "🎖️"
    },
    {
      title: "Rank 3rd",
      subtitle: "Among Pvt Universities in UP",
      bgColor: "pink",
      icon: "⭐"
    }
  ];

  return (
    <div className="awards-bar-container">
      <div className="trusted-by">
        <span className="trusted-text">Trusted by industry leaders:</span>
        <div className="company-logos">
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Tesla</span>
          <span>NASA</span>
        </div>
      </div>
      <div className="awards-grid">
        {awards.map((award, i) => (
          <div key={i} className={`award-card ${award.bgColor}`}>
            <div className="award-icon-box">{award.icon}</div>
            <div className="award-content">
              <h4>{award.title}</h4>
              <p className="award-subtitle">{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsBar;
