import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
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
          
          
          <div className="footer">
            <div className="footercol-1 footercol">
              <h3>Company</h3>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
            <div className="footercol-2 footercol">
              <h3>Contact Us</h3>
              <ul>
                    <li><p>+91 9551758115 <br /> <br />
                        +91 8754066170 <br /> <br />
                        +91 8015531319 </p></li>
                    
                    <li><p>2, GK Moopanar Road, New Perungalathur, Chennai - 63, Tamil Nadu, India</p></li>
              </ul>
            </div>
            <div className='footercol-3 footercol'>
                <h3>social</h3>
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61552194054868&mibextid=kFxxJD" target='_blank'>
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/desbeyond-global/" target='_blank'>
                      <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/desbeyond_global?igshid=NzZlODBkYWE4Ng==" target='_blank'>
                      <i class="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
          </div>
          <div>
              <div className="footercol-5">
                <p>Other locations- Puducherry | Coimbatore </p>
                <p>Copyright © 2023 Desbeyond Global Services</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
