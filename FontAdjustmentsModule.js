// src/components/FontAdjustmentsModule.js

import React, { useState } from 'react';
import './FontAdjustmentsModule.css';

const FontAdjustmentsModule = () => {
  const [fontAdjustments, setFontAdjustments] = useState({
    fontSize: '16px',
    lineHeight: 1.5,
  });

  const handleAdjustmentsChange = (newAdjustments) => {
    setFontAdjustments(newAdjustments);
  };

  return (
    <div className="font-adjustments-module">
      <h2>Font and Text Adjustments</h2>
      <div className="adjustment-group">
        <label htmlFor="fontSize">Font Size:</label>
        <input
          type="range"
          id="fontSize"
          min="12"
          max="36"
          step="1"
          value={fontAdjustments.fontSize.replace('px', '')}
          onChange={(e) => handleAdjustmentsChange({ fontSize: `${e.target.value}px`, lineHeight: fontAdjustments.lineHeight })}
        />
        <span>{fontAdjustments.fontSize}</span>
      </div>
      <div className="adjustment-group">
        <label htmlFor="lineHeight">Line Height:</label>
        <input
          type="range"
          id="lineHeight"
          min="1"
          max="3"
          step="0.1"
          value={fontAdjustments.lineHeight}
          onChange={(e) => handleAdjustmentsChange({ fontSize: fontAdjustments.fontSize, lineHeight: e.target.value })}
        />
        <span>{fontAdjustments.lineHeight}</span>
      </div>

      {/* Content Section */}
      <div className="content" style={fontAdjustments}>
        <h1>Advanced Font and Text Adjustments Demo</h1>
        <p>
          This is a sample text to demonstrate font and text adjustments. Feel free to customize
          the font size and line height using the adjustment panel above.
        </p>
      </div>
    </div>
  );
};

export default FontAdjustmentsModule;
