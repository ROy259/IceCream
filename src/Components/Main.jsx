import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import Abou_us from './Abou_us'
import Contact from './Contact'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <Abou_us/>
      <Contact/>
    </div>
  )
}

export default Main
