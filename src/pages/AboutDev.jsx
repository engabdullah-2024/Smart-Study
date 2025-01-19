import React from 'react';
import aniga from '../images/aniga.jpg'; // Adjust path as needed

const AboutDev = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0">
      {/* Developer Image */}
      <div className="flex-shrink-0">
        <img
          src={aniga} // Using the imported image
          alt="Abdullah Ali"
          className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg animate-slideInLeft"
        />
      </div>

      {/* Developer Info */}
      <div className="text-center md:text-left md:ml-8 animate-slideInRight">
        <h2 className="text-3xl font-semibold text-gray-800">Abdullah Ali</h2>

        {/* Typing and Deleting Effect for Title */}
        <h3 className="text-xl mt-2">
          <span className="inline-block overflow-hidden border-r-4 border-gray-600 animate-typingAndDeleting whitespace-nowrap">
            Fullstack Dev / UX Designer
          </span>
        </h3>

        <p className="text-lg text-gray-700 mt-4 max-w-lg mx-auto md:mx-0">
          A passionate Fullstack Developer with a focus on creating seamless and intuitive user experiences. I have a deep
          interest in both the technical and design aspects of web development. I specialize in crafting responsive, user-friendly
          websites and applications. My skills range from frontend technologies like React.js and Tailwind CSS, to backend
          technologies like Node.js and MongoDB. I am always eager to learn new technologies and improve my craft.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Grade: <span className="font-semibold">12</span>
        </p>
      </div>
    </div>
  );
};

export default AboutDev;
