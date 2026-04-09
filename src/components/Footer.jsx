import { Link } from 'react-router-dom';
import CrystalLogo from './CrystalLogo';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" data-cursor-hover>
              <CrystalLogo className="footer-logo-svg" />
              <span>Anu Industries</span>
            </Link>
            <p className="footer-tagline">
              Purity is not just a promise, it's our heritage. Manufacturing premium
              camphor products since 1995.
            </p>
          </div>

          <div className="footer-nav">
            <div className="footer-group">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/" data-cursor-hover>Home</Link></li>
                <li><Link to="/about" data-cursor-hover>About</Link></li>
                <li><Link to="/products" data-cursor-hover>Products</Link></li>
                <li><Link to="/contact" data-cursor-hover>Quote</Link></li>
              </ul>
            </div>

            <div className="footer-group">
              <h4>Products</h4>
              <ul>
                <li><Link to="/products" data-cursor-hover>Tablets</Link></li>
                <li><Link to="/products" data-cursor-hover>Powder</Link></li>
                <li><Link to="/products" data-cursor-hover>Blocks</Link></li>
                <li><Link to="/products" data-cursor-hover>Oils</Link></li>
              </ul>
            </div>

            <div className="footer-group">
              <h4>Legal</h4>
              <ul>
                <li data-cursor-hover>Privacy Policy</li>
                <li data-cursor-hover>Terms of Service</li>
                <li data-cursor-hover>Cookie Policy</li>
                <li data-cursor-hover>License</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Anu Industries. All rights reserved.
          </p>
          <div className="footer-extra">
            <span>ISO 9001:2015 Certified</span>
            <span className="dot-separator" />
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
