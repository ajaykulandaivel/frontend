// Settings.js
import React, { useState, useEffect } from 'react';

const Settings = () => {
  // State variables for user preferences
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [highContrast, setHighContrast] = useState(false); // Default high contrast mode

  // Effect to update the document styles when preferences change
  useEffect(() => {
    // Update the root document styles based on user preferences
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.style.filter = highContrast ? 'invert(100%)' : 'none';

    // Save preferences to local storage
    localStorage.setItem('userPreferences', JSON.stringify({ fontSize, highContrast }));
  }, [fontSize, highContrast]);

  // Function to handle font size change
  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
  };

  // Function to handle high contrast mode change
  const handleHighContrastChange = () => {
    setHighContrast((prevContrast) => !prevContrast);
  };

  return (
    <div>
      <h2>Accessibility Settings</h2>

      <div>
        <label htmlFor="fontSize">Font Size:</label>
        <input
          type="number"
          id="fontSize"
          value={fontSize}
          onChange={(e) => handleFontSizeChange(Number(e.target.value))}
        />
      </div>

      <div>
      <div>
        <label htmlFor="highContrast">High Contrast Mode:</label>
        <div>
        <input
        type="checkbox"
        id="highContrast"
        checked={highContrast}
        onChange={handleHighContrastChange}
        />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
