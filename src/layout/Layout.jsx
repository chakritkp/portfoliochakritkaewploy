import React from 'react'
import BackgroundLayout from './BackgroundLayout'
import Nav from '../component/Nav'

const Layout = ({ children }) => {
  return (
    <BackgroundLayout>
        <Nav/>
            {children}
    </BackgroundLayout>
  )
}

export default Layout