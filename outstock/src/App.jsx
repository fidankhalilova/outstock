import React from 'react'
import Layout from './components/layout'
import HeroBanner from './components/sections/HeroBanner'
import Promotion from './components/sections/Promotion'
import Products from './components/sections/Products'
import SaleOff from './components/sections/SaleOff'
import Sponsors from './components/sections/Sponsors'
import BlogPosts from './components/sections/BlogPosts'
import Newsletter from './components/sections/Newsletters'

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Products />
      <Promotion />
      <SaleOff />
      <Sponsors />
      <BlogPosts />
      <Newsletter />
    </Layout>
  )
}

export default App