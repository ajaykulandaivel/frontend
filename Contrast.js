import React, { useState } from 'react';
import './Contrast.css'; // Import your styles for this component

const Contrast = () => {
  const [highContrastMode, setHighContrastMode] = useState(false);

  const toggleHighContrastMode = () => {
    setHighContrastMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${highContrastMode ? 'high-contrast' : ''}`}>
    <h1>Contrast Mode Page</h1>
      <header>
        
        <p><b>High Contrast:</b>

     Essential for users with visual impairments,
     Improves clarity and reduces eye strain,
         Creates a modern, visually distinct design.
        <p>
       <b> Low Contrast:</b>
        
        Offers subtlety, elegance, and a calm atmosphere.
        Used for specific moods or artistic designs,
        Some users may prefer softer, less visually intense designs.</p>
        </p>
      </header>

      <main>
        <button onClick={toggleHighContrastMode}>
          Toggle High Contrast Mode
        </button>
      </main>
    </div>
  );
};

export default Contrast;
