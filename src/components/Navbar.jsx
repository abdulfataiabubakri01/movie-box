import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (

      <header className='flex justify-between pt-5'>
        <div className='font-bold pl-2 pt-1 pr:5 md:pr-10 md:pl-8 '>
            <h1 className=' flex text-green-600 text-xl md:text-4xl'>Movie <span className='text-black'>Box </span></h1>
        </div>

        <div className=' flex text-sm  md:text-1xl space-x-2 md:space-x-4 bg-gray-400 rounded-full px-3  '>
           <NavLink to="/" className=' hover hover:text-green-700 pt-2'>Movies</NavLink>
           <p className='text-2xl'>|</p>
           <NavLink to="/tvseries" className=' hover hover:text-green-700 pt-2 '>TVSeries</NavLink>
        </div>

        <div className=' pr-2'>
          <input type="text" placeholder='Search movies.....' className='bg-gray-500 w-28 focus:w-32 md:w-48 md:focus:w-64 transition-all 
          duration-300 ease-in-out px-4 py-2 rounded-full '/>
        </div>
      
        
      </header>


      
  )
}

export default Navbar
