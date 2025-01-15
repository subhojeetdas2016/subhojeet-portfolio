import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = ()=> {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
            <p className='text-white '>I'm always open to new opportunities—let's talk!</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactMeLeft