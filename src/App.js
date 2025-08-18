import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage'; 
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutUs />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/GalleryPage" element={<GalleryPage />} />
            <Route path="/ContactUsPage" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;