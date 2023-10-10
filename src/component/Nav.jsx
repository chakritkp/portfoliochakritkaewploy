import React from 'react'
import { NavLink } from 'react-router-dom' 

import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'


const Nav = () => {
  return (
    <>
        <div className='w-full p-4 '>
            <div className='px-4 cursor-pointer text-center'>
                <h1 className='font-black text-4xl'>CHAKRIT KAEWPLOY</h1>
            </div>

            <ul className='flex p-3 gap-3 justify-center'>
                {/* <li className='cursor-pointer'>
                    <UilEstate size="1.5rem" color="#61DAFB" />
                    <a>Home</a>
                </li> */}
                
                <li className='cursor-pointer'>
                    {/* <NavLink to={'/'}> */}
                        <UilUser size="3rem" color="#61DAFB"/>
                    {/* </NavLink> */}
                    
                    {/* <a>About</a> */}
                </li>

                <li className='cursor-pointer'>
                    {/* <NavLink to={'/contact'}> */}
                        <UilMessage size="3rem" color="#61DAFB" />
                        {/* <a>Contactme</a> */}
                    {/* </NavLink> */}
                </li>

                {/* <li className='cursor-pointer'>
                    <UilBriefcaseAlt size="1.5rem" color="#61DAFB"/>
                    <a>Experience</a>
                </li>

                <li className='cursor-pointer'>
                    <UilGraduationCap size="1.5rem" color="#61DAFB"/>
                    <a>Education</a>
                </li> */}

                <li className='cursor-pointer'>
                    <UilClipboardAlt size="3rem" color="#61DAFB"/>
                    {/* <a>Skill</a> */}
                </li>

                <li className='cursor-pointer'>
                    <UilBracketsCurly size="3rem" color="#61DAFB"/>
                    {/* <a>Project</a> */}
                </li>
            </ul>     
                
                
            {/* <div>
                <UilTimes size="1.1rem" color="#61DAFB"/>
                <UilApps size="1.1rem" color="#61DAFB" />
            </div> */}

        </div>
        
    </>
  )
}

export default Nav