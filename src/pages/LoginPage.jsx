import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [thiefMessage, setThiefMessage] = useState(false);

  const navigate = useNavigate();

  const users = [
    { username: 'abdalla', password: 'abdalla1694' },
    { username: 'mustaf', password: 'cawil123' },
    { username: 'arday', password: 'arday2024' },
    { username: 'muscab', password: 'shiiqow9988' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      setShowConfirmation(true);
      setErrorMessage('');
      setThiefMessage(false); // Reset thief message
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  const handleConfirmation = (isSameUser) => {
    if (isSameUser) {
      navigate('/dashboard');
    } else {
      setUsername('');
      setPassword('');
      setShowConfirmation(false);
      setThiefMessage(true); // Display thief message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        {thiefMessage && (
          <p className="text-red-500 text-center mb-4">Go back, thief!</p>
        )}
        {!showConfirmation ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg mb-4">Are you here or another person?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleConfirmation(true)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={() => handleConfirmation(false)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
