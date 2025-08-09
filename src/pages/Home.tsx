import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm Yaswanth Bandaru</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I build exceptional digital experiences with modern web technologies.
              Focused on creating clean, efficient, and user-friendly applications.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with expertise in modern web technologies.
            With a strong foundation in both frontend and backend development,
            I create seamless, responsive, and scalable web applications.
          </p>
          <Link to="/about" className="btn-text">Learn more about me →</Link>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, TypeScript, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js, Express, Python, RESTful APIs</p>
            </div>
            <div className="skill-card">
              <h3>Tools & More</h3>
              <p>Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
          <Link to="/skills" className="btn-text">View all skills →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
