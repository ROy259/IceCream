import React from 'react'

const Contact = () => {
  return (
    <div className='main-container'>
        <div className='form-section  bg-pink-50'>

            <form action="" className='flex justify-center items-center flex-col gap-3'>

                <h1 className='text-3xl font-bold text-[#990000]'>Contact Us</h1>

                <p className='mx-5 text-center text-[#B91C1C] '>Have any questions or feedback? We'd love to hear from you!</p>

                <input type="text" placeholder='Your name' required className=' w-[300px] sm:w-[450px] bg-[#ffff] rounded-md shadow-lg border py-2 mb-2 px-3 '/>

                <input type="email" placeholder='Your email' required className=' w-[300px] sm:w-[450px] bg-[#ffff] shadow-lg rounded-md  border mb-2 py-2 px-3 '/>

                <textarea cols="30" rows="2" className='sm:w-[450px] w-[300px] px-3 shadow-lg border mb-2 rounded-md ' required placeholder='Your message'> </textarea>

                <button className='p-1 px-7 bg-[#990000] text-white rounded-lg font-bold'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact
