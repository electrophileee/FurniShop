import React from 'react';

import { features } from '../Data';

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-[100px] '>
        {/* text */}
        <div className='flex-1 flex-col justify-end'>
            <h1 className='title'>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
          </div>
        {/* image */}
        <div className='flex-1 '>
          <img src={image.type} alt=' ' />
        </div>
        <div className='flex flex-col '>

        </div>
      </div>

    </div>
  </section>;
};

export default FeaturesSecond;
