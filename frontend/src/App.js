import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/Signup';
import './App.css';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <Router>
      <div className={`app ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
        <Header isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage isLightTheme={isLightTheme} />} />
          <Route path="/signup" element={<SignUp isLightTheme={isLightTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;