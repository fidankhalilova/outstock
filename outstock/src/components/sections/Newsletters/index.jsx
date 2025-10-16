import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 my-30 container mx-auto text-center'>
        <h1 className='text-[50px] font-light'>Get Discount Info</h1>
        <p className='text-gray-500 w-200'>Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information.</p>

        <div className='w-200'>
            <div id="input">
                <input type="text" placeholder='Enter your email...' className='outline-none border-none p-4 w-100 placeholder:text-center placeholder:text-gray-500' />
            </div>
            <div class="h-px w-full bg-gray-200"></div>
        </div>
    </div>
  )
}

export default Newsletter