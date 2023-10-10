import React from 'react'


import { UilHtml5Alt } from '@iconscout/react-unicons';
import { UilCss3Simple } from '@iconscout/react-unicons';
import colmaracademyimg from '../assets/colmaracademy.jpg'

const Project = () => {
  return (
    <div className='text-center mb-5'>
        <h1 className='text-center text-2xl font-bold mb-5'>Project</h1>
        <div className='flex mx-3 mb-5'>
            <div className='rounded-full w-2/3 mx-auto'>
                <img className='w-fit rounded-lg' src={colmaracademyimg} alt="colmaracademyimg" />
            </div>
            <div className='w-1/3 mx-auto'>
                <h3 className='text-lg font-semibold'>Colmar Academy</h3>
                <div className='flex justify-center'>
                    <UilHtml5Alt size="3rem" color="#61DAFB" />
                    <UilCss3Simple size="3rem" color="#61DAFB" />
                </div>
            </div>
        </div>
        <div className='flex mx-3'>
            <div className='rounded-full w-2/3 mx-auto'>
                <img className='w-fit rounded-lg' src={colmaracademyimg} alt="colmaracademyimg" />
            </div>
            <div className='w-1/3 mx-auto'>
                <h3 className='text-lg font-semibold'>Colmar Academy</h3>
                <div className='flex justify-center'>
                <UilHtml5Alt size="3rem" color="#61DAFB" />
                <UilCss3Simple size="3rem" color="#61DAFB" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project