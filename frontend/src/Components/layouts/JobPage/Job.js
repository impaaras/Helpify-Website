import React from 'react'
import './Job.css'
import Chair from  '../Images/chair.jpg'

const Job = ({image, job_discription, address}) => {
  return (
    <div className='job__box'>
       <div className='job__upper'>
        <div className='job_image'>
          <img src={Chair} alt='job'/>
        </div>
        <div className='job_discription'>
          Job discription:
          <br />
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>   
        </div>  
        
       </div>
       <div className='job_address'>
        Job address:
        <br />
            <p>22 hill hartan  Kitchner canada Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
    </div>
  )
}

export default Job