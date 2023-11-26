// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* ... (other content) */}

      <div className="call-to-action">
      <div>
        <h1>Get Started</h1>
        <p>
          Ready to take on the challenge?
          </p>
          <p><b>Explore the details and start building your accessible web app today.</b> 
        </p>
        <Link to="/explore-pages">
          <button>Explore Now</button>
        </Link>
        </div>
      </div>

      {/* ... (other content) */}
    </div>
  );
};

export default HomePage;
