/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-56 gap-6 sm:gap-7 md:gap-8 lg:gap-9'>
  <h1 className='font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16'>
    <span className='text-[#D4D4D4]'>Unleash Your Next Adventure with AI: </span>
    Custom Itineraries Just for You!
  </h1>
  <p className='text-lg sm:text-xl md:text-2xl text-gray-900 text-center'>
    Your Personal Trip Planner and Travel Curator: 
    Crafting Custom Experiences to Match Your Interests and Budget!
  </p>

  <Link to={'/create-trip'}>
    <Button className='py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8'>Get Started, It's Free</Button>
  </Link>
</div>

  )
}

export default Hero
