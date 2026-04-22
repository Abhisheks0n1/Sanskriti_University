import React from 'react';

import heroBg from '../../assets/hero-bg.png';
import navratriImg from '../../assets/navratri.png';

const HighlightsPanel = () => {
  const newsItems = [
    {
      title: "Opening of SU-FICCI House Delhi Hall",
      date: "Jan 10, 2024",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Champions of Inter-Varsity Football Tracks",
      date: "Feb 05, 2024",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Alumni Meet: Re-connecting at SU",
      date: "Mar 15, 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <h2 className="section-title white-text">Stories & <span className="blue-text">Highlights.</span></h2>
        <div className="highlights-filter">
          <button className="active">All</button>
          <button>Academics</button>
          <button>Culture</button>
          <button>Sports</button>
          <button>Innovation</button>
        </div>

        <div className="bento-grid">
          <div className="main-highlight">
            <div className="featured-card">
              <img src={heroBg} alt="Summit" />
              <div className="featured-content">
                <span className="badge-featured">Featured</span>
                <span className="date">12 Oct, 2024</span>
                <h3>Global Leadership Summit 2024: Shaping the Future</h3>
                <p>Delegates from over 30 countries gathered to discuss sustainable development goals and the role of youth in global...</p>
                <a href="#" className="read-more">Read more →</a>
              </div>
            </div>
          </div>

          <div className="sidebar-highlights">
            <div className="news-mini-card">
              <img src={navratriImg} alt="Culture" />
              <div className="mini-content">
                 <div className="mini-header">
                   <span className="mini-category orange">CULTURE</span>
                   <span className="mini-date">15 Sep, 2024</span>
                 </div>
                 <h4>Harmony in Diversity: Annual Cultural Fest</h4>
                 <a href="#" className="small-link">Read more →</a>
              </div>
            </div>
            <div className="news-mini-card">
              <img src={heroBg} alt="Sports" />
              <div className="mini-content">
                 <div className="mini-header">
                   <span className="mini-category orange">SPORTS</span>
                   <span className="mini-date">22 Nov, 2024</span>
                 </div>
                 <h4>Championship Victory: Football Finals</h4>
                 <a href="#" className="small-link">Read more →</a>
              </div>
            </div>
            <div className="news-mini-card">
              <img src={navratriImg} alt="Innovation" />
              <div className="mini-content">
                 <div className="mini-header">
                   <span className="mini-category orange">INNOVATION</span>
                   <span className="mini-date">05 Dec, 2024</span>
                 </div>
                 <h4>Innovation Fair: Robotics & AI</h4>
                 <a href="#" className="small-link">Read more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsPanel;
