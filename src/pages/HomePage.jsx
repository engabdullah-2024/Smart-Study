import React from 'react';
import Tarbiyo from '../images/Tarbiyo.jpg'; // Correct import path
import Carabi from '../images/Carabi.jpg'; // Correct import path
import Physics from '../images/Physics.jpg'; // Correct import path
import English from '../images/English.jpeg'; // Correct import path
import Bio from '../images/Bio.jpg'; // Correct import path
import Chemistry from '../images/Chemistry.jpg'; // Correct import path
import Business from '../images/Business.jpg'; // Correct import path
import Taariikh from '../images/Taariikh.jpg'; // Correct import path

const HomePage = () => {
  const subjects = [
    {
      name: "Tarbiyo",
      image: Tarbiyo,
      pdf: "/pdf/Tarbiyo.pdf",
    },
    {
      name: "Carabi",
      image: Carabi,
      pdf: "/pdf/Arabic.pdf",
    },
    {
      name: "Taaiikh",
      image: Taariikh,
      pdf: "/pdf/Taariikh.pdf",
    },
    {
      name: "Physics",
      image: Physics,
      pdf: "/pdf/Physics.pdf",
    },
    {
      name: "English",
      image: English,
      pdf: "/pdf/English.pdf",
    },
    {
      name: "Biology",
      image: Bio,
      pdf: "/pdf/Biology.pdf",
    },
    {
      name: "Chemistry",
      image: Chemistry,
      pdf: "/pdf/Chemistry.pdf",
    },
    {
      name: "Business",
      image: Business,
      pdf: "/pdf/Business.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8">
     <div className='animate-slideInLeft'>
     <h1 className="text-4xl font-bold text-center text-white">Welcome to Smart Study</h1>
      <p className="text-xl mt-4 text-center text-white">
        Download free PDF resources for Grade 12 subjects below!
      </p>
     </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8  animate-slideInRight ">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6  transition-transform transform hover:scale-110 hover:rotate-3 hover:shadow-lg duration-300">
            <img 
              src={subject.image} 
              alt={subject.name} 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-center text-black">{subject.name}</h2>
            <div className="mt-4 text-center">
              <a 
                href={subject.pdf} 
                download // Adding the download attribute
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage
