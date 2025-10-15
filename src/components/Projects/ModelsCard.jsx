import React from 'react'

const ModelsCard = (props) => {
  return (
    
    <>
    <div className='h-full group relative w-full md:w-1/2 overflow-hidden hover:rounded-[23px] transition-all'>
      <img className='group-hover:scale-[110%] transition-all object-cover w-full h-full' src={props.image1} alt="" />
      <div className='transition-all opacity-0 group-hover:opacity-100 h-full w-full absolute top-0 bg-black/30 text-white flex items-center justify-center left-0'>
        <h2 className='font-[font2] uppercase text-xl sm:text-2xl md:text-3xl border-2 p-1.5 rounded-full'>View model</h2>
      </div>
    </div>
    <div className='h-full group relative w-full md:w-1/2 overflow-hidden hover:rounded-[23px] transition-all'>
      <img className='group-hover:scale-[110%] transition-all object-cover w-full h-full' src={props.image2} alt="" />
      <div className='transition-all opacity-0 group-hover:opacity-100 h-full w-full absolute top-0 bg-black/30 text-white flex items-center justify-center left-0'>
        <h2 className='font-[font2] uppercase text-xl sm:text-2xl md:text-3xl border-2 p-1.5 rounded-full'>View model</h2>
      </div>
    </div>
  </>
   
  )
}

export default ModelsCard