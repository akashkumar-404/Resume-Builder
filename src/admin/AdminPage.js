// AdminPage.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate component for redirection
import './AdminPage.css'; // Import CSS file for styling
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const AdminPage = () => {
  const [personalInfo, setPersonalInfo] = useState(localStorage.getItem('personalInfo') || '');
  const [education, setEducation] = useState(localStorage.getItem('education') || '');
  const [workExperience, setWorkExperience] = useState(localStorage.getItem('workExperience') || '');
  const [skills, setSkills] = useState(localStorage.getItem('skills') || '');
  const [isDataSaved, setIsDataSaved] = useState(false);

  const handleSave = () => {

    localStorage.setItem('personalInfo', personalInfo);
    localStorage.setItem('education', education);
    localStorage.setItem('workExperience', workExperience);
    localStorage.setItem('skills', skills);
    alert('Data saved successfully!');

    setIsDataSaved(true);
  };


  if (isDataSaved) {
    return <Navigate to="/cv" />;
  }

  return (
    <div className="admin-container">
      <h2>CV Editing</h2>
      <div className="cv-section">
        <label>Personal Information:</label>
        <TextareaAutosize minRows={4} value={personalInfo} onChange={(e) => setPersonalInfo(e.target.value)} />
      </div>
      <div className="cv-section">
        <label>Education:</label>
        <TextareaAutosize minRows={4} value={education} onChange={(e) => setEducation(e.target.value)} />
      </div>
      <div className="cv-section">
        <label>Work Experience:</label>
        <TextareaAutosize minRows={4} value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />
      </div>
      <div className="cv-section">
        <label>Skills:</label>
        <TextareaAutosize minRows={4} value={skills} onChange={(e) => setSkills(e.target.value)} />
      </div>
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminPage;
