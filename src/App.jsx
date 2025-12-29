import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Services from './components/Services'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      
      </Routes>    
    </>
  )
}

export default App