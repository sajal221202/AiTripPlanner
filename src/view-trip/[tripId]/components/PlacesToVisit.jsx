/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-lg mt-10 mb-7'>Places to Visit</h2>
      <div>
        {trip.tripData && typeof trip.tripData.itinerary === 'object' ? (
          Object.entries(trip.tripData.itinerary).map(([day, info]) => (
            <div key={day} className='mt-5'>
              <h3 className='font-medium text-lg'>{day}</h3>
              <p className='font-medium text-sm text-orange-300'>{info.best_time_to_visit}</p>
              <div className='grid md:grid-cols-2 gap-5'>
                {info.places.map((place, index) => (
                  <div key={index}>                   
                    {/* <h2 className='font-normal text-md'>{place.placeName}</h2> */}
                    <div className='my-3'>
                       <PlaceCardItem place={place} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No itinerary available</p>
        )}
      </div>
    </div>
  )
}

export default PlacesToVisit
