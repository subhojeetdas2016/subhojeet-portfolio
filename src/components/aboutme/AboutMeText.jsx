import React from 'react'

const AboutMeText = ()=> {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
        <h2 className='text-6xl text-cyan mb-10 font-special'>About Me</h2>
        <p className='text-white '>I'm <b className='text-cyan'>Subhojeet Das,</b> a Frontend Developer and undergraduate at Netaji Subhas University. I specialize in building responsive web applications using the MERN stack (MongoDB, Express, React, Node.js) and am always eager to learn and grow through challenging projects.</p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-300 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>My Projects</button>
    </div>
  )
}

export default AboutMeText