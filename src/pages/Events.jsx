import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaCalendarAlt, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const Events = () => {
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [showDetails, setShowDetails] = useState(null);
  const [showForm, setShowForm] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('joinedEvents')) || [];
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || { name: '', email: '' };
    setJoinedEvents(storedEvents);
    setUserInfo(storedUserInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem('joinedEvents', JSON.stringify(joinedEvents));
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [joinedEvents, userInfo]);

  const handleJoinEvent = (eventName) => {
    setShowForm(eventName);
  };

  const handleShowDetails = (eventName) => {
    if (showDetails === eventName) {
      setShowDetails(null);
    } else {
      setShowDetails(eventName);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInfo.name && userInfo.email) {
      setJoinedEvents([...joinedEvents, { ...userInfo, eventName: showForm }]);
      setShowForm(null);
      alert("You've successfully joined the event!");
    } else {
      alert("Please fill in both fields!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">Upcoming Study Events</h2>
        <p className="mt-4 text-xl text-gray-600">
          Join our events to boost your study habits and enhance your academic skills!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Event 1 - How to Be an A+ Student */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-6">
            <div className="text-3xl text-green-600">
              <FaTrophy />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">How to Be an A+ Student</h3>
            <p className="mt-2 text-gray-600">Learn the tips and strategies that top students use to ace their exams and assignments.</p>

            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => handleJoinEvent("How to Be an A+ Student")}
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 ${joinedEvents.some(event => event.eventName === "How to Be an A+ Student") ? "bg-blue-400 cursor-not-allowed" : ""}`}
                disabled={joinedEvents.some(event => event.eventName === "How to Be an A+ Student")}
              >
                <FaChalkboardTeacher className="mr-2" /> {joinedEvents.some(event => event.eventName === "How to Be an A+ Student") ? "Joined" : "Join Now"}
              </button>
              <button 
                onClick={() => handleShowDetails("How to Be an A+ Student")}
                className="bg-yellow-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-yellow-700 transition duration-300"
              >
                <FaCalendarAlt className="mr-2" /> {showDetails === "How to Be an A+ Student" ? "Hide Details" : "View Event"}
              </button>
            </div>

            {showDetails === "How to Be an A+ Student" && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600">
                  This session will provide in-depth tips, study techniques, and mindset strategies for achieving top grades. Learn how to stay organized, set goals, and approach exams with confidence. 
                  Don't miss this chance to boost your study habits!
                </p>
              </div>
            )}

            {showForm === "How to Be an A+ Student" && (
              <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">Join Event: How to Be an A+ Student</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      Join Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Event 2 - Time Management for Students */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-6">
            <div className="text-3xl text-blue-600">
              <FaBullhorn />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Time Management for Students</h3>
            <p className="mt-2 text-gray-600">Master time management techniques to stay ahead in your academic life.</p>

            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => handleJoinEvent("Time Management for Students")}
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 ${joinedEvents.some(event => event.eventName === "Time Management for Students") ? "bg-blue-400 cursor-not-allowed" : ""}`}
                disabled={joinedEvents.some(event => event.eventName === "Time Management for Students")}
              >
                <FaChalkboardTeacher className="mr-2" /> {joinedEvents.some(event => event.eventName === "Time Management for Students") ? "Joined" : "Join Now"}
              </button>
              <button 
                onClick={() => handleShowDetails("Time Management for Students")}
                className="bg-yellow-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-yellow-700 transition duration-300"
              >
                <FaCalendarAlt className="mr-2" /> {showDetails === "Time Management for Students" ? "Hide Details" : "View Event"}
              </button>
            </div>

            {showDetails === "Time Management for Students" && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600">
                  Learn the best practices for managing your time effectively. This event will guide you on how to prioritize tasks, avoid procrastination, and improve your productivity.
                </p>
              </div>
            )}

            {showForm === "Time Management for Students" && (
              <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">Join Event: Time Management for Students</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      Join Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Event 3 - Motivational Session */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
          <div className="p-6">
            <div className="text-3xl text-red-600">
              <FaBullhorn />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Motivational Session</h3>
            <p className="mt-2 text-gray-600">Stay motivated and learn techniques to push through tough times and keep going towards your academic goals.</p>

            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => handleJoinEvent("Motivational Session")}
                className={`bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-blue-700 transition duration-300 ${joinedEvents.some(event => event.eventName === "Motivational Session") ? "bg-blue-400 cursor-not-allowed" : ""}`}
                disabled={joinedEvents.some(event => event.eventName === "Motivational Session")}
              >
                <FaChalkboardTeacher className="mr-2" /> {joinedEvents.some(event => event.eventName === "Motivational Session") ? "Joined" : "Join Now"}
              </button>
              <button 
                onClick={() => handleShowDetails("Motivational Session")}
                className="bg-yellow-600 text-white py-2 px-6 rounded-lg flex items-center hover:bg-yellow-700 transition duration-300"
              >
                <FaCalendarAlt className="mr-2" /> {showDetails === "Motivational Session" ? "Hide Details" : "View Event"}
              </button>
            </div>

            {showDetails === "Motivational Session" && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600">
                  Join this powerful session to learn how to stay motivated and keep pushing towards your academic and personal goals, even when faced with challenges.
                </p>
              </div>
            )}

            {showForm === "Motivational Session" && (
              <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800">Join Event: Motivational Session</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      Join Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
