import React, {useEffect} from 'react';
import './ContactMe.scss'

function ContactMe() {
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className="contactMe">
            <h1>Contact Me</h1>
            <div className="contactDetails">
                <p id="contactInfo">Contact me using this form, or you can reach me via email or LinkedIn</p>
                <h4>Email:</h4>
                <p id="contactEmail">helmurphy6@gmail.com</p>
                <a href="https://www.linkedin.com/in/helen-murphy-8895b6107/"><img src={process.env.PUBLIC_URL + "/Images/Linkedin-Logo.png"} alt="LinkedIn" /></a>
            </div>
            {/* <div className="contactForm">
                <form>
                    <input type="text" id="name" name="name" />
                    <label for="name">Your Name</label>
                    
                    <input type="text" id="email" name="email" />
                    <label for="email">Your Email</label>

                    <input type="text" id="subject" name="subject" />
                    <label for="subject">Subject</label>

                    <textarea id="message" name="message" />
                    <label for="message">Your Message</label>

                    <button type="button">Submit</button>
                </form>
            </div> */}
        </div>
    )
}

export default ContactMe;