import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Get to know me better</p>
          
          <div className="about-content">
            <div className="about-text">
              <h2>Who I Am</h2>
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                With a keen eye for design and a problem-solving mindset, I create seamless and efficient web applications 
                that deliver exceptional user experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work behind the scenes. 
                Since then, I've been on an exciting path of continuous learning and growth in the tech industry.
              </p>
              
              <h3>My Journey</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2023 - Present</h4>
                    <p>Senior Full Stack Developer at Tech Innovations Inc.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2020 - 2023</h4>
                    <p>Frontend Developer at Web Solutions Co.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2018 - 2020</h4>
                    <p>Freelance Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-skills">
              <h3>My Skills</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Tools & More</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>CI/CD</li>
                    <li>Agile/Scrum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <h3>Let's Work Together</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
