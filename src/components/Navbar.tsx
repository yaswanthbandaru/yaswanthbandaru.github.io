import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          YB
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
