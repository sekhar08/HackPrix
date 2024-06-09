import React from 'react'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <div className=' w-full min-h-screen bg-black pr-[5vw] pl-[5vw] ' >
      <Navbar />
        <div className=' w-full font-silk text-[5vw] text-[#F9C74F] uppercase tracking-widest pt-[13vw] ' >
            <div>
                <h1> chat , vent or </h1>
                <h1>just hang out.</h1>
                <h1>you're not alone.</h1>
            </div>
        </div>
    </div>
  )
}

export default Landing