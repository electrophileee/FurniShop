import React from 'react';
// import logo
import Logo from  '../assets/img/logo.svg';

// import data
import { footer } from '../Data';
const Footer = () => {
  return <footer className='section bg-primary text-white'>
   <div className='container mx-auto'>
    <div className='flex flex-col  lg:flex-row justify-between border-b  border-opacity-75 border-gray-700 pb-7 lg-pb-14 mb-14'>
        <a href='#'>
          <img  src={Logo} alt=''/>
        </a>
        {/* social */}
        <div className='flex flex-col lg:flex-row gap-x-4'>
          {footer.social.map((item,index)=>{
            return (
              <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition ' key={index}>
                <a href='#' >{item.icon} </a>
              </div>
            );
          })}
        </div>
    </div>
    {/* copywrite text */}
    <p className='text-center'>
      &copy; thedecorator 2023 - All rights reserved.
    </p>


   </div>
  </footer>;
};

export default Footer;
