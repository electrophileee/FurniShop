import React from 'react'

// imports component
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewItems from '../components/NewItems'
import FeaturesSecond from '../components/FeaturesSecond'
import Products from '../components/Products'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-full max-w-[1440p] mx-auto bg-white' >
        <Header />
         <Hero />
         <Features />
         <NewItems />
         <FeaturesSecond />
         <Products />
         <Testimonial/>
         <Newsletter/>
         <Footer />

    </div>
  )
}
