


import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <div className='main-container'>
        <section className="min-h-screen bg-red-200">
          <h1 className='text-center text-3xl text-crimsonRed font-bold  pt-4 font-pacifico'>Contact Us</h1>
          <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-gray-800 lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get a quote</h1>

                <p className="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

                <div className="mt-6 space-y-8 md:mt-8">
                  <p className="flex items-start -mx-2">
                    <IoLocation className='text-3xl text-pink-600' />
                    <span className="mx-2 text-gray-800 truncate w-72">
                      Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                    </span>
                  </p>

                  <p className="flex items-start -mx-2">
                    <MdWifiCalling3 className='text-3xl text-pink-600' />
                    <span className="mx-2 text-gray-800 truncate w-72">(257) 563-7401</span>
                  </p>

                  <p className="flex items-start -mx-2">
                    <IoMailUnread className='text-3xl text-pink-600' />
                    <span className="mx-2 text-gray-800 truncate w-72">ice-fy@gmail.com</span>
                  </p>
                </div>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-black font-semibold ">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 gap-3">
                    <a className="mx-1.5 text-gray-800 transition-colors duration-300 transform hover:text-pink-500" href="#">
                      <FaFacebookSquare className='text-3xl text-pink-600' />
                    </a>

                    <a className="mx-1.5 text-gray-800 transition-colors duration-300 transform hover:text-pink-500" href="#">
                      <FaYoutube className='text-3xl text-pink-600' />
                    </a>

                    <a className="mx-1.5 text-gray-800 transition-colors duration-300 transform hover:text-pink-500" href="#">
                      <FaXTwitter className='text-3xl text-pink-600' />
                    </a>

                    <a className="mx-1.5 text-gray-800 transition-colors duration-300 transform hover:text-pink-500" href="#">
                      <FaInstagram className='text-3xl text-pink-600' />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700">Contact form</h1>

                  <form className="mt-4">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                      <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600">Email address</label>
                      <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600">Message</label>
                      <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Message"></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-400 focus:ring-opacity-50">
                      Get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;


