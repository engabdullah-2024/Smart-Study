import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import the ThemeContext
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons from react-icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access the theme and toggle function

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-blue-500 text-white rounded-md m-4 flex items-center"
    >
      {/* Toggle the icon based on the theme */}
      {theme === "dark" ? (
        <FaSun className="mr-2" />
      ) : (
        <FaMoon className="mr-2" />
      )}
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
