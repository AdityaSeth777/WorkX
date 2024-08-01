import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirect to the profile page or home page after successful login
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '8px' }}>
      <h2 style={{ color: '#61dafb' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#61dafb', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
