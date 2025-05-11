import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const { setIsRequestDemoOpen } = props;
  const [activeFlyout, setActiveFlyout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Refs for timeout
  const flyoutTimeoutRef = useRef(null);

  const toggleMenu = () => {
    scrollToTop();
    setIsMenuOpen((prev) => !prev);
  };

  const handleLink = (path) => {
    console.log('path: ', path);
    scrollToTop();
    navigate(path);
  }

  const handleMouseEnter = (flyoutType) => {
    if (flyoutTimeoutRef.current) {
      clearTimeout(flyoutTimeoutRef.current);
    }
    setActiveFlyout(flyoutType);
  };

  const handleMouseLeave = () => {
    flyoutTimeoutRef.current = setTimeout(() => {
      setActiveFlyout(null);
    }, 300);
  };

  const handleLogoClick = () => {
    navigate('/');
    scrollToTop();
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      onMouseLeave={handleMouseLeave}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="logo-con" onClick={handleLogoClick}>
        <img
          className="logo"
          loading="lazy"
          src={""}
          alt="Company logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop">
        {/* Products Dropdown */}
        <div
          className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={activeFlyout === 'products' ? 'true' : 'false'}
        >
          <span onClick={() => handleLink('/products')} aria-label="Products">
          AI Platform
          </span>
        </div>

        {/* Other Links */}
        <Link
          onClick={scrollToTop}
          className={`nav-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          to="/pricing"
          aria-label="Pricing"
        >
          Drone Design & Manufacturing
        </Link>

        
        <Link
          onClick={scrollToTop}
          className={`nav-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          to="/pricing"
          aria-label="Pricing"
        >
           Center Of Excellence
        </Link>

        
        <Link
          onClick={scrollToTop}
          className={`nav-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          to="/pricing"
          aria-label="Pricing"
        >
           Resources
        </Link>
      </div>

      {/* Sign Up & Request a Demo */}
      <div className="auth-links desktop">
        <Link className='navbar-req-link' to="/request-demo" onClick={() => setIsRequestDemoOpen(true)}>
          <button className="btn-primary">Book Demo</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
