import React from 'react'
import{ Link } from 'react-router-dom'
import Project from '../src/components/Project'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Work = () => {
  return (
    <div className='py-20 items-center justify-center px-5' id='projects'>
      <Link
        to='/'
        className='flex gap-2 justify-center bg-gray-100 shadow-lg  items-center mb-12'
      >
        <FaArrowAltCircleUp className='text-3xl text-gray-400' />
      <h2 className='text-3xl font-semibold'>Home</h2>
      </Link>
        <Project />
    </div>
  )
}

export default Work