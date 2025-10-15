import React from 'react'
import Video from './video'


const HomeHeroText = () => {
  return (
    
    <div className='font-[font1] text-white lg:pt-5 pt-75 text-center'>
      <div className='lg:text-[7.5vw] text-[10vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw]'>THE LEGACY OF</div>
      <div className='lg:text-[7.5vw] text-[10vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw]'>ALL <div className='lg:h-[7vw] lg:w-[16vw] h-[9vw] w-[20vw] -mt-1 overflow-hidden rounded-full'><Video/></div> THINGS</div>
      <div className='lg:text-[7.5vw] text-[10vw] justify-center flex items-center lg:leading-[8vw] leading-[10vw]'>EXTRAORDINARY</div>
    </div>
  )
}

export default HomeHeroText