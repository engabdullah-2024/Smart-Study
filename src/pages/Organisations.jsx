import React, { useState } from "react";
import smartlogo from '../images/smartlogo.jpg'; // Import your local image

const Organisations = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);

  const handleSelectOrg = (org) => {
    setSelectedOrg(selectedOrg === org ? null : org); // Toggle on click
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Our Organisations</h2>
        <p className="mt-4 text-lg text-gray-600">Explore our affiliated organisations.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Alfurqan Modern School */}
          <div
            onClick={() => handleSelectOrg('Alfurqan')}
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50 duration-300 ease-in-out cursor-pointer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dNAD1P563iM-v3YS0VJWRW-N6d4nJhD6dQ&s" // Replace with actual Alfurqan logo image URL
              alt="Alfurqan Modern School Logo"
              className="w-32 h-32 object-contain transition-transform transform hover:scale-110 duration-200 ease-in-out"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 transition-all duration-200 hover:text-indigo-600">
              Alfurqan Modern School
            </h3>
            <p className="mt-2 text-sm text-gray-500 transition-all duration-200 hover:text-gray-700">
              A leading modern school providing quality education.
            </p>

            {/* Alfurqan additional information */}
            {selectedOrg === 'Alfurqan' && (
              <div className="mt-6 text-left text-gray-600">
                <p><strong>Founded:</strong> 2009</p>
                <p><strong>Cohorts:</strong> 18</p>
                <p className="mt-4">Alfurqan Modern School has a reputation for excellence in primary and high school education. The school is known for its innovative teaching methods and strong academic performance.</p>
              </div>
            )}
          </div>

          {/* Smart Study */}
          <div
            onClick={() => handleSelectOrg('SmartStudy')}
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50 duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={smartlogo}
              alt="Smart Study Logo"
              className="w-32 h-32 object-contain transition-transform transform hover:scale-110 duration-200 ease-in-out"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 transition-all duration-200 hover:text-indigo-600">
              Smart Study
            </h3>
            <p className="mt-2 text-sm text-gray-500 transition-all duration-200 hover:text-gray-700">
              An innovative platform for online learning and study resources.
            </p>

            {/* Smart Study additional information */}
            {selectedOrg === 'SmartStudy' && (
              <div className="mt-6 text-left text-gray-600">
                <p><strong>Founded:</strong> 2024</p>
                <p><strong>Features:</strong> E-learning platform, free PDFs, courses, and exams.</p>
                <p className="mt-4">Smart Study offers a comprehensive learning experience with a wide variety of courses and resources. It is designed to provide students with access to educational materials anytime, anywhere.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisations;
