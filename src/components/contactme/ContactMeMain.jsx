import React from 'react'
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';
import SingleInfo from './SingleInfo';

const ContactMeMain = () => {
  return (
    <div id="contact" className='max-w-[1300px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h2 className='text-6xl mb-10 text-cyan text-center'>Connect With Me</h2>
        <div className='flex justify-between gap-24 bg-brown p-10 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft/>
            <ContactMeRight/>
            <SingleInfo/>
        </div>
    </div>
  )
}

export default ContactMeMain