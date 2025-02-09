import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import HomePage from './pages/HomePage';   // Import the HomePage component
import AboutPage from './pages/AboutPage'; // Import the AboutPage component
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';

import DashboardPage from './pages/DashboardPage';
import QuizPage from './pages/QuizPage';
import ClassEight from './pages/ClassEight';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';
import AboutDev from './pages/AboutDev';
import Eight from './pages/ResourcesEight';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Exams from './pages/Exams';
import HappyClients from './pages/HappyClients';
import Events from './pages/Events';
import Testimonials from './pages/Testominls';
import Organisations from './pages/Organisations';

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
          
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/eight" element={<ClassEight />} />
          <Route path="/quzises" element={<Quiz />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/dev" element={<AboutDev />} />
          <Route path="/eights" element={<Eight />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/happy" element={<HappyClients />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testominls" element={<Testimonials />} />
          <Route path="/org" element={<Organisations />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;