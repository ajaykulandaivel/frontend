// src/ColorContrastChecker.js

import React, { useState, useEffect } from 'react';
import tinycolor from 'tinycolor2';

const ColorContrastChecker = () => {
  const [color1, setColor1] = useState('#000000');
  const [color2, setColor2] = useState('#ffffff');
  const [contrastRatio, setContrastRatio] = useState(null);

  const handleColor1Change = (event) => {
    setColor1(event.target.value);
  };

  const handleColor2Change = (event) => {
    setColor2(event.target.value);
  };

  useEffect(() => {
    const color1Contrast = tinycolor(color1).getLuminance();
    const color2Contrast = tinycolor(color2).getLuminance();

    const contrastRatioValue =
      color1Contrast > color2Contrast
        ? (color2Contrast + 0.05) / (color1Contrast + 0.05)
        : (color1Contrast + 0.05) / (color2Contrast + 0.05);

    setContrastRatio(contrastRatioValue);
  }, [color1, color2]);

  return (
    <div>
    <h1>Color Contrast Checker</h1>
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>
        Color 1:
        <input type="color" value={color1} onChange={handleColor1Change} />
      </label>
</div>
<div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>


        Color 2:
        <input type="color" value={color2} onChange={handleColor2Change} />
      </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        <h3>Contrast Ratio:</h3>
        {contrastRatio !== null ? (
          <p style={{ color: 'black' }}>{`1:${contrastRatio.toFixed(2)}`}</p>
        ) : (
          <p style={{ color: 'red', visibility: 'visible' }}>
            Please select valid colors to calculate contrast ratio.
          </p>
        )}
      </div>

      {/* Static message */}
      <div style={{ marginTop: '20px' }}>
     
        <p>
          A color contrast checker is used to ensure that the color combinations in a user interface
          meet accessibility standards.</p>
           <p>Enhancing readability for users with visual impairments and
          improving the overall user experience.</p>
          <p> It's crucial for inclusive design, legal compliance,
          maintaining brand consistency, and identifying issues early in the design and development process.
        </p>
      </div>
    </div>
  );
};

export default ColorContrastChecker;
