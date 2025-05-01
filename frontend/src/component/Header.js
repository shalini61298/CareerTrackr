import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assests/job-search.png';
import './Header.css';

const Header = ({ isLightTheme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-section" onClick={() => navigate('/')}>
        <img src={logo} alt="JobLogix Logo" className="logo" />
        <span className="app-name">CarrerTrackr</span>
      </div>
      <div className="auth-buttons">

  <button onClick={toggleTheme} className="auth-button theme-toggle">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</svg>
    {isLightTheme ? 'Dark' : 'Light'}
  </button>
  <button   className="auth-button login-button"
  onClick={() => navigate('/login')}>Login</button>
  <button className="auth-button signup-button"
   onClick={() => navigate('/signup')}>Signup</button>
</div>
    </header>
  );
};

export default Header;