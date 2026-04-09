import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  
  return (
    <section id="about" className="about section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* Left: Image with floating overlay */}
          <div className="about-image-wrapper reveal-left">
            <div className="about-image-container">
              <img src="/factory.png" alt="Anu Industries Factory" className="about-image" />
              <div className="about-image-border" />
            </div>
            <div className="about-experience-badge">
              <span className="exp-number">30+</span>
              <span className="exp-text">Years of<br />Excellence</span>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="about-content">
            <span className="section-label reveal delay-1">About Us</span>
            <h2 className="section-title reveal delay-2">
              A Legacy of Purity & Precision
            </h2>
            <p className="about-text reveal delay-3">
              Founded in 1995, Anu Industries has grown from a small family operation 
              into one of India's most respected camphor manufacturers. Our commitment 
              to quality, innovation, and sustainability drives everything we do.
            </p>
            <p className="about-text reveal delay-4">
              With state-of-the-art manufacturing facilities and rigorous quality 
              control processes, we produce camphor that meets the highest international 
              standards for purity and consistency.
            </p>
            
            <div className="about-features reveal delay-5">
              <div className="about-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4>ISO Certified</h4>
                  <p>International quality standards</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Pan-India Reach</h4>
                  <p>Trusted across the nation</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4>99.5% Purity</h4>
                  <p>Premium grade camphor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="about-decoration">
        <div className="about-deco-circle" />
      </div>
    </section>
  );
}
