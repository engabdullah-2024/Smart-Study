import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8 mt-10">
      <h1 className="text-4xl font-bold text-center text-white">Contact Us</h1>
      <p className="text-xl mt-4 text-center text-white">
        Reach out to us for any inquiries or assistance!
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInLeft ">
        {/* Email Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaEnvelope className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold">Email Us</h2>
          <p className="text-gray-700 mt-2">iltirepoi@gmail.com</p>
        </div>

        {/* Phone Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaPhone className="text-6xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold">Call Us</h2>
          <p className="text-gray-700 mt-2">+252 613169435</p>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaMapMarkerAlt className="text-6xl text-red-500 mb-4" />
          <h2 className="text-2xl font-bold">Visit Us</h2>
          <p className="text-gray-700 mt-2">Ceelasha Biyaha-Somalia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;