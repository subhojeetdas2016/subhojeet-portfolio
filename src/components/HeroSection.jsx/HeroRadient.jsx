import React from 'react'

const HeroRadient = ()=> {
  return (
    <div>
      <div className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
      <div className='shadow-cyanMediumShadow absolute top-[10px] left-0 -z-10 opacity-50'></div>
      <div className='shadow-orangeMediumShadow absolute top-[30px] left-0 -z-10 opacity-50'></div>

      
    </div>
  )
}

export default HeroRadient