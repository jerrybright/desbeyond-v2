import React from "react";
import './form.css'

const Form = () => {
    return(
        <div className="container"> 
            <form >
                <h3>Any Querries</h3>
                <input type="text" id="name" placeholder="Your name/Company name" required />
                <input type="email" id="email" placeholder="Email Id" required />
                <input type="text" id="phone" placeholder="Phone no." required />
                <input type="text" id="location" placeholder="City & Country" required />
                <textarea name="message" id="message" cols="15" rows="10" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        
    )
}

export default Form
