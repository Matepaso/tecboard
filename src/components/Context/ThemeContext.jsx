// src/context/ThemeContext.js
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    return {
      isDarkMode: savedMode,
      sidebarBg: savedMode ? '#575757ff' : '#c8c9cbff',
      contentBg: savedMode ? '#292424ff' : '#ffffffff',
      textColor: savedMode ? '#ffffff' : '#000000ff',
      cardBg: savedMode ? '#1e1e1e' : '#ffffff',
      borderColor: savedMode ? '#333' : '#eee',
      boxShadow: savedMode ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 15px rgba(0, 0, 0, 0.2)':'0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.05)'
    };
  });

  const toggleDarkMode = () => {
    const newMode = !theme.isDarkMode;
    const newTheme = {
      isDarkMode: newMode,
      sidebarBg: newMode ? '#575757ff' : '#c8c9cbff',
      contentBg: newMode ? '#292424ff' : '#ffffffff',
      textColor: newMode ? '#ffffff' : '#000000ff',
      cardBg: newMode ? '#1e1e1e' : '#ffffff',
      borderColor: newMode ? '#333' : '#eee',
      boxShadow: newMode ? '0 4px 6px rgba(0, 0, 0, 0.3), 0 10px 15px rgba(0, 0, 0, 0.2)':'0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.05)'
    };
    
    setTheme(newTheme);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};