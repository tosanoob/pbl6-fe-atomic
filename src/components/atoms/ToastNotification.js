// ToastNotification.js
import React from 'react';
import '../../styles/ToastNotification.css';

const ToastNotification = ({ message, onClose }) => {
  return (
    <div className="toast-notification">
      <span>{message}</span>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default ToastNotification;
