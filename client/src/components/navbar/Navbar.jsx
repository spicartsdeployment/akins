import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { dropdownOptions, IMAGES } from "../constant";
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionNavigate = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile) setHoveredDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHoveredDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="logo-con" onClick={() => handleNavigate('/')}>
        <img className="logo" loading="lazy" src={IMAGES.LogoLight} alt="Company logo"
        />
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Direct Links */}
        <div className="nav-item" onClick={() => handleNavigate('/ai-platform')}>
          <span>AI Platform</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigate('/drone-design-and-manufacturing')}>
          <span>Drone Design & Manufacturing</span>
        </div>

        <div className="nav-item" onClick={() => handleNavigate('/center-of-excellence')}>
          <span>Center Of Excellence</span>
        </div>

        {/* Dropdown Only for Resources */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('Resources')}
          onMouseLeave={handleMouseLeave}
          onClick={() => isMobile && handleSectionNavigate('resources')}
        >
          <span>
            Resources
            <span className="nav-arrow">
              {!isMobile && hoveredDropdown === 'Resources'
                ? <FaAngleRight className="navbar-arrows" />
                : <FaAngleDown />}
            </span>
          </span>
          {!isMobile && (
            <div className={`dropdown-menu ${hoveredDropdown === 'Resources' ? 'show' : ''}`}>
              {dropdownOptions['Resources'].map((option, idx) => (
                <Link
                  key={idx}
                  // to={`/resources/${option.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {option}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="right-section">
        <div className="nav-buttons">
          <Link to="/contact" className="btn-primary gradient-btn-primary home-bk-demo">Book Demo</Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
