import React from 'react';
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
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
