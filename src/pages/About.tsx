import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa';
import '../styles/About.css';

const timeline = [
  {
    icon: <FaBriefcase />,
    period: 'Sept 2024 – Present',
    title: 'Full Stack Developer',
    place: 'Dhan AI · Hyderabad, Telangana',
  },
  {
    icon: <FaCode />,
    period: 'April 2022 – May 2022',
    title: 'Summer Intern · Software Developer',
    place: 'eMagDevices, Ltd. · Hyderabad, Telangana',
  },
  {
    icon: <FaGraduationCap />,
    period: 'Jul 2018 – Apr 2023',
    title: 'Dual Degree (B.Tech + M.Tech)',
    place: 'IIT Kharagpur · Aerospace Engineering & Engineering Entrepreneurship',
  },
];

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-inner">

        <h1 className="about-title">About Me</h1>

        <p className="about-bio">
          Hi, I'm Bandaru Yaswanth — a Software Development Engineer at Dhan, where I work
          at the intersection of research and engineering. My day-to-day involves exploring
          LLM-based projects, optimizing backend systems for performance, and presenting
          proof-of-concept solutions to clients. I hold a Dual Degree from IIT Kharagpur and
          bring a research-first mindset to every problem I work on. Outside of work, I enjoy
          building small creative tools as a way to deepen my understanding of new concepts —
          turning ideas into working prototypes is how I learn best.
        </p>

        <h2 className="about-section-heading">Experience & Education</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-body">
                <span className="timeline-period">{item.period}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-place">{item.place}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/yaswanthbandaru.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          <FaDownload />
          Download CV
        </a>

      </div>
    </div>
  );
};

export default About;
