import React from 'react'
import { useState, useEffect } from "react";


import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilClipboardAlt } from '@iconscout/react-unicons'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'


const Nav = () => {
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;

            setShouldHide(scrollY > scrollThreshold);

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

  return (
        <div className='bg-[#27374d] fixed top-0 left-0 right-0 w-full justify-between items-center p-5'>
            <div className={`px-4 cursor-pointer text-center ${shouldHide ? "hidden " : ""}`}>
                <h1 className='font-black text-3xl'>CHAKRIT KAEWPLOY</h1>
            </div>

            <ul className='flex p-3 gap-3 justify-center'>
                {/* <li className='cursor-pointer'>
                    <UilEstate size="1.5rem" color="#61DAFB" />
                    <a>Home</a>
                </li> */}
                
                <li className='cursor-pointer'>
                    <a href="#Hero"><UilUser size="3rem" color="#61DAFB"/></a>
                </li>

                <li className='cursor-pointer'>
                    <a href='#Skill'><UilArrow size="3rem" color="#61DAFB" /></a>
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
                    <a href='#Project'><UilBracketsCurly size="3rem" color="#61DAFB"/></a> 
                    
                    {/* <a>Skill</a> */}
                </li>

                <li className='cursor-pointer'>
                    <a href="#Certificate"><UilGraduationCap size="3rem" color="#61DAFB"/></a>
                    {/* <a>Project</a> */}
                </li>
            </ul>     
                
                
            {/* <div>
                <UilTimes size="1.1rem" color="#61DAFB"/>
                <UilApps size="1.1rem" color="#61DAFB" />
            </div> */}

        </div>
        
  )
}

export default Nav