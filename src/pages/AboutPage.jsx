// AboutPage.js
import React, { useEffect } from 'react';
import {  FaBullseye, FaHandsHelping, } from 'react-icons/fa'; 
import aniga from "../images/aniga.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-white-8">
      <div data-aos="fade-down">
        <h1 className="text-4xl font-bold text-center text-blue-500">About Smart Study</h1>
        <p className="mt-4 text-center text-black">
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

     

      
      
    </div>
  );
};

export default AboutPage;
