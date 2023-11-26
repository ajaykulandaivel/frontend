
import React from 'react';
import { Link } from 'react-router-dom';
import './ExplorePages.css';

const ExplorePages = () => {
  return (
    <div>
      <h1>Explore Pages</h1>
      <nav>
        <ul>
          <li><Link to="/keyboard">Keyboard Navigation</Link></li>
          <li><Link to="/contrast">Contrast Modes Page</Link></li>
          <li><Link to="/text-customization">Text Customization Page</Link></li>
          <li><Link to="/color-checker">Color Contrast Checker Page</Link></li>
          <li><Link to="/shortcuts">Shortcuts Page</Link></li>
          <li><Link to="/fontadjustment">Font and Text Adjustments</Link></li>
          <li><Link to="/focus-management">Focus Management Page</Link></li>
          <li><Link to="/semantic-html">Semantic HTML Showcase Page</Link></li>
          <li><Link to="/setting preferences">Set Accessibility Preferences</Link></li>
          <li><Link to="/aria">ARIA Roles/Labels Page</Link></li>
          <li><Link to="/accessible-forms">Accessible Forms Page</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default ExplorePages;
