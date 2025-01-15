import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[450px] w-[300px] relative'>
        <div className="h-[400px] w-[300px] rounded-[100px] absolute overflow-hidden animate-bounce-low-slow">
            <img className='h-full w-full object-cover animate-bounce-low-slow' src="images/about-me.jpg" alt="AboutMe" />
        </div>
        <div className='h-[400px] w-[200px] bg-orange absolute bottom-[30px] left-[-20px] rounded-bl-[120px] rounded-br[20px] rounded-tl-[20px] -z-10'></div>
    </div>
  )
}

export default AboutMeImage
