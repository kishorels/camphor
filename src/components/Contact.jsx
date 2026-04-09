import { useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="contact section-padding" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info reveal-left">
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Let's Discuss Your Requirments</h2>
            <p className="contact-description">
              Whether you need a bulk supply for industrial use or premium tablets 
              for retail, our team is ready to provide the best solutions.
            </p>

            <div className="contact-details">
              <div className="contact-detail" data-cursor-hover>
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="detail-text">
                  <h4>Our Location</h4>
                  <p>123 Industrial Estate, Camphor Road, Gujarat, India</p>
                </div>
              </div>

              <div className="contact-detail" data-cursor-hover>
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="detail-text">
                  <h4>Email Us</h4>
                  <p>contact@anuindustries.com</p>
                </div>
              </div>

              <div className="contact-detail" data-cursor-hover>
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="detail-text">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="social-label">Follow Us</span>
              <div className="social-links">
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map(social => (
                  <button key={social} className="social-link" data-cursor-hover>{social}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper reveal-right delay-2">
            <div className="contact-glass-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="">Select a subject</option>
                    <option value="bulk">Bulk Order Inquiry</option>
                    <option value="retail">Retail Distributorship</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="submit-btn" data-cursor-hover>
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
