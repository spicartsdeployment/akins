import React from "react";
import { FaArrowRight, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import ScrollObserver from "../common-components/intersectObserver/IntersectObserver";
import { IMAGES } from "../constant";
import "./Footer.css";


const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ScrollObserver>
      <footer className="" style={{ position: "relative", bottom: 0, width: "100%", backgroundColor: "#111", padding: "20px", textAlign: "center" }} >
        <div className="footer-container" >
          <div className="footer-items">
            <Link >
              <img className="footer-logo" src={IMAGES.LogoLight} alt="Footer-logo" loading="lazy" />
            </Link>
          </div>
          <div className="footer-items">
            <h3>DEPARTMENTS</h3>
            <p onClick={() => handleNavigate('/center-of-excellence')}>Center of Excellence</p>
            <p onClick={() => handleNavigate('/drone-design-and-manufacturing')}>Drone Design and Manufacturing</p>
          </div>
          <div className="footer-items">
            <h3>COMPANY</h3>
            <p onClick={() => handleNavigate('/about-us')}>About Us</p>
            <p onClick={() => handleNavigate('/careers')}>Careers</p>
            <p>Locations</p>
            <p>Use Cases</p>
          </div>
          <div className="footer-items">
            <h3>RESOURCES</h3>
            <p onClick={() => handleNavigate('/blogs')}>Blogs</p>
            <p onClick={() => handleNavigate('/events-and-gallery')}>Events and Gallery</p>
            <p onClick={() => handleNavigate('/contact-us')}>Contact Us</p>
            <p>Research</p>
          </div>
          <div className="footer-items footer-tch-btn-link">
            <Link >
              <button className="btn-primary btn-arrow footer-tch-btn">Get In Touch <FaArrowRight className="right-arrow-icon" /></button>
            </Link>
            <div className="contact-icons-cont">
              <FaPhoneAlt className="contact-icons" />
              <a href="tel:+917337292216">
                <p>+91 - 7337292216</p>
              </a>
            </div>
            <div className="contact-icons-cont">
              <MdEmail className="contact-icons" />
              <a href="mailto:admin@akinanalytics.ai">
                <p>admin@akinanalytics.ai</p>
              </a>
            </div>
            <div className="follow-us">
              <p>FOLLOW US</p>
              <div className="follow-us-icons-con">
                <a href="https://linkedin.com/company/akin-analytics" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="follow-us-icons" />
                </a>
                <a href="https://instagram.com/akinanalytics" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="follow-us-icons" />
                </a>
                <a href="https://youtube.com/@akinanalytics" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="follow-us-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-policies">
          <p>Copyright © 2025 Akin Analytics Pvt Limited. All rights reserved.</p>
          <p className="terms-policies" onClick={() => handleNavigate('/terms-and-policies')}>Terms of Use & Privacy Policy</p>
        </div>
      </footer>
    </ScrollObserver>
  );
};

export default Footer;