import React, { useState } from 'react';
import heroBg from '../../assets/hero-bg.png';


const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    state: ''
  });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Submitting...', type: '' });

    try {
      const response = await fetch('http://localhost:5000/api/v1/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, message: 'Success! We will contact you soon.', type: 'success' });
        setFormData({ fullName: '', email: '', phone: '', course: '', state: '' });
      } else {
        setStatus({ loading: false, message: data.message || 'Submission failed.', type: 'error' });
      }
    } catch (error) {
      setStatus({ loading: false, message: 'Server error. Please try again later.', type: 'error' });
    }
  };

  return (
    <section className="hero" style={{ 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting <span className="blue-text">Visionaries</span>
          </h1>
          <p className="hero-description">
            An ecosystem of excellence where cutting-edge research meets creative freedom. Redefine what's possible with our interdisciplinary approach.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">PATENTS FILED</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">PLACEMENTS RATE</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">#1</span>
              <span className="stat-label">IN INNOVATION</span>
            </div>
          </div>

          <button className="view-programs-btn">View Programs</button>
        </div>

          <div className="inquiry-form glass-effect">
            <h6 className="fast-track">⚡ Fast Track</h6>
            <h3>Admissions Open 2025</h3>
            <p>Take the first step towards your career</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Name *" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Mobile *" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="state" 
                    placeholder="State *" 
                    value={formData.state || ''}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <select 
                  name="course" 
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Program Interest *</option>
                  <option value="btech">B.Tech - Computer Science</option>
                  <option value="mba">MBA - Business Tech</option>
                  <option value="research">Research - AI & Robotics</option>
                  <option value="law">Law & Legal Studies</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="submit-btn highlight-btn" 
                disabled={status.loading}
              >
                {status.loading ? 'Processing...' : 'Register Now'}
              </button>
              
              {status.message && (
                <p className={`form-status ${status.type}`}>
                  {status.message}
                </p>
              )}
              <h6>By registering you agree to receive communication from Sanskriti University</h6>
            </form>
          </div>
      </div>
    </section>
  );
};

export default Hero;
