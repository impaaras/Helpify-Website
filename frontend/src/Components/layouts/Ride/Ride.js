import React from 'react'
import chair from '../Images/chair.jpg'
import './Ride.css'

const Ride = () => {
  return (
    <div className='ride__box'>
        <div className='ride_image'>
          <img src={chair} alt='job'/>
       </div>
       <div className='ride_name'>
            <h2>Kitchener to Brampton</h2>
      </div>
    </div>
  )
}

export default Ride