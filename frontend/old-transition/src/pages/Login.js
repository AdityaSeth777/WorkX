// src/pages/Login.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css';

const Login = () => {
  const history = useHistory();

  const handleFreelancerLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        history.push('/freelancer-dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBusinessLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        history.push('/business-dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="login-buttons">
        <button onClick={handleFreelancerLogin}>Sign in as Freelancer</button>
        <button onClick={handleBusinessLogin}>Sign in as Business</button>
      </div>
    </div>
  );
};

export default Login;
