// src/components/Shortcut.js

import React, { useEffect, useState } from 'react';
import './Shortcut.css';

const Shortcut = () => {
  const [shortcutInfo, setShortcutInfo] = useState('');
  const [shortcutFunctions, setShortcutFunctions] = useState({
    A: 'Show Alert A',
    B: 'Show Alert B',
    C: 'Special Action: Ctrl + C',
    D: 'Perform Action D',
    E: 'Perform Action E',
    F: 'Perform Action F',
    G: 'Perform Action G',
    'Shift + H': 'Special Combination: Shift + H',
  });

  const handleShortcuts = (event) => {
    const key = event.key.toUpperCase();

    switch (key) {
      case 'A':
        setShortcutInfo(shortcutFunctions.A);
        break;
      case 'B':
        setShortcutInfo(shortcutFunctions.B);
        break;
      case 'C':
        if (event.ctrlKey) {
          setShortcutInfo(shortcutFunctions.C);
        }
        break;
      case 'D':
        setShortcutInfo(shortcutFunctions.D);
        break;
      case 'E':
        setShortcutInfo(shortcutFunctions.E);
        break;
      case 'F':
        setShortcutInfo(shortcutFunctions.F);
        break;
      case 'G':
        setShortcutInfo(shortcutFunctions.G);
        break;
      case 'H':
        if (event.shiftKey) {
          setShortcutInfo(shortcutFunctions['Shift + H']);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleShortcuts);

    return () => {
      document.removeEventListener('keydown', handleShortcuts);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="shortcut-container">
      <h1>Advanced Keyboard Shortcuts Demo</h1>
      <p>Press keys to see their functions:</p>
      <ul className="shortcut-list">
        {Object.entries(shortcutFunctions).map(([key, func]) => (
          <li key={key}>{`${key}: ${func}`}</li>
        ))}
      </ul>
      {shortcutInfo && <div className="shortcut-info">{shortcutInfo}</div>}
    </div>
  );
};

export default Shortcut;
