/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button'
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect } from 'react'
import { FaShare } from "react-icons/fa6";


function InfoSection({trip}) {
  return (
    <div>
        <img className='h-[340px] w-full object-cover rounded-xl' src="/placeholder.jpg" alt="" />
        
       <div className='flex justify-between items-center'>
        <div className='my-5 flex-col gap-2'>
            <h2 className='font-bold text-2xl mt-5 mb-5'>{trip?.userSelection?.location}</h2>
            <div className='flex gap-5'>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📆 {trip?.userSelection?.nOofdays} Day</h2>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💏 No. of traveler: {trip?.userSelection?.traveler}</h2>
            </div>
         </div>
          <Button><FaShare />
          </Button>
       </div>
        
    </div>
  )
}

export default InfoSection