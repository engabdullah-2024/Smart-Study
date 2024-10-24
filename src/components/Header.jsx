import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu and close
import { Link } from 'react-router-dom';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false); // State to toggle the nav

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-500 via-gray-800 to-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <FaBook className="text-white text-2xl mr-2 mt-1" /> {/* Logo Icon */}
            <h1 className="text-white text-2xl font-bold">Smart Study</h1> {/* Website Name */}
          </Link>
        </div>

        {/* Menu Icon (Mobile View) */}
        <div className="sm:hidden">
          {navOpen ? (
            <FaTimes onClick={toggleNav} className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleNav} className="text-white text-3xl cursor-pointer" />
          )}
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            navOpen ? 'block' : 'hidden'
          } absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent sm:flex sm:space-x-3 p-4 sm:p-0 z-10`}
        >
          <Link to="/" className="text-white block sm:inline-block text-lg hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white block sm:inline-block text-lg hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-white block sm:inline-block text-lg hover:underline">
            Contact
          </Link>
          <Link to="/blogpage" className="text-white block sm:inline-block text-lg hover:underline">
            Blog
          </Link>
          <Link to="/login" className="text-white block sm:inline-block text-lg hover:underline">
            Admin
          </Link>
          <Link to="/quiz" className="text-white block sm:inline-block text-lg hover:underline">
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
