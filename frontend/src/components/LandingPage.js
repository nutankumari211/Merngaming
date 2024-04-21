import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="container"> 
      <h1>Welcome to the Criminal Capture Game!</h1>
      <Link to="/city-selection">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default LandingPage;
