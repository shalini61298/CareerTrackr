import React from 'react';
import dashboardImg from '../assests/Dashboard.png';
import addJobImg from '../assests/JobApplication.png';
import viewJobsImg from '../assests/ViewJobApplication.png';
import './MainSection.css';

const MainSection = () => {
  return (
    <main className="main-section">
      <h1 className="main-title">Streamline Your Path to Success</h1>
      <p className="subtitle">
        "Effortlessly track all your job applications in one place."
      </p>
      
      <div className="cards-container">
        <div className="card">
          <img src={dashboardImg} alt="Dashboard" className="card-image" />
          <h2>Dashboard</h2>
          <p>Overview of your application progress and stats.</p>
        </div>
        
        <div className="card">
          <img src={addJobImg} alt="Add Job" className="card-image" />
          <h2>Add Job Application</h2>
          <p>Quickly add new job applications.</p>
        </div>
        
        <div className="card">
          <img src={viewJobsImg} alt="View Jobs" className="card-image" />
          <h2>View Job Applications</h2>
          <p>Browse, manage and track your applications list.</p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;