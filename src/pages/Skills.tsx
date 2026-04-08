import React, { useRef, useEffect, useState } from "react";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaTools,
  FaLayerGroup,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJava,
  FaExchangeAlt,
  FaSyncAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiJenkins,
  SiRedis,
  SiPostgresql,
  SiGraphql,
  SiGrafana,
} from "react-icons/si";
import "../styles/SkillsPage.css";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const getLevelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Beginner";
};

// Set to false to hide skill levels (badges, percentages, progress bars)
const SHOW_SKILL_LEVELS = true;

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'languages', icon: <SiJavascript />, color: '#f0c000' },
    { name: 'TypeScript', level: 85, category: 'languages', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'Python',     level: 80, category: 'languages', icon: <SiPython />,     color: '#3572a5' },
    { name: 'Java',       level: 75, category: 'languages', icon: <FaJava />,       color: '#b07219' },
    { name: 'React',      level: 90, category: 'frontend',  icon: <FaReact />,      color: '#61dafb' },
    { name: 'HTML5',      level: 95, category: 'frontend',  icon: <FaHtml5 />,      color: '#e34c26' },
    { name: 'CSS3',       level: 90, category: 'frontend',  icon: <FaCss3Alt />,    color: '#264de4' },
    { name: 'Redux',      level: 80, category: 'frontend',  icon: <SiRedux />,      color: '#764abc' },
    { name: 'Node.js',    level: 85, category: 'backend',   icon: <FaNodeJs />,     color: '#339933' },
    { name: 'Express',    level: 80, category: 'backend',   icon: <SiExpress />,    color: '#444444' },
    { name: 'REST APIs',  level: 85, category: 'backend',   icon: <FaExchangeAlt />,color: '#3498db' },
    { name: 'MongoDB',    level: 75, category: 'backend',   icon: <SiMongodb />,    color: '#47a248' },
    { name: 'Redis',      level: 70, category: 'backend',   icon: <SiRedis />,      color: '#dc382d' },
    { name: 'PostgreSQL', level: 75, category: 'backend',   icon: <SiPostgresql />, color: '#336791' },
    { name: 'GraphQL',    level: 70, category: 'backend',   icon: <SiGraphql />,    color: '#e10098' },
    { name: 'Git',        level: 85, category: 'tools',     icon: <FaGitAlt />,     color: '#f05032' },
    { name: 'Linux',      level: 80, category: 'tools',     icon: <FaLinux />,      color: '#fcc624' },
    { name: 'Grafana',    level: 70, category: 'tools',     icon: <SiGrafana />,    color: '#f46800' },
    { name: 'Docker',     level: 70, category: 'tools',     icon: <FaDocker />,     color: '#2496ed' },
    { name: 'AWS',        level: 65, category: 'tools',     icon: <FaAws />,        color: '#ff9900' },
    { name: 'Jenkins',    level: 60, category: 'tools',     icon: <SiJenkins />,    color: '#d24939' },
    { name: 'Agile/Scrum',level: 80, category: 'tools',     icon: <FaSyncAlt />,    color: '#6366f1' },
    { name: 'CI/CD',      level: 75, category: 'tools',     icon: <FaCode />,       color: '#0ea5e9' },
  ];

  const categories = [
    { id: "all", name: "All", icon: <FaLayerGroup /> },
    { id: "languages", name: "Languages", icon: <FaCode /> },
    { id: "frontend", name: "Frontend", icon: <FaDesktop /> },
    { id: "backend", name: "Backend", icon: <FaServer /> },
    { id: "tools", name: "Tools", icon: <FaTools /> },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="skills-page" ref={sectionRef}>
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">My Skills</h1>
          <p className="skills-intro">
            A showcase of my technical proficiency across languages, frameworks,
            and tools.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab${activeCategory === cat.id ? " active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className={`skills-grid${animated ? " skills-animated" : ""}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={
                { "--anim-delay": `${index * 55}ms` } as React.CSSProperties
              }
            >
              <div className="skill-card-header">
                <span
                  className="skill-icon"
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}22`,
                  }}
                >
                  {skill.icon}
                </span>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  {SHOW_SKILL_LEVELS && (
                    <span
                      className={`skill-level-badge level-${getLevelLabel(skill.level).toLowerCase()}`}
                    >
                      {getLevelLabel(skill.level)}
                    </span>
                  )}
                </div>
                {SHOW_SKILL_LEVELS && (
                  <span className="skill-percent">{skill.level}%</span>
                )}
              </div>
              {SHOW_SKILL_LEVELS && (
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={
                      {
                        "--skill-level": `${skill.level}%`,
                        "--skill-color": skill.color,
                      } as React.CSSProperties
                    }
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
