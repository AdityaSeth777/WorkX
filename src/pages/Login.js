import React from 'react';
import { auth, provider } from '../firebase';

function Login() {
  const handleGoogleSignIn = async () => {
    try {
      await auth.signInWithPopup(provider);
      window.location.href = '/profile';
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleSignIn} style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer' }}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
