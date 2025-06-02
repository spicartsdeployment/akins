import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const TestimonialsSlider = (props) => {
  const {title, testimonialsData} = props
  console.log('props: ', props);
  console.log('title: ', title);
  console.log('testimonialsData:.............. ', testimonialsData);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = testimonialsData.slice(startIndex, startIndex + 3);

  const handleLeft = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleRight = () => {
    if (startIndex + 3 < testimonialsData.length) setStartIndex(startIndex + 1);
  };

  // ⏱ Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => {
        if (prev + 3 >= testimonialsData.length) return 0;
        return prev + 1;
      });
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className='section-title'>{title}</h2>
      <div className="testimonial-cards">
        {visibleCards.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <button className="read-more">Read more...</button>
          </div>
        ))}
      </div>

      {/* ✅ Arrow buttons side by side below the cards */}
      <div className="slider-buttons">
        <button onClick={handleLeft} disabled={startIndex === 0}>
          <FaArrowLeft />
        </button>
        <button onClick={handleRight} disabled={startIndex + 3 >= testimonialsData.length}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
