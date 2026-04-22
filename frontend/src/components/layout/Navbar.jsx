import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'International', href: '#' },
    { name: 'Life @ SU', href: '#' },
    { name: 'Placement', href: '#' },
    { name: 'Research', href: '#' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-box">
          <div className="logo">
            <span className="logo-text">SANSKRITI</span>
            <span className="logo-sub">UNIVERSITY</span>
          </div>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <button className="apply-btn mobile-only">Apply Now</button>
        </div>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button className="search-btn" style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="apply-btn desktop-only">Apply Now</button>
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
