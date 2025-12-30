import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Services from './components/Services'
import Home from './components/Home'
import Projects from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
   return (
    <>
      
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer/>
    </>
  )
}

export default App