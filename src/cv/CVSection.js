// CVSection.js
import React from 'react';
import './CVSection.css';

const CVSection = ({ title, data }) => {
  return (
    <div className="cv-section">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default CVSection;
