import React, { useState, useEffect } from 'react';
import { FaRobot, FaGraduationCap, FaBook, FaClock, FaUsers, FaQuestionCircle } from 'react-icons/fa';

const Chat = () => {
  // Function to calculate time remaining until 31st April
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-04-31T00:00:00'); // Target date (31st April)
    const currentDate = new Date();

    // Time difference in milliseconds
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) return null;

    // Calculate time left in days, hours, minutes, seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white">
      <div className="text-center mb-6 p-6 bg-opacity-75 rounded-xl shadow-lg max-w-lg mx-auto">
        <FaRobot className="text-6xl mb-4 animate-bounce" />
        <h1 className="text-4xl font-extrabold tracking-tight">AI Q&A for Grade 12</h1>
        <p className="text-lg mt-2">Get instant answers for all 12th Grade subjects</p>
      </div>

      <div className="mt-8 text-lg text-center max-w-3xl px-4 space-y-6">
        <div className="flex items-center justify-center space-x-2">
          <FaGraduationCap className="text-4xl text-yellow-300" />
          <h2 className="text-xl font-semibold">Features:</h2>
        </div>

        <ul className="list-none pl-6 space-y-6 text-lg">
          <li className="flex items-center space-x-3">
            <FaBook className="text-3xl text-green-400" />
            <span>Q&A for every subject in Grade 12</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaQuestionCircle className="text-3xl text-blue-400" />
            <span>Detailed explanations to simplify complex concepts</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaClock className="text-3xl text-yellow-400" />
            <span>Study anytime, anywhere with 24/7 availability</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaUsers className="text-3xl text-purple-400" />
            <span>Interactive and personalized learning experience</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaRobot className="text-3xl text-pink-400" />
            <span>AI-driven feedback to improve your understanding</span>
          </li>
        </ul>
      </div>

      {/* Countdown Timer */}
      {timeLeft ? (
        <div className="mt-8 text-xl font-bold text-center">
          <p>Works on after:</p>
          <div className="flex space-x-4 mt-4">
            <div className="p-4 bg-white text-black rounded-lg">
              <p className="text-2xl font-semibold">{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg">
              <p className="text-2xl font-semibold">{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg">
              <p className="text-2xl font-semibold">{timeLeft.minutes}</p>
              <p>Minutes</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg">
              <p className="text-2xl font-semibold">{timeLeft.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-xl font-bold">The time has come!</div>
      )}

      <div className="mt-8">
        <p className="text-xl font-bold animate-pulse">Coming Soon...</p>
      </div>

      <div className="mt-8">
        <div className="w-32 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Chat;
