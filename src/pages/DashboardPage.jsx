// src/components/Dashboard.js

import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
  Filler
);

const Dashboard = () => {
  // Sample data for the charts
  const barData = {
    labels: ['Tarbiyo', 'Carabi', 'Taariikh', 'Physics', 'English', 'Biology', 'Chemistry', 'Business'],
    datasets: [
      {
        label: 'Total Downloads',
        data: [50, 45, 40, 5, 2, 3, 10, 8], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Downloads',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        tension: 0.4, // This makes the line smooth
      },
    ],
  };

  const doughnutData = {
    labels: ['Tarbiyo', 'Carabi', 'Taariikh', 'Physics'],
    datasets: [
      {
        label: 'Subject Distribution',
        data: [300, 50, 100, 150],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1000, // Duration of animations in milliseconds
      easing: 'easeInOutQuad', // Easing function
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Dashboard Charts',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <h1 className="text-2xl font-semi-bold mb-4">Your Admin Area</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl mb-4">Total of Subjects: 8</h2>
        <h2 className="text-2xl mb-4">Total of PDFs: 8</h2>
        <Bar data={barData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl mb-4">Monthly Downloads</h2>
        <Line data={lineData} options={options} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Subject Distribution</h2>
        <Doughnut data={doughnutData} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;