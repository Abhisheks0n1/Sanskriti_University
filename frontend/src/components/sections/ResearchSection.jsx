import React from 'react';

const ResearchSection = () => {
  const stats = [
    { label: 'RESEARCH PAPERS', value: '2,500+', icon: '📄' },
    { label: 'PATENTS FILED', value: '2,700+', icon: '💡' },
    { label: 'BOOKS PUBLISHED', value: '30+', icon: '📖' },
    { label: 'RESEARCH GRANTS', value: '12M+', icon: '🌐' },
  ];

  const projects = [
    {
      id: 'large',
      icon: '🤖',
      iconClass: 'purple',
      title: 'Advanced AI & Robotics',
      desc: 'Pioneering autonomous systems and machine learning algorithms.',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      size: 'large'
    },
    {
      id: 'bio',
      icon: '🧬',
      iconClass: 'blue',
      title: 'Bio-Genetics',
      desc: 'Unlocking the secrets of life through genomic research.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600',
      size: 'small'
    },
    {
      id: 'quantum',
      icon: '💻',
      iconClass: 'teal',
      title: 'Quantum Computing',
      desc: 'Next-gen processing power for complex problem solving.',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600',
      size: 'small'
    }
  ];

  return (
    <section className="research-section" id="research">
      <div className="research-container">
        <div className="research-header">
          <h2 className="section-title">
            Cutting Edge <span className="blue-text">Research.</span>
          </h2>
          <p className="research-desc">
            We push the boundaries of knowledge. Our interdisciplinary approach fosters collaboration
            between brilliant minds to solve global challenges.
          </p>
        </div>

        <div className="research-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="research-stat-card glass-effect">
              <span className="res-stat-icon">{stat.icon}</span>
              <span className="res-stat-value">{stat.value}</span>
              <span className="res-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="research-projects-grid">
          <div
            className="project-card large"
            style={{
              backgroundImage: `url(${projects[0].img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="project-img-overlay" />
            <div className="project-content">
              <span className={`project-icon-box ${projects[0].iconClass}`}>{projects[0].icon}</span>
              <h4>{projects[0].title}</h4>
              <p>{projects[0].desc}</p>
            </div>
          </div>

          <div className="project-column">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="project-card small"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="project-img-overlay" />
                <div className="project-content">
                  <span className={`project-icon-box ${project.iconClass}`}>{project.icon}</span>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
