import React, { useState } from 'react';
import './HoverImageSwitcher.css';
import { IMAGES } from '../constant';

const items = [
  { label: 'Construction sites.', image: IMAGES.BgDroneImg },
  { label: 'Stockpile monitoring.', image: IMAGES.COEaboutimage },
  { label: 'Crash scenes.', image: IMAGES.COEsec1img2 },
  { label: 'Transportation infrastructure.', image: IMAGES.COEsec1img4 },
  { label: 'Urban planning.', image: IMAGES.COEsec1img5 },
  { label: 'And more.', image: IMAGES.DummyImage }
];

const HoverImageList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positionDirection, setPositionDirection] = useState('left');

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    // setPositionDirection(Math.random() > 0.5 ? 'left' : 'right');
  };

  return (
    <div className="hover-wrapper">
      <h1 className="headline">
        Versatile mapping and surveying <br /> solutions anytime, anywhere
      </h1>

      <div className="inline-labels">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div
                className="hover-image"
                // style={{
                //   left: positionDirection === 'left' ? '-50px' : '150px',
                // }}
              >
                <img src={item.image} alt={item.label} />
              </div>
            )}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HoverImageList;
