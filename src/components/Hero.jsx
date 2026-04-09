import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layered parallax transformations
  // Factory background (slowest)
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Camphor product (middle)
  const yProduct = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Content (fastest - follows natural scroll or slightly pushed)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="hero-parallax-container">
      {/* Layer 1: Far Background (Factory) */}
      <motion.div 
        style={{ y: yBg }} 
        className="parallax-layer far-bg"
      >
        <img src="/hero-factory.png" alt="" className="layer-img" />
        <div className="layer-overlay far-overlay" />
      </motion.div>

      {/* Layer 2: Middle Background (Camphor Product) */}
      <motion.div 
        style={{ y: yProduct }} 
        className="parallax-layer mid-bg"
      >
        <img src="/hero-product.png" alt="" className="layer-img" />
        <div className="layer-overlay mid-overlay" />
      </motion.div>

      {/* Layer 3: Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }} 
        className="hero-parallax-content"
      >
        <div className="hero-badge reveal">
          <span className="badge-dot" />
          <span>Established Since 1995</span>
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-line">
            <span className="hero-word" style={{ animationDelay: '0.2s' }}>Crafting </span>
          </span>
          <span className="hero-title-line">
            <span className="hero-word accent" style={{ animationDelay: '0.4s' }}>Premium</span>{' '}
            <span className="hero-word" style={{ animationDelay: '0.5s' }}>Camphor </span>
          </span>
          <span className="hero-title-line">
            <span className="hero-word" style={{ animationDelay: '0.7s' }}>with</span>{' '}
            <span className="hero-word italic" style={{ animationDelay: '0.8s' }}>Purity</span>
          </span>
        </h1>
        
        <p className="hero-description reveal" style={{ transitionDelay: '1s' }}>
          India's trusted manufacturer of high-grade camphor products, delivering 
          exceptional quality for spiritual, medicinal, and industrial applications.
        </p>
        
        <div className="hero-actions reveal" style={{ transitionDelay: '1.2s' }}>
          <button className="hero-btn primary" data-cursor-hover>
            <span>Explore Collection</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Side Decoration (Fixed to viewport) */}
      <div className="hero-side-text">
        <span>ANU INDUSTRIES</span>
        <span className="side-line" />
        <span>EST.1995</span>
      </div>

      {/* Grain overlay (Fixed to container) */}
      <div className="hero-grain" />
    </section>
  );
}
