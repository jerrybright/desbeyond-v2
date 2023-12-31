import React from "react";
import './about.css'
import { Routes, Route, Link } from 'react-router-dom'
import Contact from './Contact'

const About = () => {
    return (
        <div className="about">
            <div className="abouthead">
                <h2>Your Stories, Your Way:  Crafting Books Just for You</h2>   
            </div> 
            <div className="top-content">
                <div className="contentu"> 
                    <p>
                        <p>Desbeyond is a Books & Magazine 
                        Design Firm based in Chennai, 
                        India assisting Books Publishing 
                        Firms, Magazine Companies across 
                        the World with its High Standards 
                        Deliverables.</p>
                        <p>With our Team of Industry Design 
                        Experts, we pride ourselves on 
                        assisting our Clients with not just 
                        one service, but, many services. 
                        Our repeat business from some clients 
                        has been going for years.</p>
                    </p>
                    <div>
                        <img src="../src/assets/images/about-img.jpg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="blended-div"></div>
            <div className="queries"> 
                <p>At Desbeyond, we offer a professional finish that you can be proud of. We take extra special care when it comes to designing our book interiors, covers & e-books. We provide an Complete end-to-end Package for Book & Magazine Creations with our wide range of Services.</p>
                <p>Any Query? 
                    <Link to='/contact'>Contact Us</Link>
                    <Routes>
                        <Route path='/contact' element={ <Contact />} />
                    </Routes>
                </p>
            </div>
        </div>
    )
}

export default About