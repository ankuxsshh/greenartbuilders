// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-6 z-50 shadow-sm">
      <div className="container mx-auto">
        {/* Top Bar (Logo + Toggle Button) */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-green-900">
            GREENART BUILDERS
          </h1>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex justify-end mt-4 md:mt-0">
          <div className="flex space-x-2 md:space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Contact Us'].map((item) => (
              <a 
                key={item}
                href={`${item.replace(' ', '')}Page`} 
                className="text-green-900 hover:text-green-600 transition duration-300 font-medium py-2"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div className={`
        md:hidden bg-white overflow-hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="container mx-auto pb-6 flex flex-col space-y-4 pt-6">
          {['Home', 'About', 'Services', 'Gallery', 'Contact Us'].map((item) => (
            <a 
              key={item}
              href={`${item.replace(' ', '')}Page`}
              onClick={closeMenu}
              className="
                text-green-900 hover:text-green-600 
                transition duration-300 font-medium
                py-3 px-4 rounded-lg hover:bg-green-50
                transform hover:translate-x-2
                transition-all duration-300
              "
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;