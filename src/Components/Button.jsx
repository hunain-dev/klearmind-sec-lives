import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  btn,
  bgcolor,
  textcolor,
  padding,
  border,
  hoverEffect = true,
  mousehover,
  to,
  onClick,
  fontSize = "text-[1.8vh]", // ✅ new prop with default value
}) => {
  const [hover, setHover] = useState(false);

  const buttonClasses = `figee ${fontSize} border px-6 rounded-full cursor-pointer ${padding} ${border} transition-all duration-150 ${mousehover} ease-in-out`;

  const buttonStyle = {
    backgroundColor: hover && hoverEffect ? "#32140C" : bgcolor,
    color: textcolor,
  };

  const content = hover && hoverEffect ? "for Wellness only" : btn;
  const isExternal = to?.startsWith("http");

  if (to) {
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer">
          <button
            className={buttonClasses}
            style={buttonStyle}
            onMouseEnter={() => hoverEffect && setHover(true)}
            onMouseLeave={() => hoverEffect && setHover(false)}
          >
            {content}
          </button>
        </a>
      );
    } else {
      return (
        <Link to={to}>
          <button
            className={buttonClasses}
            style={buttonStyle}
            onMouseEnter={() => hoverEffect && setHover(true)}
            onMouseLeave={() => hoverEffect && setHover(false)}
          >
            {content}
          </button>
        </Link>
      );
    }
  }

  // ✅ Default (non-link button)
  return (
    <button
      className={buttonClasses}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => hoverEffect && setHover(true)}
      onMouseLeave={() => hoverEffect && setHover(false)}
    >
      {content}
    </button>
  );
};

export default Button;
