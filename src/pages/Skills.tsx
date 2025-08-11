import React from 'react';
import '../styles/SkillsPage.css';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'JavaScript', level: 90, category: 'languages' },
    { name: 'TypeScript', level: 85, category: 'languages' },
    { name: 'Python', level: 80, category: 'languages' },
    { name: 'Java', level: 75, category: 'languages' },
    
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3', level: 90, category: 'frontend' },
    { name: 'Redux', level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'RESTful APIs', level: 85, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    
    // Tools & Other
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'CI/CD', level: 75, category: 'tools' },
  ];

  const categories = [
    { id: 'languages', name: 'Programming Languages' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'tools', name: 'Tools & Technologies' },
  ];

  const getSkillsByCategory = (categoryId: string) => {
    return skills.filter(skill => skill.category === categoryId);
  };

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-intro">
          Here's a showcase of my technical skills and proficiency levels across various technologies and tools.
        </p>
        
        <div className="skills-categories">
          {categories.map(category => (
            <div key={category.id} className="skill-category">
              <h2 className="category-title">{category.name}</h2>
              <div className="skills-grid">
                {getSkillsByCategory(category.id).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-level" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
