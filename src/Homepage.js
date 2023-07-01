import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="homepage">
      <header>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="logo">RecruitMe</Link>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Link to="/candidate-search" className="search-button">Candidate Search</Link>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Seamless Hiring Experience</h1>
          <p className="hero-description">Discover the power of our online recruitment solution</p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-button">Sign Up</Link>
            <button className="cta-button">Learn More</button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2 className="feature-title">Smart Candidate Matching</h2>
          <p className="feature-description">Our advanced algorithms match the best candidates for your job openings.</p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Efficient Hiring Process</h2>
          <p className="feature-description">Streamline your hiring process and save time with our user-friendly platform.</p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Data-driven Insights</h2>
          <p className="feature-description">Get valuable insights and analytics to make informed hiring decisions.</p>
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonial">
          <p className="testimonial-text">"RecruitMe has revolutionized our hiring process. We found the perfect candidates quickly and effortlessly."</p>
          <p className="testimonial-author">John Doe, HR Manager</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">"I highly recommend RecruitMe. It has made hiring so much easier, and we've had great success with the candidates we found."</p>
          <p className="testimonial-author">Jane Smith, CEO</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">"The platform is intuitive, and the support team is fantastic. We've been able to hire top talent consistently since we started using RecruitMe."</p>
          <p className="testimonial-author">Mike Johnson, Hiring Manager</p>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <p className="footer-text">© 2023 RecruitMe. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
