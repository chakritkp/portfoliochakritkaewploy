import React from 'react'
import { UilHtml5Alt } from '@iconscout/react-unicons';
import { UilCss3Simple } from '@iconscout/react-unicons';
import { UilJavaScript } from '@iconscout/react-unicons';
import { UilReact } from '@iconscout/react-unicons';

const Skill = () => {
  return (
    <section className='text-center h-screen flex justify-center items-center' id='Skill'>
        <div>
            <h2 className='text-2xl font-bold mb-2'>Skill</h2>

            <h2 className='text-xl font-bold mb-2'>Frontend</h2>

            <div className='flex gap-3 justify-center'>

                <div>
                    <UilHtml5Alt className='m-auto' size="4rem" color="#61DAFB" />
                    <p className='text-base font-medium'>HTML5</p>
                </div>

                <div>
                    <UilCss3Simple className='m-auto' size="4rem" color="#61DAFB" />
                    <p className='text-base font-medium'>CSS</p>
                </div>

                <div>
                    <UilJavaScript className='m-auto' size="4rem" color="#61DAFB" />
                    <p className='text-base font-medium'>JAVASCRIPT</p>
                </div>

                <div>
                    <UilReact className='m-auto' size="4rem" color="#61DAFB" />
                    <p className='text-base font-medium'>REACT</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skill