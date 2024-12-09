import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'; // Router Link for navigation
// import Tarbiyo from '../images/Tarbiyo.jpg';
// import Carabi from '../images/Carabi.jpg';
// import Physics from '../images/Physics.jpg';
// import English from '../images/English.jpeg';
import Tech from '../image/Tech.jpg';
// import Taariikh from '../images/Taariikh.jpg';
import Somali from '../images/Somali.jpg';
import Saynis from '../image/Saynis.jpg';

const ClassEight = () => {
  const [selectedSubject, setSelectedSubject] = useState(null); // Track clicked subject

  const subjects = [
    // { name: "Tarbiyo", image: Tarbiyo, pdf: "/pdf/Tarbiyo.pdf", description: "Tarbiyo Promotes awareness and appreciation of Islamic history, traditions, and cultures, fostering interfaith dialogue and respect.." },
    // { name: "Carabi", image: Carabi, pdf: "/pdf/Arabic.pdf", description: "Carabi provides students with Arabic language skills." },
    { name: "Somali", image: Somali, pdf: "/pdfs/Somali.pdf", description: "Somali covers the rich culture and language of Somalia." },
    // { name: "Taariikh", image: Taariikh, pdf: "/pdf/Taariikh.pdf", description: "Taariikh explores the history of Somalia and the world." },
    // { name: "Physics", image: Physics, pdf: "/pdf/Physics.pdf", description: "Physics explains the fundamental laws of nature and the universe." },
    // { name: "English", image: English, pdf: "/pdf/English.pdf", description: "English helps students develop communication skills in the English language." },
    { name: "Technology", image: Tech, pdfs: "/pdf/Teach.pdf", description: "Business introduces students to economics, entrepreneurship, and finance." },
    { name: "Saynis", image: Saynis, pdf: "/pdfs/Saynis.pdf", description: " introduces students to the study of living organisms, their structure, function, growth, and evolution." },
  ];

  const handleDownload = (subject) => {
    const link = document.createElement('a');
    link.href = subject.pdf;
    link.download = subject.name;
    link.click();
    toast.success('Successfully downloaded');
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject); // Set the selected subject to display its description
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://allsbc.com/wp-content/uploads/2024/07/287676213_402832365227394_1494212232562517921_n.jpg')" }}
    >
      <Toaster />

      {/* Header Section */}
      <div className="animate-slideInLeft text-center">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to Smart Study</h1>
        <p className="text-xl mt-4 text-black">
          Download free PDF resources for Grade 12 subjects below!
        </p>
        <Link to="/quzises">
          <button className="bg-blue-500 text-white px-6 py-2 mt-6 rounded hover:bg-blue-600">
            Take Test
          </button>
        </Link>
      </div>
      <div className='text-blue-500 flex justify-between gap-5 text-3xl'>
       <Link to="/"> <h1>F4</h1></Link>
      <Link to="eight"> <h1>8aad</h1></Link>
      </div>

      {/* Subjects Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideInRight ">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white  border-blue-500 border-4 rounded-lg shadow-lg p-6 transform hover:scale-110 hover:rotate-3 duration-300 cursor-pointer"
            onClick={() => handleSubjectClick(subject)}
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-center text-black">{subject.name}</h2>
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
    </div>
  );
};

export default ClassEight;
