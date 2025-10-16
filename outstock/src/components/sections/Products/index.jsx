import React from 'react'

const Products = () => {
  return (
    <div className='flex flex-col items-center gap-12'>
      <div id="heading" className='text-center w-full'>
        <div class="flex items-center justify-center space-x-4 mb-4 w-full">
          <div class="h-px w-3/10 bg-gray-200"></div>
          <h2 class="text-[40px] font-light text-gray-900">Trending Products</h2>
          <div class="h-px w-3/10 bg-gray-200"></div>
        </div>
        <p class="mt-3 text-gray-400 text-md">Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
      </div>

      <div id="posts" className='flex justify-center gap-8 container mx-auto flex-wrap'>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post">
          <div id="post-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative' />
             <div class="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
              -40%
              </div>
              <div className='absolute top-0 left-0'>
                <img src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13_788x1013.jpg?v=1691546137" alt="" className='w-[300px] h-[400px] opacity-0 object-cover hover:opacity-100 duration-400' />
              </div>
              <div class="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-[#3b7b7a]"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-black"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-sky-300"></div>
                <div class="w-5 h-5 rounded-full border-2 border-gray-300 bg-yellow-300"></div>
            </div>          
          </div>
          <div id="post-info" className='flex flex-col items-start justify-start gap-1 mt-4'> 
            

            <div class="pb-4">
              <h3 class="text-gray-600 text-md font-light mb-1">Plastic Dining Armchair</h3>
              <div class="flex items-center space-x-2">
                <span class="text-lg font-semibold text-gray-900">$120.00</span>
                <span class="text-gray-400 line-through">$200.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="loadMore">
        <button className='px-10 py-4 bg-white border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]'>Load More</button>
      </div>
    </div>
  )
}

export default Products