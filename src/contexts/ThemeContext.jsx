import React, { createContext, useState, useEffect } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create the ThemeProvider component to provide the theme to your app
export const ThemeProvider = ({ children }) => {
  // Get the saved theme from localStorage, or default to 'light'
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    // Apply the 'dark' class to the root HTML element if the theme is 'dark'
    document.documentElement.classList.toggle("dark", theme === "dark");
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
