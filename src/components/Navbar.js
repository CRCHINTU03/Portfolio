import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-gray-900 shadow-lg fixed top-0 w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Title/Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/" className="hover:text-blue-300 transition duration-300 ease-in-out">
            Chittaranjan Tadikonda
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;