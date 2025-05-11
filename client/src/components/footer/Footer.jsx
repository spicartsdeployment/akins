import ScrollObserver from "../intersectObserver/IntersectObserver";
import React from "react";
import "./Footer.css";
import { IMAGES } from "../Constant";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (

    <ScrollObserver>
      <footer className="" style={{ position: "relative", bottom: 0, width: "100%", backgroundColor: "#111", padding: "20px", textAlign: "center" }} >
        <div className="footer-container">
          <div className="footer-items"><img className="footer-logo" src={IMAGES.DummyImage} alt="Footer-logo" /></div>
          <div className="footer-items">
            <h3>DEPARTMENTS</h3>
            <p>Center of Excellence</p>
            <p>Drone Design and Manufacturing</p>
          </div>
          <div className="footer-items">
            <h3>COMPANY</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Locations</p>
            <p>Use Cases</p>
          </div>
          <div className="footer-items">
            <h3>RESOURCES</h3>
            <p>Blog</p>
            <p>Events</p>
            <p>Contact Us</p>
            <p>Research</p>
          </div>
          <div className="footer-items">
            <button className="btn-primary footer-tch-btn">Get In Touch <FaArrowRight className="right-arrow-icon" /></button>
            <div className="contact-icons-cont">
              <FaPhoneAlt className="contact-icons" />
              <p>+91 - 7337292216</p>
            </div>

            <div className="contact-icons-cont">
              <MdEmail className="contact-icons" />
              <p>admin@akinanalytics.ai</p>
            </div>

            <div className="follow-us">
              <p>FOLLOW US</p>
              <FaLinkedin className="follow-us-icons" />
              <FaInstagram className="follow-us-icons" />
              <FaYoutube className="follow-us-icons" />
            </div>
          </div>
        </div>

        <div className="footer-policies">
          <p>Copyright © 2025 Akin Analytics Pvt Limited. All rights reserved.</p>
          <p>Terms of Use & Privacy Policy</p>
        </div>
      </footer>
    </ScrollObserver>
  );
};

export default Footer;
