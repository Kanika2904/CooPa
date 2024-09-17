import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Navigate to Home page after login
    navigate('/home');
  };

  return (
    <div className="app-container">
      <div className="phone">
        <div className="login-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/200px-Walmart_logo.svg.png" 
            alt="Walmart Logo" 
            className="logo"
          />
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
