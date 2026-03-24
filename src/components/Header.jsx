import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute z-10 px-6 py-2 bg-gradient-to-b from-black w-full '>
      <img  className="w-52 " src={NETFLIX_LOGO} alt="logo"  />

    </div>
  )   
}

export default Header