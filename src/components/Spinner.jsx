import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center
    h-[100vh]'>
    
        <div class="spinner"></div>
        <p className=' font-bold'>Loading....</p>
    </div>
  )
}

export default Spinner