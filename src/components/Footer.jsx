import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Smart Study. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Follow us on 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-1">Facebook</a> | 
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-1">Twitter</a> | 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-1">Instagram</a>
        </p>
        <p className="text-sm mt-2">
          <a href="/privacy-policy" className="text-blue-400">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-blue-400">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;