import React from 'react'

const Watermark = () => {
  return (
    <div className="fixed bottom-72 left-12 transform -rotate-90 origin-bottom z-[-1]">
      <h1 className='font-bold text-7xl text-primary'>Globo <span className='text-accent'>Gym</span></h1>
    </div>
  )
}

export default Watermark