import React from 'react'
import home_imge from '../assets/home-ice-img.png'

const Home = () => {
  return (
    <>
    <div className='home-container mt-[1px] '>
    <div className="relative">
  <img
    src={home_imge}
    alt="img-banners"
    className=" w-full object-cover"
  />
  <div className="absolute inset-0 left-1/2 top-1/3 text-white text-center ">
    <h1 className="sm:text-5xl font-bold mb-2 text-[#EC4899] text-xl pr-1">Welcome to Ice-fy Delight.</h1>
    <h6 className="sm:text-base text-[#374151] text-sm">
      The best ice cream in town with a variety of flavors to choose from!
    </h6>
  </div>
</div>
     
    </div>
    </>
  )
}

export default Home
