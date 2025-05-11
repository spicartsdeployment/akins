import React from 'react';
import '../CommonComps.css';
import classNames from 'classnames';
import { FaArrowRight } from 'react-icons/fa';

export const Button = ({
  text = 'Click me',
  onClick,
  showArrow = false,
  variant = 'primary', // 'primary', 'text', 'ghost'
  noBorder = false,
  noBackground = false,
  gradientBorder = false,
  useGradientBg = false,
  gradientColors = ['#ff7e5f', '#feb47b'],
  customStyle = {},
  textColor,
  bgColor,
  borderColor,
}) => {
  const linearGradient = `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`;

  const gradientStyle = {
    background: linearGradient,
  };

  // Define the button classes based on variant and modifiers
  const buttonClasses = classNames('baseButton', {
    primary: variant === 'primary',
    textOnly: variant === 'text',
    ghost: variant === 'ghost',
    noBorder,
    noBackground,
  });

  // Define the button styles including background, border, text color, and custom styles
  const buttonStyle = {
    background: useGradientBg
      ? linearGradient
      : noBackground
      ? 'transparent' // If noBackground is true, make the button background transparent
      : bgColor || 'transparent', // Use the provided bgColor or default to transparent
    color: textColor || 'inherit',
    borderColor: noBorder ? 'transparent' : borderColor || 'transparent', // No border if noBorder is true
    ...customStyle, // Allow additional custom styles to be passed
  };

  // Define the Button element
  const ButtonElement = (
    <button className={buttonClasses} onClick={onClick} style={buttonStyle}>
      <span>{text}</span>
      {showArrow && <FaArrowRight className="arrowIcon" />}
    </button>
  );

  // If gradientBorder is true, wrap the button with the gradient border
  return gradientBorder ? (
    <div className="gradientBorderWrapper" style={gradientStyle}>
      <button
        className="gradientInner"
        onClick={onClick}
        style={{
          backgroundColor: bgColor || '#fff', // Set custom background color inside the border
          color: textColor || '#000', // Set custom text color
          borderColor: 'transparent', // Ensure no border inside the button
          ...customStyle, // Allow for custom styles
        }}
      >
        <span>{text}</span>
        {showArrow && <FaArrowRight className="arrowIcon" />}
      </button>
    </div>
  ) : (
    ButtonElement
  );
};



// // Solid background with custom border
// <Button text="Custom Colors" bgColor="#222" textColor="#fff" borderColor="#ff6600" />

// // Gradient background (button itself)
	

// // Gradient border only
// <Button text="Gradient Border" gradientBorder gradientColors={['#ff6a00', '#ee0979']} />

// // No background or border
// <Button text="Plain Text" noBackground noBorder variant="text" />