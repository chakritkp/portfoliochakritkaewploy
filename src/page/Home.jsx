import React from 'react'


import Nav from '../component/Nav'
import Hero from '../Component/Hero'
import Skill from '../component/Skill'
import Project from '../component/Project'
import Certificate from '../component/Certificate'
import BackgroundLayout from '../layout/BackgroundLayout'

const Home = () => {
  return (
    <BackgroundLayout>
      <Nav/>
      <Hero/>
      <Skill/>
      <Project/>
      <Certificate/>
    </BackgroundLayout>
  )
}

export default Home