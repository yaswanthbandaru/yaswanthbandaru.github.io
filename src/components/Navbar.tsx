import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith('/blogs');

  const close = () => setIsOpen(false);

  // When on blog pages, section links must go back to home page first
  const sectionHref = (anchor: string) => isBlogRoute ? `/${anchor}` : anchor;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href={sectionHref('#home')} className="nav-logo" onClick={close}>
          YB
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href={sectionHref('#home')}    className="nav-link" onClick={close}>Home</a>
          <a href={sectionHref('#about')}   className="nav-link" onClick={close}>About</a>
          <a href={sectionHref('#projects')} className="nav-link" onClick={close}>Projects</a>
          <a href={sectionHref('#skills')}  className="nav-link" onClick={close}>Skills</a>
          <Link
            to="/blogs"
            className={`nav-link${isBlogRoute ? ' active' : ''}`}
            onClick={close}
          >
            Blog
          </Link>
          <a href={sectionHref('#contact')} className="nav-link" onClick={close}>Contact</a>
        </div>

        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
