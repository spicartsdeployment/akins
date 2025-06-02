import React, { useRef, useEffect, useState } from 'react';
import './CardsSlider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CardsSlider = ({ title, articlesData }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index, smooth = true) => {
    const { current } = carouselRef;
    if (!current) return;

    const card = current.querySelector('.card');
    if (!card) return;

    const gap = 16;
    const cardWidth = card.offsetWidth + gap;

    current.scrollTo({
      left: cardWidth * index,
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  const handleManualScroll = (direction) => {
    const maxIndex = articlesData.length - 1;
    const newIndex =
      direction === 'left'
        ? currentIndex === 0
          ? maxIndex
          : currentIndex - 1
        : currentIndex === maxIndex
        ? 0
        : currentIndex + 1;

    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 1 >= articlesData.length ? 0 : prev + 1;

        scrollToIndex(nextIndex, nextIndex !== 0);

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [articlesData.length]);

  useEffect(() => {
  const handleScroll = () => {
    const { current } = carouselRef;
    if (!current) return;

    const scrollLeft = current.scrollLeft;
    const card = current.querySelector('.card');
    if (!card) return;

    const gap = 16;
    const cardWidth = card.offsetWidth + gap;

    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  const carousel = carouselRef.current;
  if (carousel) {
    carousel.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (carousel) {
      carousel.removeEventListener('scroll', handleScroll);
    }
  };
}, []);


  return (
    <section className="cards-section">
      <h2 className="section-title">{title}</h2>

      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {articlesData.map((article, index) => (
            <div
              className="card"
              key={index}
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button className="learn-more">Learn more...</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-buttons">
        <button onClick={() => handleManualScroll('left')}>
          <FaArrowLeft />
        </button>
        <button onClick={() => handleManualScroll('right')}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CardsSlider;
