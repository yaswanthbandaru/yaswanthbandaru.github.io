import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Replace with your form submission logic
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">I'd love to hear from you</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:contact@example.com">contact@example.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Me a Message</h2>
              
              {formStatus === 'success' && (
                <div className="alert alert-success">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="alert alert-error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi there, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
