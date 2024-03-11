// CVSection.js
import React from 'react';
import './CVSection.css'; // Import CSS file for styling

const CVSection = ({ title, data }) => {
  return (
    <div className="cv-section">
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  );
};

export default CVSection;
