import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="website-nav">
                <a exact href="./#/">Home</a>
                <a exact href="./#/experience">Work Experience</a>
                <a exact href="./#/projects">Projects</a>
            </div>
            <div className="footer-logo">
                <a className="footer-logo-link" exact href="./#/"><img src={process.env.PUBLIC_URL + "/Images/Nav/HMSemiBold.png"} alt="Helen Logo"/></a>
            </div>
            <div className="contact">
                <a exact href="./#/contactme">Contact Me</a>
                <a exact href={process.env.PUBLIC_URL + "/Helen_Murphy_CV2020.docx"} download>Download my CV</a>
            </div>
        </div>
    )
}

export default Footer;