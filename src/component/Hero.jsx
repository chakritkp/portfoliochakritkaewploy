import React from 'react'
import Profileimg from '../assets/386864020_599299545535922_5474428551062761694_n.jpg'
import Contact from './Contact'

const Hero = () => {
  return (
    <main>
      <div className='w-72 mx-auto mb-5'>
        <img className='w-fit rounded-lg' src={Profileimg} alt="" />
      </div>
      <Contact/>
      <article className='m-auto  mb-5'>
        <h2 className='text-center text-2xl font-bold mb-2'>Summary</h2>
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sint unde laudantium dolor dolores odio velit. Laboriosam, blanditiis perferendis? Corporis maxime corrupti ducimus tenetur autem qui commodi ut. Repellat, nesciunt?</p>
      </article>
    </main>
  )
}

export default Hero