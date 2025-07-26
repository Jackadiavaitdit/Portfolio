// src/components/ProgressBar.jsx
import React, { useState, useEffect } from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';

const ProgressBar = ({ skill, level, color = 'primary', animated = true }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      // Animation de remplissage
      const timer = setTimeout(() => {
        setProgress(level);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setProgress(level);
    }
  }, [level, animated]);

  return (
    <div className="skill-item mb-4">
      <div className="d-flex justify-content-between mb-2">
        <span className="skill-name fw-semibold">{skill}</span>
        <span className="skill-percent">{progress}%</span>
      </div>
      <BootstrapProgressBar
        now={progress}
        variant={color}
        className="skill-progress"
        style={{ height: '8px' }}
      />
    </div>
  );
};

// Composant parent pour gérer toutes les barres de compétences
const SkillsSection = () => {
  const skills = [
    { skill: 'React.js', level: 85, color: 'info' },
    { skill: 'JavaScript', level: 90, color: 'warning' },
    { skill: 'HTML/CSS', level: 95, color: 'danger' },
    { skill: 'Bootstrap', level: 80, color: 'primary' },
    { skill: 'Node.js', level: 75, color: 'success' },
    { skill: 'Git', level: 85, color: 'dark' }
  ];

  return (
    <section className="skills-section py-5">
      <h2 className="section-title mb-5 text-center">Mes Compétences</h2>
      <div className="skills-container">
        {skills.map((item, index) => (
          <ProgressBar 
            key={index}
            skill={item.skill}
            level={item.level}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;