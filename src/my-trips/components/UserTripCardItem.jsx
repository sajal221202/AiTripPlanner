/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function UserTripCardItem({trip}) {
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src="/placeholder.jpg" alt="" className='object-cover rounded-xl h-[220px]'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
            <h2 className='text-sm text-gray-400'>{trip?.userSelection?.nOofdays} Days Trip with {trip?.userSelection?.traveler}</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem