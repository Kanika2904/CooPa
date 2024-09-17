import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const validateForm = () => {
    let formErrors = '';
    if (!email) {
      formErrors = 'Email is required.';
    } else if (!password) {
      formErrors = 'Password is required.';
    }
    setErrors(formErrors);
    return !formErrors; // return true if no errors
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
      setEmail('');
      setPassword('');
      // Navigate to Home page after sign-up
      navigate('/home');
    }
  };

  return (
    <div className="phone">
      <div className="sign-up-form-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/200px-Walmart_logo.svg.png" 
          alt="Walmart Logo" 
          className="logo"
        />
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          {errors && <p className="error-message">{errors}</p>}
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
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-link">
          Already have an account? <a href="#" onClick={() => navigate('/login')}>Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
