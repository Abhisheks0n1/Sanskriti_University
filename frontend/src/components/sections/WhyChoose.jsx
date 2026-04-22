import React from 'react';

import studentImg from '../../assets/testimonials.png';

const WhyChoose = () => {
  const reasons = [
    { title: 'World-class Curriculum', icon: '📚' },
    { title: 'Global Market Exposure', icon: '🌍' },
    { title: 'Super Hub for Research', icon: '🔬' },
    { title: 'Excellent Placement Support', icon: '💼' }
  ];
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="section-title text-center">Why Choose <span className="blue-text">Sanskriti?</span></h2>
        <p className="section-subtitle text-center">Focus on holistic development, global exposure, and industry-aligned curriculum makes us the preferred choice.</p>

        <div className="why-choose-grid">
          <div className="reason-dark-card">
            <h3>Top Reasons To Join SU</h3>
            <ul>
              <li><span>✔</span> World-class Infrastructure</li>
              <li><span>✔</span> Highly Qualified Faculty</li>
              <li><span>✔</span> Industry Oriented Curriculum</li>
              <li><span>✔</span> Excellent Placement Record</li>
              <li><span>✔</span> Focus on Innovation & Research</li>
            </ul>
            <button className="download-btn">Download Brochure</button>
          </div>

          <div className="feature-card-white">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="International" />
            <div className="feature-card-body">
              <span className="feature-icon-circle blue">🌐</span>
              <h4>30+ International Ties</h4>
              <p>Collaborations with foreign universities for student exchange programs.</p>
            </div>
          </div>

          <div className="feature-card-white">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="Pedagogy" />
            <div className="feature-card-body">
              <span className="feature-icon-circle gold">👨‍🏫</span>
              <h4>Interactive Pedagogy</h4>
              <p>Project-based learning and case studies for practical understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
