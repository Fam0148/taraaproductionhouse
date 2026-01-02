import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaPaperclip, FaCheck } from 'react-icons/fa';


const Contact = () => {
  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const [blockedDomains, setBlockedDomains] = useState([
    "icousd.com", "mailinator.com", "yopmail.com", "guerrillamail.com", "10minutemail.com"
  ]);

  // Fetch Blocklist
  useEffect(() => {
    const fetchBlocklist = async () => {
      try {
        const response = await fetch('https://disposable.github.io/disposable-email-domains/domains.json');
        if (response.ok) {
          const data = await response.json();
          setBlockedDomains(prev => [...new Set([...prev, ...data])]);
        }
      } catch (error) {
        console.error("Could not fetch blocklist", error);
      }
    };
    fetchBlocklist();
  }, []); 

  // --- VALIDATION HELPERS ---

  const validateField = (name, value) => {
    let errorMsg = "";

    // 1. Check Empty
    if (!value.trim()) {
      return "This field is required.";
    }

    // 2. Specific Rules
    switch (name) {
      case 'name':
        // UPDATED: Check for length AND alphabets only
        if (value.trim().length < 3) {
          errorMsg = "Name must be at least 3 characters.";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMsg = "Name must contain only letters.";
        }
        break;
      
      case 'phone':
        // Regex: Exactly 10 digits, no spaces or dashes allowed here
        if (!/^\d{10}$/.test(value)) {
          errorMsg = "Phone number must be exactly 10 digits.";
        }
        break;

      case 'email':
        if (!value.includes('@') || !value.includes('.')) {
          errorMsg = "Please enter a valid email address.";
        } else {
          const domain = value.split('@')[1].toLowerCase();
          if (blockedDomains.includes(domain)) {
            errorMsg = "Temporary/Disposable emails not accepted.";
          }
        }
        break;
        
      default:
        break;
    }
    return errorMsg;
  };

  // --- HANDLERS ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone, only allow numbers to be typed
    if (name === 'phone' && !/^\d*$/.test(value)) {
      return; 
    }
    // Limit phone to 10 chars
    if (name === 'phone' && value.length > 10) {
      return;
    }

    // UPDATED: For name, strictly allow only letters and spaces while typing (optional strictness)
    // If you want to allow typing numbers but show error later, remove this if block.
    // If you want to STOP them from typing numbers at all, keep this:
    if (name === 'name' && !/^[A-Za-z\s]*$/.test(value)) {
      return; // Ignore number/symbol inputs immediately
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error immediately when user fixes it
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleAttachClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    let newErrors = {};
    let hasError = false;

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      alert("Please fix the errors before submitting.");
      return;
    }

    alert(`Form Submitted Successfully!\nName: ${formData.name}\nPhone: ${formData.phone}`);
  };

  return (
    <div className="contact-container">
      
      <section className="contact-hero">
        <div className="contact-overlay"></div>
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          LET'S CREATE CINEMA<br /> TOGETHER
        </motion.h1>
      </section>

      <motion.div 
        className="form-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            onChange={handleFileChange}
            name="attachment"
          />

          {/* NAME */}
          <div className="form-group">
            <label className="form-label">Name * :</label>
            <div className="input-col">
              <input 
                type="text" 
                name="name" 
                className={`form-input ${errors.name ? 'input-error' : ''}`} 
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter the Name"
                required 
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
          </div>

          {/* EMAIL */}
          <div className="form-group email-group">
            <label className="form-label">E-Mail * :</label>
            <div className="input-col">
                <input 
                  type="email" 
                  name="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`} 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter the Valid email ID" 
                  required
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>
          </div>

          {/* PHONE */}
          <div className="form-group">
            <label className="form-label">Phone * :</label>
            <div className="input-col">
              <input 
                type="tel" 
                name="phone" 
                className={`form-input ${errors.phone ? 'input-error' : ''}`} 
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mobile Number" 
                required 
              />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-group textarea-group">
            <label className="form-label">Message * :</label>
            <div className="input-col">
              <textarea 
                name="message" 
                className={`form-textarea ${errors.message ? 'input-error' : ''}`} 
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-attach" 
              onClick={handleAttachClick}
              style={fileName ? { borderColor: '#D4AF37', color: '#D4AF37' } : {}}
            >
              {fileName ? <FaCheck /> : <FaPaperclip />} 
              {fileName ? " " + fileName.substring(0, 15) + (fileName.length > 15 ? "..." : "") : " ATTACH"}
            </button>

            <button type="submit" className="btn-rounded">
              SUBMIT
            </button>
          </div>

        </form>
      </motion.div>

    </div>
  );
};

export default Contact;