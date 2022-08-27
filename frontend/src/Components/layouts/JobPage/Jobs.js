import React from 'react'
import './Jobs.css'
import Job from './Job'

const Jobs = () => {
  return (
    <div>
        <div className='job__uplaod'>
            <form>
                <input type='text' placeholder='Enter a product name...'  />
                <div className='job_file'>
                <input type='file' />
                <p>Upload</p>
                </div>
                <input type='text' placeholder='Price/$'/>
                <button type='submit'>Publish</button>
            </form>
        </div>
        <div className='job__dashboard'>
            <div className='jobs'>
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    </div>
  )
}

export default Jobs