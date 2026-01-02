import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa'; 
// Note: We don't need useNavigate if we are just opening a URL

const Projects = () => {
  // 1. Define your video link here
  // I used a placeholder "NIGHTFIRE" trailer to match your title
  const TRAILER_LINK = "https://www.youtube.com/watch?v=69ffwl-8pCU&t=1s";

  const handleWatchTrailer = () => {
    if (TRAILER_LINK) {
      // '_blank' opens it in a new tab
      window.open(TRAILER_LINK, '_blank');
    } else {
      alert("Trailer coming soon!");
    }
  };

  return (
    <div className="projects-container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
      </style>

      {/* --- SECTION 1: HEADER & GRID --- */}
      <div className="projects-header">
        <motion.h1 
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OUR PROJECTS
        </motion.h1>
        <p className="projects-subtitle">OUR STORIES ARE IN THE MAKING...</p>
        <p className="projects-desc">
          WE ARE CRAFTING CINEMATIC EXPERIENCES.<br />
          CHECK BACK SOON FOR TRAILERS, INFO, MUSIC AND MORE!
        </p>
      </div>

      {/* THE GRID */}
      <div className="projects-grid">
        {[1, 2, 3, 4].map((item, index) => (
          <motion.div 
            key={item} 
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="card-text">COMING SOON</span>
          </motion.div>
        ))}
      </div>
      
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <span style={{fontFamily: 'Baumans', color: '#D4AF37'}}>PROJECTS COMING SOON</span>
      </div>

      {/* --- SECTION 2: FEATURE FILM BANNER --- */}
      <section className="feature-banner">
        <div className="banner-overlay"></div>
        
        <div className="banner-content">
          <div>
            <h2 className="film-title">Midnight Fire</h2> 
          </div>

          <div className="streaming-info">
            <span className="now-streaming">NOW STREAMING</span>
            
            {/* 2. Update the Button onClick */}
            <button 
              className="btn-rounded" 
              onClick={handleWatchTrailer} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '10px',
                minWidth: '200px',
                cursor: 'pointer'
              }}
            >
              <FaPlay size={12} /> WATCH TRAILER
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;