import React from 'react';
import aniga from '../images/aniga.jpg';
import Muscab from '../images/Muscab.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to Smart Study! We are dedicated to providing the best educational resources and tools to help you succeed in your studies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to make learning accessible and enjoyable for everyone. We strive to offer high-quality content and innovative tools to enhance your learning experience.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where education is accessible to all, and where every learner has the resources they need to achieve their full potential.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gray-200 p-4 m-2 rounded-lg w-64">
              <img src={aniga} alt="Aniga" className="rounded-full mb-2 mx-auto"/>
              <h3 className="text-xl font-semibold text-center">Abdullah Ali</h3>
              <p className="text-gray-600 text-center">CEO & Founder & Developer</p>
            </div>
            <div className="bg-gray-200 p-4 m-2 rounded-lg w-64">
              <img src={Muscab} alt="Muscab" className="rounded-full mb-2 mx-auto"/>
              <h3 className="text-xl font-semibold text-center">Muscab</h3>
              <p className="text-gray-600 text-center">Mentor</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;