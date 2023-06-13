import React from 'react';

import {Swiper ,SwiperSlide} from 'swiper/react'; 
import 'swiper/css'
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
import '../Slider.css';

// importing required modules

import {Pagination ,Navigation} from 'swiper';

// import data
import { products } from '../Data';
// import icons
import {HiPlus} from 'react-icons/hi';


const ProductSlider = () => {

  // destructure product
  const {pages}=products;

  return <Swiper modules={[Pagination ,Navigation]} pagination={{clickable:true}}>
    {pages.map((page ,index)=>{
         return <SwiperSlide key={index} >
                  <div>
                    {page.productList.map((product,index)=>{
                          // destructure product
                          const {image,name,price,oldPrice}=product;
                          return (
                            <div>
                              <div>
                                <img src={image.type} alt='' />
                                <div> <HiPlus className='text-xl text-primary ' /> </div>
                              </div>
                              <div>{name}</div>
                              <div>
                                <div>$ {price}</div>
                                <div>$ {oldPrice}</div>
                              </div>
             
                            </div>
                          )
                    })}
                  </div>
         </SwiperSlide> 
     })}
  </Swiper>;
};

export default ProductSlider;
