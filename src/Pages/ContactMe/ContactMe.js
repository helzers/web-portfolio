import React, {useEffect, useState} from 'react';
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './ContactMe.scss'

function ContactMe() {
    
    // Use States 
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [subject, setSubject] = useState("");
    var [message, setMessage] = useState("");
    
    //Functions
    var onNameChange = (e) => {
        setName(e.target.value);
    }
    var onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    var onSubjectChange = (e) => {
        setSubject(e.target.value);
    }
    var onMessageChange = (e) => {
        setMessage(e.target.value);
    }

    var submitEmail = (e) => {
        e.preventDefault();
        const templateId = 'default';

        sendFeedback(templateId, {
            name: name, 
            email: email,
            subject: subject,
            message: message
        })
    }

    var sendFeedback = (templateId, variables) => {
        init("user_0t8an7ltAZ2DKdzxgfjQZ");
        
        emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            // Email successfully sent alert
            alert('Email Successfully Sent')
            resetForm();
          })
          // Email Failed to send Error alert
          .catch(err => {
            alert('Email Failed to Send')
            console.error('Email Error:', err)
          }
        )
    }

    var resetForm = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    //Use Effects
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
                <form className="contact-form" onSubmit={submitEmail}>
                    <input type="text" id="name" name="name" value={name} placeholder="Your Name" onChange={onNameChange} required/>
                    
                    <input type="text" id="email" name="email" value={email} placeholder="Your Email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" onChange={onEmailChange} required/>

                    <input type="text" id="subject" name="subject" value={subject} placeholder="Subject" onChange={onSubjectChange}/>

                    <textarea id="message" name="message" value={message} placeholder="Your Message" onChange={onMessageChange} required/>

                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;