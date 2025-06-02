import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../../src/assets/images/not-found.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img src={notFoundImage} alt="404 Illustration" className="notfound-image" />
      <p className="notfound-text">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="notfound-button">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
