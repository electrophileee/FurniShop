import React from 'react';

import { products } from '../Data';

import ProductSlider from '../components/ProductSlider';

const Products = () => {
  // distructure product

  const {title ,subtitle} =products;
  return (
      <section>
        <div className='container mx-auto'>
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          {/* product slider */}
          <ProductSlider />
        </div>
      </section>
  );
};

export default Products;
