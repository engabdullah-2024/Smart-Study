import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import HomePage from './pages/HomePage';   // Import the HomePage component
import AboutPage from './pages/AboutPage'; // Import the AboutPage component
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import Footer from './components/Footer';

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
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;