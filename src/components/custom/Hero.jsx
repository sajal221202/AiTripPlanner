/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
   <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#D4D4D4]'>Unleash Your Next Adventure with AI: </span>
         Custom Itineraries Just for You!</h1>
         <p className='text-xl text-gray-900 text-center'>Your Personal Trip Planner and Travel Curator: 
          Crafting Custom Experiences to Match Your Interests and Budget!</p>

          {/* now we will connect this get started with create trip component by using link tag */}
          <Link to={'/create-trip'}>
          <Button>Get Started, It's Free</Button>
          </Link>
    </div>

  )
}

export default Hero
