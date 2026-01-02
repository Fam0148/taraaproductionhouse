import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaFilm } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to FORCE scroll to top immediately
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* COLUMN 1: LOGO */}
        <div className="footer-col">
          {/* Link wrapper with scrollToTop on click */}
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            <FaFilm style={{ color: '#D4AF37', fontSize: '3rem' }} />
            <span>TARA</span>
          </Link>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: FOLLOW US */}
        <div className="footer-col">
          <h3 className="footer-heading">Follow Us Behind The Lens</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        {/* COLUMN 4: OUR OFFICE */}
        <div className="footer-col">
          <h3 className="footer-heading">Our Office</h3>
          <address className="address-text">
            Street Name, Area<br />
            City, State, Country<br /><br />
            contact@tara.com
          </address>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        All Rights Reserved | Tara Studios {currentYear} ©
      </div>
    </footer>
  );
};

export default Footer;