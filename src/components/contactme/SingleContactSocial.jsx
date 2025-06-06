import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange rounded-full p-3 flex items-center justify-center'>
        <a target="_blank" href={link} className='cursor-pointer text-orange'>
            <Icon></Icon>
        </a>
    </div>
  )
}

export default SingleContactSocial