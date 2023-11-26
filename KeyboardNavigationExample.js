import React, { useState, useEffect } from 'react';

const KeyboardNavigationExample = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentAction, setCurrentAction] = useState('');

  const keyboardNavigationItems = [
    { label: 'Navigate Up', description: 'Move selection up', onClick: handleNavigateUp },
    { label: 'Navigate Down', description: 'Move selection down', onClick: handleNavigateDown },
    { label: 'Select Item', description: 'Select the current item', onClick: handleSelectItem },
    { label: 'Tab Navigation', description: 'Navigate through tabs', onClick: handleTabNavigation },
    { label: 'Caps Lock', description: 'Toggle Caps Lock', onClick: handleCapsLock },
    { label: 'Spacebar Action', description: 'Perform action with Spacebar', onClick: handleSpacebarAction },
    { label: 'Custom Key 1', description: 'Custom action for Key 1', onClick: handleCustomKey1 },
    { label: 'Custom Key 2', description: 'Custom action for Key 2', onClick: handleCustomKey2 },
    { label: 'Custom Key 3', description: 'Custom action for Key 3', onClick: handleCustomKey3 },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          handleNavigateUp();
          break;
        case 'ArrowDown':
          handleNavigateDown();
          break;
        case 'Enter':
          handleSelectItem();
          break;
        case 'Tab':
          handleTabNavigation();
          break;
        case 'CapsLock':
          handleCapsLock();
          break;
        case ' ':
          handleSpacebarAction();
          break;
        // Add more cases for other keys as needed
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedItem, keyboardNavigationItems]);

  function handleNavigateUp() {
    setSelectedItem((prevItem) => (prevItem === 0 ? keyboardNavigationItems.length - 1 : prevItem - 1));
    setCurrentAction(`Navigated Up: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleNavigateDown() {
    setSelectedItem((prevItem) => (prevItem === keyboardNavigationItems.length - 1 ? 0 : prevItem + 1));
    setCurrentAction(`Navigated Down: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleSelectItem() {
    const selectedItemLabel = keyboardNavigationItems[selectedItem].label;
    setCurrentAction(`Selected item: ${selectedItemLabel}`);
  }

  function handleTabNavigation() {
    setCurrentAction(`Tab key pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleCapsLock() {
    setCurrentAction(`Caps Lock key pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleSpacebarAction() {
    setCurrentAction(`Spacebar key pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleCustomKey1() {
    setCurrentAction(`Custom Key 1 pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleCustomKey2() {
    setCurrentAction(`Custom Key 2 pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  function handleCustomKey3() {
    setCurrentAction(`Custom Key 3 pressed: ${keyboardNavigationItems[selectedItem].description}`);
  }

  return (
    <div>
      <h2>Keyboard Navigation Example</h2>
      <p>{currentAction}</p>
      <ul>
        {keyboardNavigationItems.map((item, index) => (
          <li
            key={index}
            style={{ fontWeight: index === selectedItem ? 'bold' : 'normal' }}
            onClick={item.onClick}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyboardNavigationExample;
