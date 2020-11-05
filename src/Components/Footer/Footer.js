import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="website-nav">
                <a exact href="/#/">Home</a>
                <a href="/#/experience">Work Experience</a>
                <a href="/#/projects">Projects</a>
            </div>
            <div className="footer-logo">
                <a className="footer-logo-link" exact href="/#/">Helen Murphy</a>
            </div>
            <div className="contact">
                <p>Contact Me</p>
                <p>Download my CV</p>
            </div>
        </div>
    )
}

export default Footer;