import React from 'react';

const SingleInfo = ({ text, Image }) => {
  return (
    <div className='flex gap-4 items-center justify-start '>
      {/* Render the React icon component directly */}
      {Image && <Image className='text-3xl' />}
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
