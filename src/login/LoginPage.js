// LoginPage.js
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { getLogIn, setLogIn } from '../Utils/common';
import './LoginPage.css'
import { Input } from '@mui/material';

const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginChecker,setLoginChecker] = useState(false)
  
  // console.log(isLoggedIn)
  useEffect(()=>{
    const isLoggedIn = getLogIn();
    setLoginChecker(isLoggedIn)
  },[loginChecker])
  const handleLogin = () => {
    // debugger
    // const isLoggedIn = getLogIn();
    login(username, password);
    console.log(loginChecker)
    let loginCk = getLogIn();
    if (loginCk==true) {
      //setLogIn();
      props.setLoginCheckIn(true)
      navigate('/admin');
    } if(loginCk==false) {
      setError('Incorrect username or password');
    }
  };


  return (
    <div className='login-container'>
      <h2>Login</h2>
      <Input className=' login-form' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input className=' login-form' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className='login-button'>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
