import React from "react";

const SectionIntro = ({ title, description, onRequestDemo, children }) => {
  return (
    <section className="section-intro">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onRequestDemo}>Request Demo</button>
      <div className="extra-content">{children}</div>
    </section>
  );
};

export default SectionIntro;