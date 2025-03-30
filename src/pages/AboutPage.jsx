import React from 'react';
import aniga from '../images/aniga.jpg';
import muscab from '../images/Muscab.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center text-blue-700 mb-8">About Us</h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          Welcome to Smart Study! We are dedicated to providing the best educational resources and tools to help you succeed in your studies.
        </p>

        {/* Mission and Vision Section with Vertical Line */}
        <div className="flex justify-center items-center space-x-12 mb-12">
          <div className="flex flex-col items-center w-1/2 p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-center">
              Our mission is to make learning accessible and enjoyable for everyone. We strive to offer high-quality content and innovative tools to enhance your learning experience.
            </p>
          </div>
          
          {/* Vertical Line */}
          <div className="w-1 bg-gray-300 h-32 my-auto"></div>

          <div className="flex flex-col items-center w-1/2 p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-center">
              We envision a world where education is accessible to all, and where every learner has the resources they need to achieve their full potential.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-white p-6 rounded-lg shadow-xl w-64 text-center transform transition-all hover:scale-105 hover:shadow-2xl">
              <img 
                src={aniga} 
                alt="Aniga" 
                className="rounded-full mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600">Abdullah Ali</h3>
              <p className="text-gray-600">CEO & Founder & Developer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl w-64 text-center transform transition-all hover:scale-105 hover:shadow-2xl">
              <img 
                src={muscab} 
                alt="Muscab" 
                className="rounded-full mb-4 mx-auto w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-600">Muscab</h3>
              <p className="text-gray-600">Mentor</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
