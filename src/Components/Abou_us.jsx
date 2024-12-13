import React from 'react'
import abou_us from '../assets/ice-about.png'

const Abou_us = () => {
  return (
    <>
      <div className='main-container bg-[#FCE7F3] py-5'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold text-[#990000] text-center'>About Us</h1>
            <p className='sm:text-center sm:mx-44 mx-5  text-center text-[#B91C1C]'>At Ice Cream Delight, we are passionate about creating the best ice cream experience for our customers. Our ice cream is made with the finest ingredients and a lot of love. Come visit us and taste the difference!</p>
        </div>
        <div className='sm:mx-16 mt-5 sm:flex sm:justify-center mx-5'>
            <img src={abou_us} alt="about_us img"  className='sm:w-[90%]  object-contain rounded-lg'/>
        </div>
      </div>
    </>
  )
}

export default Abou_us
