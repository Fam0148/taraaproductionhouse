import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFilm, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false); // Tracks if menu is open
  const location = useLocation();

  // Toggle the menu click
  const handleClick = () => setClick(!click);

  // Close menu when a link (or logo) is clicked
  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo(0, 0);
  };

  // Helper to highlight active link
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* LOGO: Changed from div to Link to redirect to Home */}
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <FaFilm className="icon-gold" /> TARAA STUDIOS
      </Link>

      {/* Hamburger Icon (Visible on Mobile) */}
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <div className={click ? "nav-links active" : "nav-links"}>
        <Link to="/" className={isActive('/')} onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/about" className={isActive('/about')} onClick={closeMobileMenu}>
          About Us
        </Link>
        <Link to="/projects" className={isActive('/projects')} onClick={closeMobileMenu}>
          Projects
        </Link>
        <Link to="/contact" className={isActive('/contact')} onClick={closeMobileMenu}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;