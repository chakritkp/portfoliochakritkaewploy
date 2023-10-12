import React from 'react'

import Hero from '../component/Hero'
import Skill from '../component/Skill'
import Project from '../component/Project'
import Certificate from '../component/Certificate'

import Layout from '../layout/Layout'
import Totop from '../component/Totop'

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Skill/>
      <Project/>
      <Certificate/>
      <Totop/>
    </Layout>    
  )
}

export default Home