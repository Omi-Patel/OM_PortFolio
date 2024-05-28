"use client"
import React, { useEffect } from 'react'
import { BackgroundBeamsDemo } from '../components/BackgroundBeamsDemo'

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=' mt-20'>
      <BackgroundBeamsDemo />
    </div>
  )
}

export default page
