import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./MilestoneTimeline.css";

const milestones = [
  { year: 1998, content: "Started R&D Phase" },
  { year: 1999, content: "Company Founded" },
  { year: 2000, content: "First Product Launched" },
  { year: 2001, content: "Expansion Begins" },
  { year: 2003, content: "Entered International Market" },
  { year: 2004, content: "Major Investment Raised" },
  { year: 2005, content: "Award-Winning Innovation" },
  { year: 2006, content: "IPO Launched" },
  { year: 2012, content: "Reached 1M Users" },
  { year: 2013, content: "AI Adoption" },
  { year: 2014, content: "Smart Solutions Released" },
  { year: 2015, content: "Partnership with XCorp" },
  { year: 2016, content: "Market Leader in Region" },
];

const MilestoneTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      scrollToDot(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < milestones.length - 1) {
      setActiveIndex(activeIndex + 1);
      scrollToDot(activeIndex + 1);
    }
  };

  const scrollToDot = (index) => {
    const timeline = timelineRef.current;
    const dot = timeline?.children[index];
    dot?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="milestone-container">
      <h2 className="milestone-header">Milestones</h2>

      <div className="timeline-box">
        <button
          className="arrow-button"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
        >
          <FaArrowLeft />
        </button>

        <div className="timeline-scroll">
          <div className="timeline" ref={timelineRef}>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {milestone.year}
              </div>
            ))}
          </div>
        </div>

        <button
          className="arrow-button"
          onClick={handleNext}
          disabled={activeIndex === milestones.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="milestone-details">
        <h1 className="milestone-details-year">{milestones[activeIndex].year}</h1>
        <div className="milestone-desc-container">

          <p>{milestones[activeIndex].content}</p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
