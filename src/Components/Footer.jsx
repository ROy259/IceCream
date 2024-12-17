import React from 'react'
import logo from "../assets/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='bg-[#FF7F50] p-3 py-4'>
      <div className='flex justify-around items-center'>

        <div>
          <img src={logo} alt="logo" className='h-20 w-20' />
          <p className='text-justify w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, repudiandae.
          </p>
          
        </div>

          <div>
            <h1 className='text-xl font-semibold text-crimsonRed'>Company</h1>
          
            <ul className='flex flex-col gap-2 mt-2'>
             <li className='hover:underline cursor-pointer'>Home</li>
              <li className='hover:underline cursor-pointer'>About us</li>
              <li className='hover:underline cursor-pointer'>Contact</li>
              <li className='hover:underline cursor-pointer'>FAQs</li>
            </ul>
            </div>
         
          <div>
            <h1 className='text-xl font-semibold text-crimsonRed'>Follow us on</h1>
          
            <ul className='flex flex-col gap-2 mt-2'>
              <li className='flex items-center gap-2'><FaInstagram className='text-xl text-[#D3D3D3] '/> Instagram</li>
              <li className='flex items-center gap-2'><FaFacebookSquare  className='text-xl text-[#D3D3D3]'/> Facebook</li>
              <li className='flex items-center gap-2'><FaXTwitter  className='text-xl text-[#D3D3D3]'/> Twittes</li>
              <li className='flex items-center gap-2'><FaYoutube  className='text-xl text-[#D3D3D3]'/> Youtube</li>
          
            </ul>
            </div>

            <div>
            <h1 className='text-xl font-semibold text-crimsonRed'>Contact</h1>
          
            <ul className='  flex flex-col gap-2 mt-2'>
              <li className='flex items-center gap-2'><IoLocation  className='text-xl text-[#D3D3D3] '/> Warsaw, 57 Street, Poland</li>
              <li className='flex items-center gap-2'><MdWifiCalling3  className='text-xl text-[#D3D3D3]'/> +91 1234566789</li>
              <li className='flex items-center gap-2'><IoMailUnread  className='text-xl text-[#D3D3D3] '/> IoMailUnread</li>

             
            </ul>
            </div>
      </div>
    </div>
  )
}

export default Footer
