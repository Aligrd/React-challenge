import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

//
export function ThemeProvider({ children }) {
  const [darkmode, setDarkMode] = useState(false);


  

  const toggleTheme = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={darkmode}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
 