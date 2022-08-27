import React from 'react'
import Ride from './Ride'
import './Rides.css'

const Rides = () => {
  return (
    <div>
        <div className='rides__uplaod'>
            <form>
                <input type='text' placeholder='Enter a product name...'  />
                <input type='text' placeholder='Enter Location ...' />
                <input type='text' placeholder='time'/>
                <button type='submit'>Publish</button>
            </form>
        </div>
       <div className='rides'>
        <Ride />
        <Ride />
        <Ride />
        <Ride />
        <Ride />
       </div>
    </div>
  )
}

export default Rides