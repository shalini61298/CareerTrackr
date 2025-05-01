import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Google from '../assests/google.png';

const LoginPage = ({ isLightTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={`login-page ${isLightTheme ? 'light-theme' : ''}`}>
      <div className="login-card">
        <div className='line'></div>
        <h2 className="login-title">Login Here</h2>
        <p className="login-subtitle">Start managing your job applications...</p>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="login-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="login-input"
            />
          </div>
          
          <div className="login-actions">
            <button type="submit" className="login-button-page">Login</button>
            <button type="button" className="reset-button">Reset</button>
          </div>
        </form>
        
        <div className="login-divider">
          <span>or</span>
        </div>
        
        <button className="google-login-button">
          <img src={Google} alt="View Jobs" className="google-image" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;