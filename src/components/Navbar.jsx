import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/process', label: 'Process' },
    { path: '/contact', label: 'Contact' },
  ];
  
  useEffect(() => {
    setMobileOpen(false); // Close mobile menu on route change
  }, [location.pathname]);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" data-cursor-hover>
          <img src="/logo.png" alt="Anu Industries" className="navbar-logo-img" />
          <div className="navbar-logo-text">
            <span className="logo-name">Anu Industries</span>
            <span className="logo-tagline">Premium Camphor</span>
          </div>
        </Link>
        
        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              data-cursor-hover
            >
              {link.label}
              <span className="nav-link-indicator" />
            </Link>
          ))}
          <Link to="/contact" className="nav-cta" data-cursor-hover>
            Get a Quote
          </Link>
        </div>
        
        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
