import React from "react";
import Form from '../Components/Form'
import './contact.css'
// import insta from  '../assets/instragram.svg'
// import facebook from '../assets/facebook.svg'
// import linkedin from '../assets/linkedin.svg'
// import whatsapp from '../assets/whatsapp.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="header">
                <div>
                <h1>Say hello  today!</h1>
                <p>Share your needs, and let's turn your ideas into reality! 
                    <br />
                    We're here to talk, understand, and leverage your vision for a personalized and impactful collaboration.</p>
                </div>
            </div>
            <div className="main">
                <div>
                <h2>We're eager to hear from you!</h2>
                <p>Got an enquiry? an idea?
                    got a burning question or just 
                    want to say 'hi'? Our inbox is ready 
                    for your antics - hit us up, and let 
                    the laughter (and conversation) begin!</p>
                </div>
            </div>
            <div className="main2">
                <h2>CONTACT US</h2>
                <Form />
            </div>
        </div>
    )
}

export default Contact