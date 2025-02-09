import React from 'react';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
        {/* Logo and Website Name */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">Smart Study</h1>
          <p className="text-sm text-gray-400">Empowering your learning journey</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://wa.me/613169435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-white"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-6">
        <p>&copy; 2025 Smart Study. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
