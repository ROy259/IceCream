import React, { useState } from 'react'
import logo from '../assets/newset-logo.png';

const Navbar = () => {
    const [isMenuopen,setIsMenuOpen]=useState(false)

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuopen)
    }

  return (
    <div>
      <nav className='bg-white sm:px-32 sm:justify-between sm:items-center sm:flex py-2 w-full '>
        <div className='flex justify-between px-4'>
         <img src={logo} alt="logo"  className='h-16 w-16 rounded-full'/>
         <button onClick={toggleMenu} className='sm:hidden focus:outline-none'><i className="fa-solid fa-bars text-xl"></i></button>
        </div>

        <div
          className={`${
            isMenuopen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:gap-7 mt-4 sm:mt-0 px-4 sm:px-0  transition-all duration-700 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 ">
            <li className="cursor-pointer hover:text-pink-400 ">Home</li>
            <li className="cursor-pointer hover:text-pink-400">Menu</li>
            <li className="cursor-pointer hover:text-pink-400">About Us</li>
            <li className="cursor-pointer hover:text-pink-400">Contact</li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
