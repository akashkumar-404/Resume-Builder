// CVPage.js
import React from 'react';
import CVSection from './CVSection';
import './CVPage.css';
import { getLogIn, setLogIn, setlogOut } from '../Utils/common';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CVPage = () => {

    const personalInfo = localStorage.getItem('personalInfo') || '';
    const education = localStorage.getItem('education') || '';
    const workExperience = localStorage.getItem('workExperience') || '';
    const skills = localStorage.getItem('skills') || '';
    const checkLogin = getLogIn();
    console.log(checkLogin);
    const navigate = useNavigate()
    const handleLogin = () => {
        if ((checkLogin == false) || (checkLogin == null)) {
            navigate('/login')
        }
        console.log(checkLogin)
        if (checkLogin == true) {
            setlogOut();
            navigate('/cv')
        }
    }
    return (
        <div className="cv-container">
            <div className='cv-header'><h2>CV</h2><Button onClick={handleLogin}>{(checkLogin == false) || (checkLogin == null) ? 'Log In' : 'Log Out'}</Button></div>
            <CVSection title="Personal Information" data={personalInfo} />
            <CVSection title="Education" data={education} />
            <CVSection title="Work Experience" data={workExperience} />
            <CVSection title="Skills" data={skills} />
        </div>
    );
};

export default CVPage;
