// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Import Footer here
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import BackToTopBtn from './components/BackToTopBtn'; // Import BackToTopBtn
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <ScrollToTop />
      <BackToTopBtn />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* 2. Add Footer here, OUTSIDE Routes */}
    </div>
  );
}

export default App;