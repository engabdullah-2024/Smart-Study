// AboutPage.js
import React, { useEffect } from 'react';
import {  FaBullseye, FaHandsHelping, } from 'react-icons/fa'; 
import aniga from "../images/aniga.jpg";
import Muscab from "../images/Muscab.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8 mt-[50%] sm:mt-0">
      <div data-aos="fade-down">
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
      <h2 className="text-2xl font-semibold mt-8 text-center text-white">About the Developer/Director</h2>
      <div className="flex items-center justify-center mt-4" data-aos="fade-up">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg flex flex-col items-center">
          <img 
            className="w-40 h-40 max-w-full transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300 rounded-full border-4 border-orange-500" 
            src={aniga} 
            alt="Developer Illustration" 
          />
          <div className="text-white text-center mt-4">
            <h2 
              className="text-2xl font-semibold mt-8 text-center text-white border-b-4 border-orange-500 inline-block pb-2"
            >
              Abdullah Ali Nor
            </h2>
            <p className="mb-2 mt-5">
              Hello! I am a Grade 12 student with a passion for technology and innovation. As the manager of Smart Study, I lead and inspire students to leverage smart tools for effective learning and academic success.
              Beyond academics, I am a dedicated full-stack developer, building seamless and functional applications, combining both frontend and backend expertise. With a creative eye for detail, I also specialize as a UI/UX designer.
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

      {/* Manager Section */}
      <h2 className="text-2xl font-semibold mt-8 text-center text-white">About the Manager Hub</h2>
      <div className="flex items-center justify-center mt-4" data-aos="fade-up">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg flex flex-col items-center">
          <img 
            className="w-40 h-40 max-w-full transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300 rounded-full border-4 border-orange-500" 
            src={Muscab} 
            alt="Manager Illustration" 
          />
          <div className="text-white text-center mt-4">
            <h2 
              className="text-2xl font-semibold mt-8 text-center text-white border-b-4 border-orange-500 inline-block pb-2"
            >
              Muscab Mohamed Abdullah
            </h2>
            <p className="mb-2 mt-5">
              Muscab Mohamed Abdullah serves as the Manager Hub at Smart Study, overseeing operations and project management. He is certified in essential computer skills, equipping him with the tools necessary for effective management. His friendship with the Director fosters a collaborative environment, enhancing teamwork and driving success.
            </p>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-right" className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaBullseye className="text-6xl text-blue-500 mb-4" />
          <h3 className="text-3xl font-bold text-white">Our Vision</h3>
          <p className="text-gray-300 text-center mt-2">
            To empower every student with the knowledge and resources they need to excel academically and achieve their dreams.
          </p>
        </div>

        <div data-aos="fade-left" className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
          <FaHandsHelping className="text-6xl text-purple-500 mb-4" />
          <h3 className="text-3xl font-bold text-white">Our Mission</h3>
          <p className="text-gray-300 text-center mt-2">
            To provide accessible educational resources that foster a love of learning and support students in their academic journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
