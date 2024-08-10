/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({ trip }) {
  return (
    <div>
      <h2 className='font-bold textxl mt-10 mb-7'>Hotel Recommendation</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {trip?.tripData?.hotel_options?.map((hotel, index) => (
            // attaching link
            <Link key={index} to={'https://www.google.com/maps/search/?api=1&query='+hotel?.HotelName+','+hotel?.HotelAddress} target='_blank'>

          <div className='hover:scale-105 transition-all cursor-pointer'>
            <img src="/placeholder.jpg" alt="" className='rounded-xl' />
            <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-medium'>{hotel.HotelName}</h2>
                <h2 className='text-xs text-gray-400'>📍{hotel.HotelAddress}</h2>
                <h2 className='text-sm text-gray-900'>💴 {hotel.Price}</h2>
                <h2 className='text-sm'>⭐ {hotel.Rating}</h2>
            </div>
          </div>

        </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels
