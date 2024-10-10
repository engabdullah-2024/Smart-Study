// Header.js
import React from 'react';
import { FaBook } from 'react-icons/fa';  // Logo icon
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-gray-500 via-gray-800 to-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
       <Link to="/">
       <FaBook className="text-white sm:text-4xl mr-2 mt-1" /> {/* Logo Icon */}
         <h1 className="text-white sm:text-3xl font-bold ">Smart Study </h1>  {/* Website Name */}
       </Link>
        </div>
        <nav className="flex space-x-3">
          <Link to="/" className="text-white sm:text-lg hover:underline">Home</Link>
          <Link to="/about" className="text-white sm:text-lg hover:underline">About</Link>
          <Link to="/contact" className="text-white sm:text-lg hover:underline">Contact</Link>
          <Link to="/blogpage" className="text-white sm:text-lg hover:underline">Blog</Link>
          <Link to="/Login" className="text-white sm:text-lg hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header