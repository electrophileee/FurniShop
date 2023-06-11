import React from 'react';
import { features } from '../Data';
const Features = () => {
  const {title,subtitle,image,buttonText,items}=features;
  return <section className='section'>
       <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row lg:gap-x-[100px] '>
            {/* image */}
            <div className=''>
              <img src={image.type} alt=' ' />
            </div>
            {/* text */}
            <div>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

            {/* items */}
            <div>
              {items.map((item,index)=>{
                // distructures
                const {title,subtitle,icon}=item;
                return (
                  <div>
                    <div>{icon}</div>
                    <div>
                      <h1>{title}</h1>
                      <p>{subtitle}</p>
                    </div>
                    </div>
                )
              })}
            </div>
          </div>
            
       </div>
  </section>;
};

export default Features;
