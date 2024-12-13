import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdRestaurantMenu, MdMessage, MdContactPhone } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-pink-200  shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              href="#home"
              className=" w-36 h-36 rounded-full object-cover"
            />
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-crimsonRed focus:outline-none"
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
              className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
            >
              <div className="flex">
                <SiHomeassistantcommunitystore className="mt-1" />
                &nbsp;Home
              </div>
            </a>
            <a
              href="#menu"
              className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
            >
              <div className="flex">
                <MdRestaurantMenu className="mt-1" />
                &nbsp;Menu
              </div>
            </a>
            <a
              href="#about"
              className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
            >
              <div className="flex">
                <MdMessage className="mt-1 " />
                &nbsp;About
              </div>
            </a>
            <a
              href="#contact"
              className="text-crimsonRed font-bold hover:text-pink-500 transition duration-300"
            >
              <div className="flex">
                <MdContactPhone className="mt-1 " />
                &nbsp;Contact
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden transition-all duration-500 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-transparent px-4 py-2 space-y-2  ">
          <a
            href="#home"
            className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
          >
            <div className="flex">
              <SiHomeassistantcommunitystore className="mt-1" />
              &nbsp;Home
            </div>
          </a>
          <a
            href="#menu"
            className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
          >
            <div className="flex">
              <MdRestaurantMenu className="mt-1" />
              &nbsp;Menu
            </div>
          </a>
          <a
            href="#about"
            className="text-crimsonRed font-bold hover:text-pink-500   transition duration-300"
          >
            <div className="flex">
              <MdMessage className="mt-1 " />
              &nbsp;About
            </div>
          </a>
          <a
            href="#contact"
            className="text-crimsonRed font-bold hover:text-pink-500 transition duration-300"
          >
            <div className="flex">
              <MdContactPhone className="mt-1 " />
              &nbsp;Contact
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
