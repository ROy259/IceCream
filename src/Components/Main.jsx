import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menu from './Menu'
import Abou_us from './Abou_us'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <Abou_us/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main
