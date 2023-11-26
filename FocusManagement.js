// src/components/FocusManagement.js

import React, { useState, useEffect } from 'react';
import './FocusManagement.css'; // Add corresponding CSS file for styling

const FocusManagement = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use useEffect to manage focus when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const firstMenuItem = document.getElementById('menu-item-1');
      if (firstMenuItem) {
        firstMenuItem.focus();
      }
    }
  }, [isMenuOpen]);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle keyboard navigation within the menu
  const handleKeyPress = (e, menuItemNumber) => {
    if (e.key === 'Enter') {
      // Handle Enter key press (perform menu item action)
      alert(`Clicked on Menu Item ${menuItemNumber}`);
    } else if (e.key === 'Escape') {
      // Handle Escape key press (close the menu)
      closeMenu();
    } else if (e.key === 'ArrowDown' && menuItemNumber < 3) {
      // Handle ArrowDown key press (move focus to the next menu item)
      const nextMenuItem = document.getElementById(`menu-item-${menuItemNumber + 1}`);
      if (nextMenuItem) {
        nextMenuItem.focus();
      }
    } else if (e.key === 'ArrowUp' && menuItemNumber > 1) {
      // Handle ArrowUp key press (move focus to the previous menu item)
      const prevMenuItem = document.getElementById(`menu-item-${menuItemNumber - 1}`);
      if (prevMenuItem) {
        prevMenuItem.focus();
      }
    }
  };

  return (
    <div className="focus-management">
      <h2>Focus Management</h2>
      <p>
        Keyboard users rely on focus styles and navigation to interact with websites.
        This component demonstrates accessible navigation with proper focus management and keyboard support.
      </p>
      <button className="menu-button" onClick={toggleMenu} aria-expanded={isMenuOpen}>
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isMenuOpen && (
        <nav className="menu" onBlur={closeMenu} tabIndex="0">
          <ul>
            <li>
              <a
                href="#"
                id="menu-item-1"
                tabIndex="0"
                onKeyDown={(e) => handleKeyPress(e, 1)}
              >
                Menu Item 1
              </a>
            </li>
            <li>
              <a
                href="#"
                id="menu-item-2"
                tabIndex="0"
                onKeyDown={(e) => handleKeyPress(e, 2)}
              >
                Menu Item 2
              </a>
            </li>
            <li>
              <a
                href="#"
                id="menu-item-3"
                tabIndex="0"
                onKeyDown={(e) => handleKeyPress(e, 3)}
              >
                Menu Item 3
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default FocusManagement;
