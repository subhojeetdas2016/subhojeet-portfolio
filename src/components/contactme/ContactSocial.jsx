import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";


const ContactSocial = ()=> {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link={"https://github.com/subhojeetdas2016"} Icon={FiGithub}></SingleContactSocial>
    <SingleContactSocial link={"https://www.linkedin.com/in/subhojeetdas/"} Icon={CiLinkedin}></SingleContactSocial>
    <SingleContactSocial link={"https://www.instagram.com/subhojeetd19/"} Icon={IoLogoInstagram}></SingleContactSocial>


    
    </div>
  )
}

export default ContactSocial