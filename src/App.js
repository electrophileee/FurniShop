import React from 'react';

// import components
import Hero from './components/Hero';
import Features from './components/Features';
import NewItems from './components/NewItems';

const App = () => {
  return <div className='w-full max-w-[1440p] mx-auto bg-white'>
    <Hero />
    <Features />
    <NewItems />
  </div>;
};

export default App;

