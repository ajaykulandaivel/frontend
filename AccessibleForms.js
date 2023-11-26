// src/components/AccessibleForm.js

import React from 'react';
import './AccessibleForm.css'; // Import the corresponding CSS file for styling

const AccessibleForm = () => {
  return (
    <div className="accessible-form">
      <h2>Accessible Feedback Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
          <small>Format: 1234567890</small>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea id="feedback" name="feedback" rows="4" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccessibleForm;
