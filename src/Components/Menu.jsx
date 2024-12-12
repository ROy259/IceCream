import React from 'react'
import { useCart } from '../contexts/CartContext';
const Menu = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className='main-container '>

        <div className='my-3'>
            <h1 className='text-[#EC4899] text-4xl font-bold text-center bg-white'>Our Flavors</h1>
        </div>
        <div className='flex flex-col gap-3 sm:gap-6  sm:flex-row sm:flex-wrap sm:justify-around '>
          {
            cartItems.map((item)=>{
              return(
                <div className='image-content flex flex-col sm:h-auto sm:w-[360px] justify-center items-center rounded-lg gap-3 mx-5 p-5 bg-white'>
                <div key={item.id} className='img'>
                  <img src={item.image} alt="item1" className='h-[300px] w-[300px] rounded-lg' />
                </div>
                  <div className='img-info'>
                    <h1 className='text-center font-bold text-xl text-[#374151]'>{item.name}</h1>
                    <p className='text-center'>{item.description}</p>
                    <p className='text-[#EC4899] text-center font-semibold'>{item.price}</p>
    
                  </div>
              </div>

              )
            })
          }
          {/* <div className='image-content flex flex-col sm:h-auto sm:w-[360px] justify-center items-center rounded-lg gap-3 mx-5 p-5 bg-white'>
            <div className='img'>
              <img src={vanilla} alt="item1" className='h-[300px] w-[300px] rounded-lg' />
            </div>
              <div className='img-info'>
                <h1 className='text-center font-bold text-xl text-[#374151]'>Vanilla</h1>
                <p className='text-center'>Classic and creamy vanilla ice cream made with real vanilla beans.</p>
                <p className='text-[#EC4899] text-center font-semibold'>₹49</p>

              </div>
          </div> */}
          
        </div>
        


      </div>
    </>
  )
}

export default Menu
