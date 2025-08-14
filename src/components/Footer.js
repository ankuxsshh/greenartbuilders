// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 shadow-mt mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">GREEN ART BUILDERS</h3>
            <p className="text-white-400 mb-4 text-center">
              Welcome to Green Art Builders and Developers, where vision meets reality in the realm of construction and development.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg text-center font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-center">
              <li><a href="#" className="text-white-300 hover:text-white transition duration-300 text-center">Home</a></li>
              <li><a href="#" className="text-white-300 hover:text-white transition duration-300 text-center">About</a></li>
              <li><a href="#" className="text-white-300 hover:text-white transition duration-300 text-center">Projects</a></li>
              <li><a href="#" className="text-white-300 hover:text-white transition duration-300 text-center">Services</a></li>
              <li><a href="#" className="text-white-300 hover:text-white transition duration-300 text-center">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Contact</h4>
            <address className="text-white-300 not-italic mb-4 text-center">
              <p className="mb-2">Medayil Tower, Ayathil,</p>
              <p className="mb-2">Kollam, Kerala - 691021</p>
              <p className="mb-2"> +91 79071 85324</p>
              <p className="mb-4"> +91 98954 60474</p>
              <a href="mailto:info@greenartbuilders.com" className="text-white-300 hover:text-white transition duration-300">
                info@greenartbuilders.com
              </a>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Follow us on</h4>
            <div className="flex space-x-12 justify-center mb-4">
              <a href="#" className="text-white-300 hover:text-white text-xl transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-white-300 hover:text-white text-xl transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white-300 hover:text-white text-xl transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white-300 hover:text-white text-xl transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white-700 mt-12 pt-8 text-center text-white-400">
          <p>©2025 All Right Reserved</p>
          <p className="mt-2">Designed & Developed by Inspirezest Technologies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;