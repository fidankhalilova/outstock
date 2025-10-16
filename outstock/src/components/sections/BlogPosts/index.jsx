import React from 'react'

const BlogPosts = () => {
  return (
    <div className='flex flex-col items-center gap-12 container mx-auto my-40'>
      <div id="heading" className='text-center w-full'>
        <div class="flex items-center justify-center space-x-4 mb-4 w-full">
          <div class="h-px w-3/10 bg-gray-200"></div>
          <h2 class="text-[40px] font-light text-gray-900">Our Blog Posts</h2>
          <div class="h-px w-3/10 bg-gray-200"></div>
        </div>
        <p class="mt-3 text-gray-400 text-md">Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
      </div>

      <div id="blogs" className='flex justify-center gap-8 container mx-auto flex-wrap'>
        <div id="blog" className='w-[450px]'>
          <div id="blog-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/articles/1_800x515.jpg?v=1511574495" alt="" className='w-[450px] h-[330px]' />    
          </div>
          <div id="blog-info" className='flex flex-col items-start justify-start gap-3 mt-4'> 
            <div class="pb-4 flex flex-col gap-3">
              <h3 class="text-black text-[24px] font-medium mb-1 hover:text-[#bc8642] duration-200">Anteposuerit litterarum formas.</h3>
              <div class="flex items-center space-x-2">
                <span class="text-md font-semibold text-gray-900">By Ms Admin /</span>
                <span class="text-gray-400"> November 16, 2025</span>
              </div>
              <div>
                <p class="text-gray-500 text-[14px] line-clamp-3">
                    Diga, Koma and Torus are three kitchen utensils designed for Ommo, 
                    a new design-oriented brand introduced at the Ambiente show in February 2016. 
                    Minimalist approach, bright colors, stainless steel and matte plastic, abstract 
                    shapes and curved lines are the defining features of these products designed to 
                    be extremely functional, user-friendly and fun. Diga is a two-color melamine salad 
                    bowl where vegetables can be washed, drained and served. The disk at the bottom of 
                    the bowl can be turned counterclockwise to drain water when washing vegetables and 
                    it can be turned clockwise to lock the drain and hold condiments in the bowl when serving.
                </p>
              </div>
              <div id="loadMore">
                <button className='px-10 py-4 bg-white border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]'>Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div id="blog" className='w-[450px]'>
          <div id="blog-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/articles/1_800x515.jpg?v=1511574495" alt="" className='w-[450px] h-[330px]' />    
          </div>
          <div id="blog-info" className='flex flex-col items-start justify-start gap-3 mt-4'> 
            <div class="pb-4 flex flex-col gap-3">
              <h3 class="text-black text-[24px] font-medium mb-1 hover:text-[#bc8642] duration-200">Anteposuerit litterarum formas.</h3>
              <div class="flex items-center space-x-2">
                <span class="text-md font-semibold text-gray-900">By Ms Admin /</span>
                <span class="text-gray-400"> November 16, 2025</span>
              </div>
              <div>
                <p class="text-gray-500 text-[14px] line-clamp-3">
                    Diga, Koma and Torus are three kitchen utensils designed for Ommo, 
                    a new design-oriented brand introduced at the Ambiente show in February 2016. 
                    Minimalist approach, bright colors, stainless steel and matte plastic, abstract 
                    shapes and curved lines are the defining features of these products designed to 
                    be extremely functional, user-friendly and fun. Diga is a two-color melamine salad 
                    bowl where vegetables can be washed, drained and served. The disk at the bottom of 
                    the bowl can be turned counterclockwise to drain water when washing vegetables and 
                    it can be turned clockwise to lock the drain and hold condiments in the bowl when serving.
                </p>
              </div>
              <div id="loadMore">
                <button className='px-10 py-4 bg-white border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]'>Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div id="blog" className='w-[450px]'>
          <div id="blog-img" className='relative'>
            <img src="https://vela-kazan.myshopify.com/cdn/shop/articles/1_800x515.jpg?v=1511574495" alt="" className='w-[450px] h-[330px]' />    
          </div>
          <div id="blog-info" className='flex flex-col items-start justify-start gap-3 mt-4'> 
            <div class="pb-4 flex flex-col gap-3">
              <h3 class="text-black text-[24px] font-medium mb-1 hover:text-[#bc8642] duration-200">Anteposuerit litterarum formas.</h3>
              <div class="flex items-center space-x-2">
                <span class="text-md font-semibold text-gray-900">By Ms Admin /</span>
                <span class="text-gray-400"> November 16, 2025</span>
              </div>
              <div>
                <p class="text-gray-500 text-[14px] line-clamp-3">
                    Diga, Koma and Torus are three kitchen utensils designed for Ommo, 
                    a new design-oriented brand introduced at the Ambiente show in February 2016. 
                    Minimalist approach, bright colors, stainless steel and matte plastic, abstract 
                    shapes and curved lines are the defining features of these products designed to 
                    be extremely functional, user-friendly and fun. Diga is a two-color melamine salad 
                    bowl where vegetables can be washed, drained and served. The disk at the bottom of 
                    the bowl can be turned counterclockwise to drain water when washing vegetables and 
                    it can be turned clockwise to lock the drain and hold condiments in the bowl when serving.
                </p>
              </div>
              <div id="loadMore">
                <button className='px-10 py-4 bg-white border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]'>Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-px w-full bg-gray-200"></div>
    </div>
  )
}

export default BlogPosts