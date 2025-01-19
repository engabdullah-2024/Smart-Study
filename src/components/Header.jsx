import React, { useState } from 'react';
import { FaBook, FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu and close
import { Link } from 'react-router-dom';
import { SiSmartthings } from "react-icons/si";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false); // State to toggle the nav

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center text-3xl">
          <Link to="/" className="flex items-center">
            <SiSmartthings className="text-blue-500  mr-2 mt-1" /> {/* Logo Icon */}
            <h1 className="text-blue-500 font-bold">Smart Study</h1> {/* Website Name */}
          </Link>
        </div>

        {/* Menu Icon (Mobile View) */}
        <div className="sm:hidden">
          {navOpen ? (
            <FaTimes onClick={toggleNav} className="text-blue-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleNav} className="text-blue-500 text-3xl cursor-pointer" />
          )}
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            navOpen ? 'block' : 'hidden'
          } absolute sm:static top-16 left-0 w-full sm:w-auto bg-white bg-opacity-60 backdrop-blur-md shadow  sm:bg-transparent sm:flex sm:space-x-3 p-4 sm:p-0 z-10`}
        >
          <Link to="/" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Contact
          </Link>
          <Link to="/blogpage" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Blog
          </Link>
          <Link to="/login" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Admin
          </Link>
          <Link to="/quiz" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Quiz
          </Link>
          <Link to="/resources" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Resources
          </Link>
          <Link to="/dev" className="text-blue-500 block sm:inline-block text-lg hover:underline">
            Dev
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
