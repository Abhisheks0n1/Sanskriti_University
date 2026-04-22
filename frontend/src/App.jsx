import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AwardsBar from './components/sections/AwardsBar';
import HighlightsPanel from './components/sections/HighlightsPanel';
import ExcellenceStats from './components/sections/ExcellenceStats';
import WhyChoose from './components/sections/WhyChoose';
import ResearchSection from './components/sections/ResearchSection';
import ChancellorDesk from './components/sections/ChancellorDesk';
import LifeAtSU from './components/sections/LifeAtSU';
import Testimonials from './components/sections/Testimonials';
import RecruitersBar from './components/sections/RecruitersBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <AwardsBar />
        <HighlightsPanel />
        <ExcellenceStats />
        
        <RecruitersBar />

        <WhyChoose />
        <ResearchSection />
        <ChancellorDesk />
        <LifeAtSU />
        <Testimonials />
      </main>
      
      <footer style={{ background: '#010314', color: '#B0B3C1', padding: '60px 5%', textAlign: 'center' }}>
        <div className="footer-logo" style={{ marginBottom: '30px' }}>
          <div style={{ background: 'white', display: 'inline-block', padding: '10px 20px', borderRadius: '4px' }}>
            <div style={{ color: '#020420', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '1px' }}>SANSKRITI</div>
            <div style={{ color: '#020420', fontSize: '0.6rem', letterSpacing: '3px' }}>UNIVERSITY</div>
          </div>
        </div>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Sanskriti University is dedicated to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.</p>
        <div style={{ margin: '30px 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
          <p style={{ fontSize: '0.75rem' }}>&copy; 2025 Sanskriti University. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
