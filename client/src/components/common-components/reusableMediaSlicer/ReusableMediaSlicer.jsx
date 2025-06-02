// ReusableMediaSlider.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ReusableMediaSlicer.css';

const ReusableMediaSlider = ({ sectionTitle = '', mediaData = [], visibleCount = 3 }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRight = () => {
    if (startIndex + visibleCount < mediaData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleItems = mediaData.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="sessions-testimonials-section">
      {sectionTitle && <h2 className="section-title">{sectionTitle}</h2>}

      <div className="sessions-testimonial-cards">
        {visibleItems.map((item, index) => (
          <div className="sessions-testimonial-card" key={index}>
            <h3>{item.title}</h3>
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls autoplay loop playsinline
                style={{ width: '100%' }}
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                style={{ width: '100%' }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button onClick={handleLeft} disabled={startIndex === 0}>
          <FaArrowLeft />
        </button>
        <button
          onClick={handleRight}
          disabled={startIndex + visibleCount >= mediaData.length}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ReusableMediaSlider;
