import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex text-white justify-center items-center gap-4 mb-3'>
      <Link className='hover:text-orange-400 hover:border-orange-400 text-[6vw] b-[6vw] border-2 px-5 uppercase rounded-full' to='/models'>Models</Link>
      <Link className='hover:text-orange-400 hover:border-orange-400 text-[6vw] b-[6vw] border-2 px-5 uppercase rounded-full' to='/about'>About</Link>
    </div>
  )
}

export default HomeBottomText