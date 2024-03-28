import React from 'react'
import SearchBar from './SearchBar'
import { logo } from '../utils/constants'


const Navbar = () => {

    

  return (
    <>
     <section>

      <div className='fixed flex items-center justify-between w-full h-14 bg-black ' >

      <img src={logo} className='w-9 h-7 ml-10' />
    
    <span className=' md:w-[70vw] lg:w-[66vw]' >
    <SearchBar/>
    </span>

      </div>

     </section> 
    </>
  )
}

export default Navbar
