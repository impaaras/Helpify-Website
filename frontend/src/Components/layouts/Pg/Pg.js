import React from 'react'
import './Pg.css'
import chair from '../Images/sofa.jpg'

const Pg = () => {
  return (
    <div className='pg__box'>
      <div className='left__pg__data'>
        <div className='pg__image'>
        <img src={chair} alt='images' />
      </div>
      <div className='pg__discription'>
          <h2>Two rooms avaialble rooms</h2>
          <p>kitchnere two rooms avaialble in all page</p>
      </div>
      </div>
      <div className='right__pg__data'>
         <h2>$500</h2>
      </div>
     </div>
  )
}

export default Pg