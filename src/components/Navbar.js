// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-6 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-4 md:mb-0">
          GREENART BUILDERS
        </h1>
        <div className="flex space-x-2 md:space-x-8">
          <a href="/" className="text-green-900 hover:text-green-200 transition duration-300 font-medium">HOME</a>
          <a href="AboutUs" className="text-green-900 hover:text-green-200 transition duration-300 font-medium">ABOUT</a>
          <a href="ServicesPage" className="text-green-900 hover:text-green-200 transition duration-300 font-medium">SERVICES</a>
          <a href="GalleryPage" className="text-green-900 hover:text-green-200 transition duration-300 font-medium">GALLERY</a>
          <a href="ContactPage" className="text-green-900 hover:text-green-200 transition duration-300 font-medium">CONTACT US</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
