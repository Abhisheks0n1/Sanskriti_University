import React from 'react';
import chancellorImg from '../../assets/chancellor.png';

const ChancellorDesk = () => {
  return (
    <section className="chancellor-section">
      <div className="chancellor-container">
        <div className="chancellor-news-grid">
          <div className="chancellor-column">
            <h3 className="sub-title">Chancellor's Desk</h3>
            <div className="chancellor-white-card">
              <div className="chancellor-header-info">
                <img src={chancellorImg} alt="Dr. Sachin Gupta" className="chancellor-thumb" />
                <div className="chancellor-name-box">
                  <h4>Dr. Sachin Gupta</h4>
                  <p>Chancellor</p>
                </div>
                <span className="quote-icon">❝</span>
              </div>
              <p className="chancellor-quote-text">
                "Our mission is to create an environment that fosters intellectual curiosity and encourages students to challenge the status quo. We are committed to excellence in education and research."
              </p>
            </div>
          </div>

          <div className="news-column">
            <h3 className="sub-title">In The News</h3>
            <div className="news-grid-three">
              <div className="news-card-white">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="News 1" />
                <div className="news-card-body">
                  <span className="news-source">THE TIMES OF INDIA</span>
                  <h5>Sanskriti University Ranked Top in Innovation</h5>
                  <p className="news-date">Oct 12, 2024</p>
                </div>
              </div>
              <div className="news-card-white">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="News 2" />
                <div className="news-card-body">
                  <span className="news-source">HINDUSTAN TIMES</span>
                  <h5>New Research Center Inaugurated by Education Minister</h5>
                  <p className="news-date">Nov 30, 2024</p>
                </div>
              </div>
              <div className="news-card-white">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" alt="News 3" />
                <div className="news-card-body">
                  <span className="news-source">EDUCATION WORLD</span>
                  <h5>University Wins National Excellence Award 2024</h5>
                  <p className="news-date">Dec 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorDesk;
