import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';


const ContactInfo = ()=> {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="subhojeetdas2016@gmail.com" Image={CiMail}/>
        <SingleInfo text="+91 9693785248" Image={CiPhone}/>
        <SingleInfo text="Jamshedpur, 831017" Image={CiLocationOn}/>
    </div>
  )
}

export default ContactInfo