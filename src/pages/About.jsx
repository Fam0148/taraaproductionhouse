import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. Import Hook
import { FaLightbulb, FaVideo, FaBullseye } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate(); // 2. Initialize Hook

  return (
    <div className="page-container" style={{paddingTop: 0}}>
      
      {/* --- TOP SECTION --- */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        
        {/* Main Text */}
        <motion.div 
          className="about-main-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="about-title">About Taraa Studios</h1>
          <h2 className="about-subtitle">WE ARE BUILT ON CINEMA.</h2>
          <p className="about-desc">
            ROOTED IN CRAFT, EMOTION, <br /> AND UNCOMPROMISING QUALITY.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div 
          className="floating-text vision-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="floating-label">VISION</span>
          <p className="floating-desc">TO CREATE CINEMA THAT ENDURES BEYOND ITS TIME.</p>
        </motion.div>

        {/* Mission */}
        <motion.div 
          className="floating-text mission-box"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <span className="floating-label">MISSION</span>
          <p className="floating-desc">
            To develop and produce films with honesty, discipline and visual integrity collaborating with artists who value the craft as much as the story.
          </p>
        </motion.div>
      </section>


      {/* --- VALUES SECTION --- */}
      <section className="values-section">
        <div className="values-grid">
          
          {/* Item 1: INTENT */}
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="value-title">INTENT</h3>
            <FaLightbulb className="value-icon" />
            <h4 className="value-heading">STORY BEFORE EVERYTHING</h4>
            <p className="value-text">NARRATIVE LEADS. ALWAYS.</p>
          </motion.div>

          {/* Item 2: CRAFT */}
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="value-title">CRAFT</h3>
            <FaVideo className="value-icon" />
            <h4 className="value-heading">CRAFT OVER NOISE</h4>
            <p className="value-text">RESTRAINT IS OUR LUXURY.</p>
          </motion.div>

          {/* Item 3: PRECISION */}
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="value-title">PRECISION</h3>
            <FaBullseye className="value-icon" />
            <h4 className="value-heading">CINEMA THAT ENDURES</h4>
            <p className="value-text">TIMELESS OVER TRENDY.</p>
          </motion.div>

        </div>

        {/* 3. Add Redirect Logic here */}
        <button 
          className="btn-rounded" 
          onClick={() => navigate('/contact')}
        >
          GET IN TOUCH WITH US
        </button>

      </section>
    </div>
  );
};

export default About;