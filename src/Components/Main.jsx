import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Try from './Try'
import About from './About'
import Contact from './Contact'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Home id="home"/>
      <Try id="main"/>
      <About id="about"/>
      <Contact id="contact"/>
    </div>
  )
}

export default Main
