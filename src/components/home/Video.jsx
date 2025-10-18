import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay muted loop>
        <source src='public/media/background.mp4' type="video/mp4"/>
      </video>
    </div>
  )
}

export default Video