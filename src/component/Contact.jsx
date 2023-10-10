import React from 'react';

import { UilGithub } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilAt } from '@iconscout/react-unicons';
import { UilPhoneAlt } from '@iconscout/react-unicons';

const Contact = () => {
  return (
    <div className='flex gap-3 max-w-[300px] rounded-lg justify-center m-auto my-3 py-3 px-10 bg-[#181823]'>
      <a href='https://github.com/chakritkp' target="_blank"><UilGithub size="3rem" color="#61DAFB" /></a>
        
       <a href='https://www.linkedin.com/in/chakritkp/' target='_blank'><UilLinkedin size="3rem" color="#61DAFB" /></a> 
        <UilAt size="3rem" color="#61DAFB" />
        <UilPhoneAlt size="3rem" color="#61DAFB" />
    </div>
  )
}

export default Contact