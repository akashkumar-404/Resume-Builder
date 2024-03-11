// HomePage.js
import React from 'react';
import CVSection from '../CVSection'; // Import CVSection component

const HomePage = () => {
  // Fetch and display data from local storage for each CV section
  return (
    <div>
      <h1>CV Generator</h1>
      <CVSection title="Personal Information" data={localStorage.getItem('personalInfo')} />
      <CVSection title="Education" data={localStorage.getItem('education')} />
      <CVSection title="Work Experience" data={localStorage.getItem('workExperience')} />
      <CVSection title="Skills" data={localStorage.getItem('skills')} />
    </div>
  );
};

export default HomePage;
