import React, {useEffect, useState} from 'react';
import './ContactMe.scss'

function ContactMe() {
    
    // Use States 
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [subject, setSubject] = useState("");
    var [message, setMessage] = useState("");

    var [contactInfo, setContactInfo] = useState({name: '', email: '', subject: '', message: ''})
    
    
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

    var getContactInfo = e => {
        e.preventDefault();

        setContactInfo({name: name});
        setContactInfo({email: email});
        setContactInfo({subject: subject});
        setContactInfo({message: message});

        submitEmail();

        
    }

    var submitEmail = () => {
        // axios({
        //   method: "POST", 
        //   url:"/send", 
        //   data:  contactInfo
        // }).then((response)=>{
        //   if (response.data.status === 'success'){
        //       alert("Message Sent."); 
        //       resetForm()
        //   }else if(response.data.status === 'fail'){
        //       alert("Message failed to send.")
        //   }
        // })
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
                <form className="contact-form" onSubmit={getContactInfo}>
                    <input type="text" id="name" name="name" placeholder="Your Name" onChange={onNameChange}/>
                    
                    <input type="text" id="email" name="email" placeholder="Your Email" onChange={onEmailChange}/>

                    <input type="text" id="subject" name="subject" placeholder="Subject" onChange={onSubjectChange}/>

                    <textarea id="message" name="message" placeholder="Your Message" onChange={onMessageChange}/>

                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;