import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form.css'

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l27h6jk', 'template_grxhjnp', form.current, '2s9RpmWahz-pYuqI1')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          alert("Your mail has been sent");
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="container"> 
            <form ref={form} onSubmit={sendEmail}>
                <h3>Any Queries</h3>
                <input type="text" id="name" placeholder="Company name" name="user_name" required />
                <input type="email" id="email" placeholder="Email Id" name="user_email" required />
                <input type="number" id="phone" placeholder="Phone no" name="user_mobile"required />
                <input type="text" id="location" placeholder="City & Country" name="user_location" required />
                <textarea name="message" id="message" cols="15" rows="10" placeholder="How can we help you?" />
                <button type="submit">Send</button>
            </form>
        </div>
        
    )
}

export default Form
