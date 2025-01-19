import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'; // Router Link for navigation
import { FaBook, FaChalkboardTeacher, FaLaptopCode, FaGraduationCap, FaBookReader, FaCertificate, FaUserGraduate, FaQuoteLeft, FaQuoteRight, FaStar, FaEye, FaBullseye, FaLightbulb, FaHandsHelping, FaGlobe, FaUsers, FaChartLine, FaRegSmile, FaRegHandshake } from 'react-icons/fa';
import Tarbiyo from '../images/Tarbiyo.jpg';
import Carabi from '../images/Carabi.jpg';
import Physics from '../images/Physics.jpg';
import English from '../images/English.jpeg';
import Business from '../images/Business.jpg';
import Taariikh from '../images/Taariikh.jpg';
import Somali from '../images/Somali.jpg';
import Bio from '../images/Bio.jpg';

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null); // Track clicked subject

  const subjects = [
    { name: "Tarbiyo", image: Tarbiyo, pdf: "/pdf/Tarbiyo.pdf", description: "Tarbiyo Promotes awareness and appreciation of Islamic history, traditions, and cultures, fostering interfaith dialogue and respect.." },
    { name: "Carabi", image: Carabi, pdf: "/pdf/Arabic.pdf", description: "Carabi provides students with Arabic language skills." },
    { name: "Somali", image: Somali, pdf: "/pdf/Somali.pdf", description: "Somali covers the rich culture and language of Somalia." },
    { name: "Taariikh", image: Taariikh, pdf: "/pdf/Taariikh.pdf", description: "Taariikh explores the history of Somalia and the world." },
    { name: "Physics", image: Physics, pdf: "/pdf/Physics.pdf", description: "Physics explains the fundamental laws of nature and the universe." },
    { name: "English", image: English, pdf: "/pdf/English.pdf", description: "English helps students develop communication skills in the English language." },
    { name: "Business", image: Business, pdf: "/pdf/Business.pdf", description: "Business introduces students to economics, entrepreneurship, and finance." },
    { name: "Biology", image: Bio, pdf: "/pdf/Biology.pdf", description: " introduces students to the study of living organisms, their structure, function, growth, and evolution." },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "Smart Study has transformed my learning experience. The resources are top-notch and the teachers are incredibly supportive.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
    },
    {
      name: "Jane Smith",
      feedback: "The interactive courses and extensive library have helped me excel in my studies. I highly recommend Smart Study to all students.",
      rating: 4,
      image: "https://img.freepik.com/free-photo/portrait-young-woman-smiling-against-white-wall_23-2148218617.jpg"
    },
    {
      name: "Michael Johnson",
      feedback: "The certifications I earned from Smart Study have opened up new career opportunities for me. Thank you, Smart Study!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-smiling-young-man_23-2148208763.jpg"
    },
    {
      name: "Emily Davis",
      feedback: "Smart Study's resources are comprehensive and easy to understand. I've improved my grades significantly.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-young-woman-smiling-against-white-wall_23-2148218617.jpg"
    },
    {
      name: "David Brown",
      feedback: "The support from the Smart Study team has been amazing. They are always ready to help.",
      rating: 4,
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
    },
    {
      name: "Sophia Wilson",
      feedback: "The interactive courses have made learning fun and engaging. I highly recommend Smart Study.",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-young-woman-smiling-against-white-wall_23-2148218617.jpg"
    }
  ];

  const handleDownload = (subject) => {
    const link = document.createElement('a');
    link.href = subject.pdf;
    link.download = subject.name;
    link.click();
    toast.success('Successfully downloaded')
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject); // Set the selected subject to display its description
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <Toaster />

      {/* Header Section */}
      <div className="animate-slideInLeft text-center">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-white">Welcome to Smart Study</h1>
        <p className="text-xl mt-4 text-black dark:text-gray-300">
          Download free PDF resources for Grade 12 subjects below!
        </p>
        <Link to="/quiz">
          <button className="bg-blue-500 text-white px-6 py-2 mt-6 rounded hover:bg-blue-600">
            Take Test
          </button>
        </Link>
      </div>
      <div className='text-blue-500 dark:text-white flex justify-between gap-5 text-3xl'>
        <h1>F4</h1>
        <Link to="eight"> <h1>8aad</h1></Link>
      </div>
      <div className='text-center'>
        <button className='bg-blue-500 text-white text-2xl font-bold p-2 rounded-lg hover:bg-blue-600'>Watch Now</button>
      </div>

      {/* Subjects Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInRight">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 transform hover:scale-110 hover:rotate-3 duration-300 cursor-pointer"
            onClick={() => handleSubjectClick(subject)}
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-center text-black dark:text-white">{subject.name}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering subject click
                handleDownload(subject);
              }}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>

      {/* Description Section */}
      {selectedSubject && (
        <div className="mt-12 bg-gray-800 rounded-lg p-6 text-white shadow-lg">
          <h2 className="text-3xl font-bold">{selectedSubject.name}</h2>
          <p className="mt-4">{selectedSubject.description}</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setSelectedSubject(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Features Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaChalkboardTeacher className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Expert Teachers</h3>
            <p className="text-blue-500 dark:text-white">Learn from industry experts with years of experience.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaLaptopCode className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Interactive Courses</h3>
            <p className="text-blue-500 dark:text-white">Engage in hands-on learning with interactive courses.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaGraduationCap className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Certifications</h3>
            <p className="text-blue-500 dark:text-white">Earn certificates to showcase your skills and knowledge.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaBookReader className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Extensive Library</h3>
            <p className="text-blue-500 dark:text-white">Access a wide range of study materials and resources.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaCertificate className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Accredited Programs</h3>
            <p className="text-blue-500 dark:text-white">Enroll in programs accredited by leading institutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaUserGraduate className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Alumni Network</h3>
            <p className="text-blue-500 dark:text-white">Join a network of successful alumni around the world.</p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaEye className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Global Reach</h3>
            <p className="text-blue-500 dark:text-white">Expand our educational resources to students worldwide.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaLightbulb className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Innovative Learning</h3>
            <p className="text-blue-500 dark:text-white">Incorporate the latest technology to enhance learning experiences.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaHandsHelping className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Community Support</h3>
            <p className="text-blue-500 dark:text-white">Build a supportive community for students and educators.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaGlobe className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Sustainable Education</h3>
            <p className="text-blue-500 dark:text-white">Promote sustainable practices in education.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaUsers className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Inclusive Learning</h3>
            <p className="text-blue-500 dark:text-white">Ensure education is accessible to all students.</p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaBullseye className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Student Success</h3>
            <p className="text-blue-500 dark:text-white">Empower students to achieve their academic goals.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaChartLine className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Continuous Improvement</h3>
            <p className="text-blue-500 dark:text-white">Continuously improve our educational resources and services.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaRegSmile className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Positive Environment</h3>
            <p className="text-blue-500 dark:text-white">Create a positive and engaging learning environment.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaRegHandshake className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Partnerships</h3>
            <p className="text-blue-500 dark:text-white">Foster partnerships with educational institutions and organizations.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 text-center">
            <FaLightbulb className="text-blue-500 dark:text-white text-5xl mb-4" />
            <h3 className="text-xl font-bold text-blue-500 dark:text-white">Innovation</h3>
            <p className="text-blue-500 dark:text-white">Encourage innovation in teaching and learning.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border-blue-500 dark:border-white border-4 rounded-lg shadow-lg p-6 transform hover:scale-105 duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-500 dark:text-white">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-500 dark:text-white mb-4">
                <FaQuoteLeft className="inline mr-2" />
                {testimonial.feedback}
                <FaQuoteRight className="inline ml-2" />
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;