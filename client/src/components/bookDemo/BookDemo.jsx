import React, { useState } from "react";
import "./BookDemo.css";

const BookDemo = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
    product: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please accept the terms and conditions.");
      return;
    }
    console.log("Form Submitted:", formData);
    // Handle actual submission here
    onClose();
  };

  return (
    <>
      <div className={`backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`book-demo-panel ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book a Demo</h2>
        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select AI Product</option>
            <option value="Voice AI">Voice AI</option>
            <option value="Drone Analytics">Drone Analytics</option>
            <option value="Akin AIP">Akin AIP</option>
          </select>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
            />
            I agree to the terms and conditions.
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookDemo;
