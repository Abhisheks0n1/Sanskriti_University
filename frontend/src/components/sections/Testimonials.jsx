import React from 'react';
import studentImg from '../../assets/testimonials.png';

const Testimonials = () => {
  const reviews = [
    {
      name: "Aman Patel",
      role: "B.Tech CSE student",
      text: "The practical exposure here is unparalleled. The labs are open 24/7 and the faculty truly cares about our growth.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "MBA Graduate",
      text: "Sanskriti University gave me the confidence to lead. The networking and placement support is amazing.",
      rating: 5
    },
    {
      name: "Rohan Gupta",
      role: "M.Sc Biotech student",
      text: "Every lab is a place for discovery. The inter-disciplinary approach helped me connect my research with real-world problems.",
      rating: 5
    }
  ];
  return (
    <section className="testimonials">
      <div className="test-container">
        <div className="test-header">
          <span className="badge-small gold">TESTIMONIALS</span>
          <h2 className="section-title white-text">Stories of <span className="gold-text">Transformation</span></h2>
          <h5 className="white-text-opacity">Hear from the people who make Sanskriti University a vibrant community of learners and achievers.</h5>
        </div>

        <div className="test-filters">
          <button className="active">Students</button>
          <button>Parents</button>
          <button>Alumni</button>
        </div>

        <div className="test-grid">
          <div className="test-card-new">
            <div className="test-card-header">
              <img src={studentImg} alt="Aarav" />
              <span className="quote-mark">❝</span>
            </div>
            <div className="test-stars">⭐⭐⭐⭐⭐</div>
            <p>"The practical exposure here is unmatched. The labs are state-of-the-art and the faculty truly cares about our growth."</p>
            <div className="test-user-info">
              <h4>Aarav Patel</h4>
              <p>B.Tech CS, 3rd Year</p>
            </div>
          </div>

          <div className="test-card-new">
            <div className="test-card-header">
              <img src={studentImg} alt="Priya" />
              <span className="quote-mark">❝</span>
            </div>
            <div className="test-stars">⭐⭐⭐⭐⭐</div>
            <p>"Sanskriti University gave me the confidence to lead. The campus life is vibrant and full of opportunities."</p>
            <div className="test-user-info">
              <h4>Priya Sharma</h4>
              <p>MBA, Final Year</p>
            </div>
          </div>

          <div className="test-card-new">
            <div className="test-card-header">
              <img src={studentImg} alt="Rohan" />
              <span className="quote-mark">❝</span>
            </div>
            <div className="test-stars">⭐⭐⭐⭐</div>
            <p>"Amazing infrastructure and supportive environment. I've made friends for life and learned so much."</p>
            <div className="test-user-info">
              <h4>Rohan Gupta</h4>
              <p>B.Sc Biotechnology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
