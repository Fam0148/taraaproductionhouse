import React from 'react';
import './Home.css'; 
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook

// Animation for text fading up
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  return (
    <div className="home-container">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="section hero-section">
        <div className="overlay"></div>
        <motion.div 
          className="content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="home-title">
            STORIES THAT STAY. CINEMA<br /> THAT SPEAKS.
          </h1>
          <p className="home-subtitle">
            We are a film production house driven by craft, emotion, and uncompromising quality creating cinematic experiences that live far beyond the screen.
          </p>
          
          {/* 3. Add onClick to Hero Button */}
          <button 
            className="btn-rounded" 
            onClick={() => navigate('/contact')}
          >
            GET IN TOUCH WITH US
          </button>
        </motion.div>
      </section>

      {/* --- SECTION 2: FOUNDATION --- */}
      <section className="section foundation-section">
        <div className="overlay"></div>
        <motion.div 
          className="content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="home-title">
            QUALITY IS NOT A FEATURE. IT'S OUR FOUNDATION
          </h2>
          <p className="home-subtitle">
           <span>Every frame we create is intentional</span>  <br /><br />
            From story development to final color grade, we obsess over detail, performance, and tone. Because we believe true cinema demands discipline as much as creativity.
          </p>
          
          {/* 3. Add onClick to Foundation Button */}
          <button 
            className="btn-rounded" 
            onClick={() => navigate('/contact')}
          >
            GET IN TOUCH WITH US
          </button>
        </motion.div>
      </section>

      {/* --- SECTION 3: ENDURANCE --- */}
      <section className="section endurance-section">
        <div className="overlay"></div>
        <motion.div 
          className="content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="home-title">
            WE DON'T CHASE TRENDS. WE CREATE WORK THAT ENDURES
          </h2>
          <p className="home-subtitle">
            If you believe cinema should be honest, immersive, and crafted with purpose you're already in the right place. <br /><br />
            <span>Let's create something meaningful.</span>
          </p>
          
          {/* 3. Add onClick to Endurance Button */}
          <button 
            className="btn-rounded" 
            onClick={() => navigate('/contact')}
          >
            GET IN TOUCH WITH US
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;