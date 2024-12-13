import React from 'react'
import abou_us from '../assets/ice-about.png'

const Abou_us = () => {
  return (
    <>
      <div className='main-container bg-[#FCE7F3] py-5'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-bold text-[#EC4899] text-center'>About Us</h1>
            <p className='text-center mx-44'>At Ice Cream Delight, we are passionate about creating the best ice cream experience for our customers. Our ice cream is made with the finest ingredients and a lot of love. Come visit us and taste the difference!</p>
        </div>
        <div>
            <img src={abou_us} alt="about_us img"  className='w-full object-contain'/>
        </div>
      </div>
    </>
  )
}

export default Abou_us
