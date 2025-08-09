import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

// Project interface for type safety
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

const Projects: React.FC = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=E-commerce+Platform',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      tags: ['React', 'TypeScript', 'Firebase', 'Redux'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Task+App',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring a clean design and smooth animations.',
      tags: ['React', 'TypeScript', 'Vite', 'CSS3'],
      image: 'https://via.placeholder.com/600x400/1d4ed8/ffffff?text=Portfolio',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts using a weather API with location detection.',
      tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
      image: 'https://via.placeholder.com/600x400/60a5fa/ffffff?text=Weather+App',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A web application that helps users find recipes based on ingredients they have, with filtering and favorite features.',
      tags: ['React', 'Context API', 'Spoonacular API', 'CSS Modules'],
      image: 'https://via.placeholder.com/600x400/3b82f6/ffffff?text=Recipe+Finder',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-stack blog platform with user authentication, rich text editing, and comment functionality.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
      image: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=Blog+Platform',
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">My Projects</h1>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Live Demo
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      View Code
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="projects-cta">
            <div className="cta-content">
              <h3>Have a project in mind?</h3>
              <p>I'm always looking for new challenges and opportunities to create something amazing.</p>
              <Link to="/contact" className="btn btn-primary">Let's Talk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
