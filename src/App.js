// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import AdminPage from './admin/AdminPage';
import CVPage from './cv/CVPage';
import { useAuth } from './auth'; // Import useAuth hook for authentication
import { getLogIn, setlogOut } from './Utils/common';

function App() {
  const isLoggedIn = getLogIn();
  const [loginCheckIn,setLoginCheckIn] = useState(false);
  useEffect(()=>{
setlogOut();
  },[])
  useEffect(()=>{
    console.log(loginCheckIn);
  },[loginCheckIn])
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setLoginCheckIn={setLoginCheckIn}/>} />
        <Route path="/admin" element={loginCheckIn==true ? <AdminPage /> : <Navigate to="/login" />} />
        <Route path="/cv" element={ <CVPage /> } /> {/* Add route for CVPage */}
        <Route path="/" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
