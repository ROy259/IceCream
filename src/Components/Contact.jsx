import React from 'react'

const Contact = () => {
  return (
    <div className='  mt-6 bg-red-200 mb-3 pb-5'>
        <div className='flex justify-center'>

            <h1 className='text-5xl font-pacifico text-crimsonRed mt-4'>Contact Us</h1>
        </div>
            <div className='flex flex-col justify-center items-center mt-5'>
            <label htmlFor="" className='text-crimsonRed text-xl font-serif font-semibold'>Email</label>
                  <p>ice-fy@gmail.com</p>
                  <br />
                  <br />
                  <label htmlFor="" className='text-crimsonRed text-xl font-serif font-semibold'>Phone</label>
                  <p>311-555-0100</p>
                  <br />
                  <br />
                  <label htmlFor="" className='text-crimsonRed text-xl font-serif font-semibold'>Web</label>
                  <p>www.ice-fy.site.com</p>

            </div>
         



      
    </div>
  )
}

export default Contact
