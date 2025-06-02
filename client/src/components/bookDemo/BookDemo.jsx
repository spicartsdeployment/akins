import React from "react";
import "./BookDemo.css";

const BookDemo = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`book-demo-panel ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book a Demo</h2>
        <p>Add your form or content here.</p>
      </div>
    </>
  );
};

export default BookDemo;
