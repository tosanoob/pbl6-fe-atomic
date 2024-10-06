// Image.js
import React from 'react';
import '../../styles/Image.css';

const Image = ({ src, alt }) => {
  return <img className="image" src={src} alt={alt} />;
};

export default Image;
