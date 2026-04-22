import React from 'react';
import navratriImg from '../../assets/navratri.png';
import lifesuImg from '../../assets/navratri.png';

const LifeAtSU = () => {
  const events = [
    { title: 'Navratri Garba Night', category: 'Cultural', img: lifesuImg },
    { title: 'Euphoria 2024', category: 'Freshers', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
    { title: 'Dance of Vigor', category: 'Fest', img: 'https://images.unsplash.com/photo-1514525253361-bee010d21820?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section className="life-su-section">
      <div className="life-su-container">
        <h2 className="section-title">Life @ <span className="blue-text">SU.</span></h2>

        <div className="life-grid">
           <div className="life-card">
              <div className="img-wrapper">
                 <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400" alt="Annual Sports Meet" />
                 <div className="video-overlay">
                    <span className="play-icon">▶</span>
                    <h4>Annual Sports Meet</h4>
                 </div>
              </div>
           </div>
           <div className="life-card">
              <div className="img-wrapper">
                 <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" alt="Convocation Ceremony" />
                 <div className="video-overlay">
                    <span className="play-icon">▶</span>
                    <h4>Convocation Ceremony</h4>
                 </div>
              </div>
           </div>
           <div className="life-card">
              <div className="img-wrapper">
                 <img src={navratriImg} alt="Cultural Night" />
                 <div className="video-overlay">
                    <span className="play-icon">▶</span>
                    <h4>Cultural Night</h4>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSU;
