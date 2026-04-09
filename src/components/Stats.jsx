import { useRef, useState, useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import './Stats.css';

const counters = [
  { value: '30+', label: 'Years Experience', suffix: '' },
  { value: '500', label: 'Clients Served', suffix: '+' },
  { value: '99', label: 'Product Purity', suffix: '.5%' },
  { value: '25', label: 'Countries Reached', suffix: '+' },
];

export default function Stats() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="stats" className="stats section-padding" ref={sectionRef}>
      <div className="container">
        <div className="stats-header reveal">
          <span className="section-label">Our Impact</span>
          <h2 className="section-title">Established Legacy</h2>
        </div>
        
        <div className="stats-grid">
          {counters.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-item reveal delay-${index + 1}`}
              data-cursor-hover
            >
              <div className="stat-content">
                <span className="stat-value">
                  {stat.value}{stat.suffix}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-bg-icon">
                {index === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" /></svg>}
                {index === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 20V19C17 17.8954 16.1046 17 15 17H9C7.89543 17 7 17.8954 7 19V20M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" /></svg>}
                {index === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" /></svg>}
                {index === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3.055 11H5C5.55228 11 6 11.4477 6 12V13C6 14.1046 6.89543 15 8 15H9C10.1046 15 11 15.8954 11 17V17M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" /></svg>}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Parallax moving lines in background */}
      <div className="stats-lines">
        <div className="stats-line stats-line-1" />
        <div className="stats-line stats-line-2" />
      </div>
    </section>
  );
}
