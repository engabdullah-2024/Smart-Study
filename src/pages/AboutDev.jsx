import React, { useState } from 'react';
import { FaSun, FaMoon, FaCog, FaCode, FaProjectDiagram } from 'react-icons/fa';
import aniga from '../images/aniga.jpg'; // Adjust path as needed

const AboutDev = () => {
  const [theme, setTheme] = useState('white');
  const [showSettings, setShowSettings] = useState(false);
  
  const themes = ['dark', 'white', 'blue', 'pink', 'red'];
  
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const themeClasses = {
    dark: 'bg-gray-900 text-white border-gray-600',
    white: 'bg-white text-gray-800 border-gray-300',
    blue: 'bg-blue-500 text-white border-blue-700',
    pink: 'bg-pink-500 text-white border-pink-700',
    red: 'bg-red-500 text-white border-red-700',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 space-y-8 ${themeClasses[theme]} min-h-screen`}>
      {/* Theme Settings Button */}
      <div className="absolute top-16 right-5 flex items-center space-x-3">
        <button 
          onClick={() => setShowSettings(!showSettings)} 
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg animate-spin-slow">
          <FaCog className="text-gray-900 dark:text-white" size={24} />
        </button>

        {showSettings && (
          <div className="flex flex-col bg-white p-3 rounded-lg shadow-lg">
            <h3 className="text-gray-900 font-semibold mb-2">Choose Theme:</h3>
            <div className="flex space-x-2">
              {themes.map((t) => (
                <button 
                  key={t} 
                  className={`w-8 h-8 rounded-full ${themeClasses[t]}`} 
                  onClick={() => toggleTheme(t)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Developer Info */}
      <div className="text-center">
        <img src={aniga} alt="Abdullah Ali" className="w-48 h-48 rounded-full border-4 shadow-lg" />
        <h2 className="text-3xl font-semibold mt-4">Abdullah Ali</h2>
        <h3 className="text-xl mt-2">Fullstack Dev / UX Designer</h3>
        <p className="text-lg mt-4 max-w-lg mx-auto">
          Passionate about creating seamless user experiences using modern technologies. Skilled in React.js, Tailwind CSS, Node.js, and MongoDB.
        </p>
        <p className="text-lg mt-4">Grade: <span className="font-semibold">12</span></p>
      </div>

      {/* Skills Section */}
      <section className="text-center w-full max-w-2xl p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center"><FaCode className="mr-2" /> Skills</h3>
        <p>React.js, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, UX/UI Design</p>
      </section>

      {/* Projects Section */}
      <section className="text-center w-full max-w-2xl p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center"><FaProjectDiagram className="mr-2" /> Projects</h3>
        <ul className="list-disc list-inside">
          <li>Fullstack Note App (MERN)</li>
          <li>EduPDF Portal (Grade 12 Resources)</li>
          <li>Assembly Registration System</li>
          <li>Task Manager with Dark Mode</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutDev;
