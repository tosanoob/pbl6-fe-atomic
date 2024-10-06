// Typography.js
import React from 'react';
import '../../styles/Typography.css';

const Heading = ({ level, children }) => {
  const Tag = `h${level}`;
  return <Tag className={`heading heading-${level}`}>{children}</Tag>;
};

const Paragraph = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export { Heading, Paragraph };
