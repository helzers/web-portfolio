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
                <p id="contactInfo">Feel free to contact me at any time regarding any job opportunities. You can contact me using this form, or you can reach me via email or LinkedIn. Looking forward to hearing from you</p>
                <h4>Email:</h4>
                <p id="contactEmail">helmurphy6@gmail.com</p>
                <a href="https://www.linkedin.com/in/helen-murphy-8895b6107/"><img src={process.env.PUBLIC_URL + "/Images/Linkedin-Logo.png"} alt="LinkedIn" /></a>
            </div>
            <div className="contactMeForm">
                <form className="contact-form">
                    <input type="text" id="name" name="name" placeholder="Your Name"/>
                    
                    <input type="text" id="email" name="email" placeholder="Your Email"/>

                    <input type="text" id="subject" name="subject" placeholder="Subject"/>

                    <textarea id="message" name="message" placeholder="Your Message"/>

                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;