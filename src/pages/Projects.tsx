import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A responsive single-page portfolio built with React, TypeScript, and Vite. Features smooth section navigation, a filterable skills grid, inline blog post expansion, and a working contact form.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS3'],
    demoUrl: 'https://yaswanthbandaru.github.io',
    codeUrl: 'https://github.com/yaswanthbandaru/yaswanthbandaru.github.io',
  },
  {
    id: 2,
    title: 'RAG Based Chat Application – Full Stack Platform',
    description:
      'Designed and developed a full stack chat application leveraging Retrieval-Augmented Generation (RAG) techniques. Implemented a React frontend with a Node.js/Express backend and MongoDB/Redis for efficient data management.',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
    demoUrl: '#',
    codeUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects-inner">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {(project.codeUrl !== '#' || project.demoUrl !== '#') && (
                <div className="project-links">
                  {project.codeUrl !== '#' && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demoUrl !== '#' && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
