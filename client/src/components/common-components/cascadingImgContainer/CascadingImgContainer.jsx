import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CascadingImgContainer.css';
// import { cardData } from '../constant';

const CascadingImageSlider = ({cardData}) => {
  const [startIndex, setStartIndex] = useState(0);

  const shiftLeft = () => {
    setStartIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const shiftRight = () => {
    setStartIndex((prev) => (prev + 1) % cardData.length);
  };

  const getDisplayedCards = () => {
    return Array.from({ length: 5 }, (_, i) => cardData[(startIndex + i) % cardData.length]);
  };

  const sizeClasses = ['small', 'medium', 'large', 'medium', 'small'];

  return (
    <div className="cascading-container">
      <h2 className='section-title'>Course Details with Use Case</h2>
      <div className="cascading-wrapper">
        <FaChevronLeft className="arrow left-arrow" onClick={shiftLeft} />
        <div className="cascade-img-con">
          {getDisplayedCards().map((card, index) => (
            <div
              key={index}
              className={`cascading-card ${sizeClasses[index]}`}
              style={{ zIndex: index <= 2 ? index + 1 : 5 - index }}
            >
              <img src={card.imageUrl} alt={`card-${index}`} />
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
        <FaChevronRight className="arrow right-arrow" onClick={shiftRight} />
      </div>
    </div>
  );
};

export default CascadingImageSlider;
