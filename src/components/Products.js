import React from 'react';

import { products } from '../Data';

import ProductSlider from '../components/ProductSlider';

const Products = () => {
  // distructure product

  const {title ,subtitle} =products;
  return (
      <section>
        <div className='container mx-auto'>
          <div className='flex flex-col  justify-center items-center' >
            <h2 className='title '>{title}</h2>
            <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] '>{subtitle}</p>
          </div>
          {/* product slider */}
          <ProductSlider />
        </div>
      </section>
  );
};

export default Products;
