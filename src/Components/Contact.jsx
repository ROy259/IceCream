import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Contact = () => {
  return (
    <div className='main-container bg-red-200 p-5'>
      <div>
        <h1 className='font-pacifico text-crimsonRed text-4xl font-bold text-center '>Contact Us</h1>
      </div>

      <div className='flex justify-around items-center gap-10 mt-10'>

     
      <div className=''>
        <h1 className='text-xl font-semibold  ml-3 mb-4'>Get in Touch</h1>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-3 items-center text-gray-800  '><IoMailUnread className='text-2xl font-semibold text-[#991b1b]'/> Ice-fy12@gmail.com</li>
          <li className='flex gap-3 items-center text-gray-800  '><MdWifiCalling3 className='text-2xl font-semibold text-[#991b1b]'/> +91 1234567890</li>
          <li className='flex gap-3 items-center text-gray-800  '><TbWorld className='text-2xl font-semibold text-[#991b1b]'/> www.ice-fy.site.com</li>
          <li className='flex gap-3 items-center  text-gray-800 '><IoLocation className='text-2xl font-semibold text-[#991b1b]'/> 123 Anywhere st, Any City,ST 585-123</li>
        </ul>
      </div>
        <div>
          <h1 className='text-xl font-semibold  ml-3 mb-4'>Follow Us</h1>
          <ul className='flex flex-col gap-2'>
             <li className='flex gap-3 items-center text-gray-800 '><FaInstagram className='text-2xl  text-[#991b1b] font-bold'/>Instagram</li>
             <li className='flex gap-3 items-center text-gray-800  '><FaFacebookSquare className='text-2xl font-semibold text-[#991b1b] '/>Facebook</li>
             <li className='flex gap-3 items-center text-gray-800  '><FaXTwitter className='text-2xl font-semibold text-[#991b1b] '/>Twittes-X</li>
          </ul>
        </div>
       </div>
       <p className='text-center mt-9'>© 2024, Ice-Fy, Inc. or its affiliates.</p>
      
    </div>
  )
}

export default Contact
