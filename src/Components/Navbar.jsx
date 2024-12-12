import React, { useState } from "react";
import logo from "../assets/newset-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-pink-200 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-pink-400 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-xmark" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center sm:gap-8">
            <a
              href="#home"
              className="text-pink-400 font-bold hover:text-blue-400   transition duration-300"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-pink-400 font-bold hover:text-blue-400   transition duration-300"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-pink-400 font-bold hover:text-blue-400   transition duration-300"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-pink-400 font-bold hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden transition-all duration-500 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-pink-200 px-4 py-2 space-y-2">
          <a
            href="#home"
            className="block text-pink-400 font-bold hover:text-blue-400  transition duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="block text-pink-400 font-bold hover:text-blue-400   transition duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="block text-pink-400 font-bold hover:text-blue-400   transition duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block text-pink-400 font-bold hover:text-blue-400   transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
