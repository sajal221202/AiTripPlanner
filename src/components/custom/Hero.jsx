/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext' // Adjust the import path as needed

function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <div className='flex flex-col items-center mx-auto max-w-4xl px-4 gap-9 transition-colors duration-300' style={{ color: 'var(--text-primary)' }}>
      <h1 className='font-extrabold text-[50px] text-center mt-16'>
        <span style={{ color: 'var(--text-secondary)' }}>Unleash Your Next Adventure with AI: </span>
        <span>Custom Itineraries Just for You!</span>
      </h1>
      <p className='text-xl text-center' style={{ color: 'var(--text-primary)' }}>
        Your Personal Trip Planner and Travel Curator: 
        Crafting Custom Experiences to Match Your Interests and Budget!
      </p>
      <Link to={'/create-trip'}>
        <Button className="text-base font-semibold px-6 py-3" style={{
          backgroundColor: 'var(--button-bg)',
          color: 'var(--button-text)',
        }}>
          Get Started, It's Free
        </Button>
      </Link>
    </div>
  )
}

export default Hero
