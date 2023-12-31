import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={ <About />} />
            <Route path='/services' element={ <Services />} />
            <Route path='/contact' element={ <Contact />} />
          </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App
