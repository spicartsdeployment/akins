import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = ({
  strings = [],
  autoStart = true,
  loop = true,
  delay = 40, // Typing speed
  deleteSpeed = 50, // Speed of deleting text
  cursor = "|", // Custom cursor
  className = "",
}) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart,
        loop,
        delay,
        deleteSpeed,
        cursor,
      }}
    />
  );
};

export default TypewriterText;
