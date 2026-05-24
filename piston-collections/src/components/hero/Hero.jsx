import React from 'react';
import { useState } from 'react';


function Hero({ title }) {
  return (
    <div className="relative h-60 lg:h-85">
      <img className='flex h-full w-full object-cover' src="imgs/heroBg.jpg" />
      <div className="absolute top-0 w-full h-full bg-shadow flex flex-col items-center justify-center px-4 py-4 lg:px-30">
        <h1 className="text-white text-center">{title}</h1>
      </div>
    </div>
  )
}

export default Hero;
