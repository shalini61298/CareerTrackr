import React from 'react';
import './Signup.css';
import Google from '../assests/google.png';

const SignUp = ({ isLightTheme }) => {
  return (
    <div className={`signup-container  ${isLightTheme ? 'light-theme' : ''}`}>
      <div className="signup-box">
        <h2>Create your account</h2>

        <div className="social-buttons">
          <button className="social-button">
            <img src={Google} alt="Google" />
            Google
          </button>
        </div>

        <div className="divider">or sign up with email</div>

        <form className="signup-form">
          <input type="text" placeholder="Your name*" />
          <input type="email" placeholder="Email*" />
          <input type="password" placeholder="Password*" />


          <button type="submit" className="submit-button">CREATE AN ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
