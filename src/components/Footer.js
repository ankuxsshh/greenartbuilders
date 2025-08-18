// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-emerald-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">G</span>
              GREEN ART BUILDERS
            </h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Welcome to Green Art Builders and Developers, where vision meets reality in the realm of construction and development.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1PMcWEd7ZJ" className="bg-emerald-800 hover:bg-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://www.instagram.com/team_greenart" className="bg-emerald-800 hover:bg-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-emerald-700">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Home</a>
              </li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>About</a>
              </li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Projects</a>
              </li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Services</a>
              </li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-emerald-700">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start mb-5">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-emerald-100">Medayil Tower, Ayathil, Kollam, Kerala - 691021</p>
              </div>
              <div className="flex items-center mb-5">
                <FaPhone className="text-emerald-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100">+91 79071 85324</p>
                  <p className="text-emerald-100">+91 98954 60474</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-emerald-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@greenartbuilders.com" className="text-emerald-100 hover:text-white transition duration-300">
                  info@greenartbuilders.com
                </a>
              </div>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-emerald-700">Stay Updated</h4>
            <p className="text-emerald-100 mb-4">Subscribe to our newsletter for project updates and offers</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-emerald-800 border border-emerald-700 rounded-lg px-4 py-3 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-emerald-800 pt-8 text-center">
          <p className="text-emerald-300">© 2025 Green Art Builders. All Rights Reserved.</p>
          <p className="text-emerald-400 mt-2 text-sm">Designed & Developed by Inspirezest Technologies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;