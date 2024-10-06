// Icon.js
import React from 'react';
import '../../styles/Icon.css';

const Icon = ({ name }) => {
  return <i className={`icon-${name}`}></i>; // Giả định sử dụng một thư viện biểu tượng
};

export default Icon;
