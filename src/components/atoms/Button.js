// Button.js
import React from 'react';
import '../../styles/Button.css'; // Import CSS file for styling

const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
