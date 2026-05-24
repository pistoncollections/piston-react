import React from 'react';
import { useState } from 'react';


function Menu() {
  return (
    <nav className="flex shadow-xl">
      <div className='flex w-full xl:max-w-360 px-4 py-4 lg:px-30 mx-auto items-center justify-between'>
        <div className="flex">
          <a className='flex' aria-label='Página principal' href="/">
            <img className='h-12 object-cover' src='imgs/logo.png' />
          </a>
        </div>
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;
