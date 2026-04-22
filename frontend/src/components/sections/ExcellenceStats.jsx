import React from 'react';


const ExcellenceStats = () => {
  const stats = [
    { value: '95%', label: 'Placement Rate', subLabel: 'Career success at leading MNCs', color: '#007AFF' },
    { value: '54L', label: 'Highest Package', subLabel: 'Top recruitment offers globally', color: '#FFB800' },
    { value: '2500+', label: 'Research Papers', subLabel: 'Scientific contributions internationally', color: '#9C27B0' },
    { value: '300+', label: 'Patent Filings', subLabel: 'Innovations protected worldwide', color: '#E91E63' }
  ];

  return (
    <section className="excellence-section">
      <div className="excellence-container">
        <div className="updates-and-stats-grid">
          <div className="updates-timeline">
            <div className="updates-header">
              <span className="update-icon">🔔</span>
              <h3>Latest Updates</h3>
              <p>Stay informed with campus news</p>
            </div>
            
            <div className="timeline-items">
              <div className="timeline-item">
                <span className="dot red"></span>
                <div className="timeline-content">
                  <span className="item-date">DEC 18, 2024 <span className="new-tag">NEW</span></span>
                  <h4>Ph.D. Entrance Exam 2025 Applications Open</h4>
                  <p>Admissions</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot orange"></span>
                <div className="timeline-content">
                  <span className="item-date">DEC 12, 2024 <span className="new-tag">NEW</span></span>
                  <h4>Semester End Examinations Schedule Released</h4>
                  <p>Exam</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot blue"></span>
                <div className="timeline-content">
                  <span className="item-date">DEC 10, 2024</span>
                  <h4>Winter Break Notification for All Departments</h4>
                  <p>Notice</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot green"></span>
                <div className="timeline-content">
                  <span className="item-date">DEC 08, 2024</span>
                  <h4>Guest Lecture by CEO of TechMahindra - Reg Open</h4>
                  <p>Event</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot blue"></span>
                <div className="timeline-content">
                  <span className="item-date">DEC 05, 2024</span>
                  <h4>Library Hours Extended for Exam Preparation</h4>
                  <p>Facility</p>
                </div>
              </div>
            </div>
          </div>

          <div className="excellence-stats-box">
            <div className="stats-header">
              <span className="badge-small">WHY CHOOSE US</span>
              <h2>Excellence in <span className="blue-text">Every Number</span></h2>
              <p>Our commitment to quality education reflects in our achievements. Join a community that strives for greatness.</p>
            </div>

            <div className="stats-grid-inner">
              <div className="stat-box blue-light">
                <h3>95%</h3>
                <p>Placement Rate</p>
              </div>
              <div className="stat-box gold-light">
                <h3>54L</h3>
                <p>Highest Package</p>
              </div>
              <div className="stat-box purple-light">
                <h3>2500+</h3>
                <p>Research Papers</p>
              </div>
              <div className="stat-box green-light">
                <h3>300+</h3>
                <p>Recruiters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceStats;
