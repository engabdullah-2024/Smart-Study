import React from 'react';
import { FaProjectDiagram, FaSmile, FaBullseye, FaHandsHelping, FaUserCircle, FaStar } from 'react-icons/fa'; 
import aniga from "../images/aniga.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8">
      <div className='animate-slideInDown'> 
        <h1 className="text-4xl font-bold text-center text-white">About Smart Study</h1>
        <p className="mt-4 text-center text-white">
          Smart Study is a dedicated platform for Grade 12 students to access free PDF resources
          tailored to enhance their learning experience. Our mission is to provide a convenient and
          user-friendly repository for important study materials across various subjects, 
          including Islamic and Arabic studies. We aim to support students in their academic journey 
          by making essential resources easily accessible.
        </p>
      </div>

      {/* Developer Section */}
      <h2 className="text-2xl font-semibold mt-8 text-center text-white">About the Developer</h2>
      <div className="flex items-center justify-center mt-4 animate-slideInDown">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg flex flex-col items-center">
          <img 
            className="w-40 h-40 max-w-full transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300 rounded-full border-4 border-orange-500" 
            src={aniga} 
            alt="Developer Illustration" 
          />
          <div className="text-white text-center mt-4">
            <p className="mb-2">
              I am a Grade 12 student with a passion for web development and design. As a fullstack developer,
              I have worked on various projects, honing my skills in both frontend and backend technologies. 
              I designed and managed this website to create a valuable resource for my peers, 
              helping them access essential educational materials efficiently.
            </p>
            <ul className="mt-2 list-disc list-inside text-left">
              <li>Grade 12 Student</li>
              <li>Fullstack Developer</li>
              <li>Designer</li>
              <li>Website Manager</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Box for 40+ Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center animate-slideInLeft transition-transform transform hover:scale-105 duration-300">
          <FaProjectDiagram className="text-6xl text-green-500 mb-4" />
          <h2 className="text-3xl font-bold">40+ Projects</h2>
          <p className="text-gray-700 text-center mt-2">
            Our team has completed over 40 projects, helping students access high-quality educational content.
          </p>
        </div>

        {/* Box for 100+ Happy Clients */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center animate-slideInRight transition-transform transform hover:scale-105 duration-300">
          <FaSmile className="text-6xl text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold">100+ Happy Clients</h2>
          <p className="text-gray-700 text-center mt-2">
            We are proud to have served over 100 happy clients with our dedication and commitment to quality.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <h2 className="text-2xl font-semibold mt-12 text-center text-white">Our Vision and Mission</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaBullseye className="text-6xl text-blue-500 mb-4 " />
          <h3 className="text-3xl font-bold text-white">Our Vision</h3>
          <p className="text-gray-300 text-center mt-2">
            To empower every student with the knowledge and resources they need to excel academically and achieve their dreams.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaHandsHelping className="text-6xl text-purple-500 mb-4" />
          <h3 className="text-3xl font-bold text-white">Our Mission</h3>
          <p className="text-gray-300 text-center mt-2">
            To provide accessible educational resources that foster a love of learning and support students in their academic journey.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="text-2xl font-semibold mt-12 text-center text-white">Testimonials</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaUserCircle className="text-4xl text-blue-400 mb-2" />
          <p className="text-gray-300 italic">"Smart Study  has been a game changer for my studies! The resources are top-notch and easy to access." - Student A</p>
          <div className="flex mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-gray-400" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaUserCircle className="text-4xl text-blue-400 mb-2" />
          <p className="text-gray-300 italic">"I love how user-friendly the site is. It's made my study sessions much more productive!" - Student B</p>
          <div className="flex mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-gray-400" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaUserCircle className="text-4xl text-blue-400 mb-2" />
          <p className="text-gray-300 italic">"The variety of subjects available is fantastic! I found everything I needed in one place." - Student C</p>
          <div className="flex mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaUserCircle className="text-4xl text-blue-400 mb-2" />
          <p className="text-gray-300 italic">"This platform is a lifesaver for any student. Highly recommended!" - Student D</p>
          <div className="flex mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage