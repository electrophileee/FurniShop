import React,{useState} from 'react'

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
import Cart from './cart/Cart'


export default function Home() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=() =>{
    setCartIsShown(true);
  }
  const hideCartHandler=() =>{
    setCartIsShown(false);
  }

  return (
    <div className='w-full max-w-[1440p] mx-auto bg-white' >
      {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
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
