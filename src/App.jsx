import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import HomePage from './pages/HomePage';   // Import the HomePage component
import AboutPage from './pages/AboutPage'; // Import the AboutPage component
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Routes to different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;