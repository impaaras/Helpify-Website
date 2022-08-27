import React from 'react'
import Pg from './Pg'
import './Pgs.css'

const Pgs = () => {
  return (
    <div>
         <div className='rides__uplaod'>
            <form>
                <input type='text' placeholder='Enter a product name...'  />
                <input type='text' placeholder='Enter Location ...' />
                <input type='text' placeholder='price'/>
                <button type='submit'>Publish</button>
            </form>
        </div>
        <hr />
        <div className='pg__dashboard'>
            <div className='pg__filtering'>
                <div className='price__filtering'>
                    <p>Price</p>
                </div>
                <select>
                <option value="volvo">Home</option>
                <option value="saab">Gym & fitness</option>
                <option value="mercedes">Kitchen</option>
                <option value="audi">Vehicles</option>
                </select>
            </div>
       
        <div className='pgs'>       
            <Pg />
            <Pg />
            <Pg />
        </div>
        </div>
    </div>
  )
}

export default Pgs