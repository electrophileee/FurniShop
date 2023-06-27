import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from "react-icons/ai";

// import logo
import Logo from '../assets/img/logo.svg'

// import icons
import {CgMenuRight ,CgClose} from 'react-icons/cg';

// import data
import { navigation } from '../Data';

// import conponents
import NavMobile from './NavMobile';


const Header = (props) => {

  const [bg,setBg]=useState(false);
  const  [mobileNav ,setMobileNav]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      return window.scrollY>50?setBg(true):setBg(false);
    })
  })



  return <header className={`${bg?'bg-primary py-4 lg:py-6':'bg-none'}  fixed left-0 w-full py-8 z-10 transition-all duration-200`}>

    <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to='#'>
          <img className='h-6 lg:h-8' src={Logo} alt=''/>
        </Link>
        {/* cart */}
        <div  className='flex items-center justify-center mx-auto' >
          <button onClick={props.onShowCart} className='cursor-pointer'>
              <AiOutlineShoppingCart className=' lg:text-white text-[28px] ' />
              <span className='bg-grey text-white rounded-full w-5 h-5 absolute top-5 text-center leading-5' >0</span>
            </button>    
        </div>
        {/* menu icon */}
          <div
          onClick={()=>setMobileNav(!mobileNav)} 
          className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'
          >
              {mobileNav?<CgClose />:<CgMenuRight />}
          </div>
          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item,index)=>{
              return (
              <li key={index}>
                <Link 
                className='capitalize text-white hover:border-b transition-all '
                to={item.href}
                >
                 {item.name}
                </Link>
               </li> 
               )
              })}
              
            </ul>
          </nav>
          {/* nav mobile */}
          <div className={`${mobileNav?'left-0':'-left-full' } md-hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
          
       </div>
    </div>

  </header>;
};

export default Header;
