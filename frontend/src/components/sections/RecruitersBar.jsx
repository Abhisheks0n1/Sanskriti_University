import React from 'react';

const RecruitersBar = () => {
  const recruiters = ['TCS', 'Wipro', 'HCL', 'IBM', 'Accenture', 'Deloitte', 'Capgemini', 'Cognizant', 'Tech Mahindra'];
  
  return (
    <div style={{ background: '#183B7E', width: '100vw' }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 0', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '40px',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
      <span style={{ 
        color: '#FFB800', 
        fontWeight: '800', 
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        flexShrink: 0
      }}>Our Top Recruiters</span>
      <div style={{ 
        display: 'flex', 
        gap: '40px', 
        color: 'white', 
        fontWeight: '600', 
        fontSize: '0.9rem',
        opacity: 0.9
      }}>
        {recruiters.map(r => <span key={r}>{r}</span>)}
      </div>
    </div>
    </div>
  );
};

export default RecruitersBar;
