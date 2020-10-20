import React from 'react';
import './AboutMe.scss'


function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutMeImage">
                <img src={process.env.PUBLIC_URL + "/Images/HomePage/BioPic-Cropped.jpg"} alt="Headshot" />
            </div>
            <div className="bio">
                <h2 id="aboutMeTitle">About Me</h2>
                <p id="aboutMeBio">I graduated from Computer Science International, TUD in May
                 2019. Soon after I moved to Madrid, Spain to work as a Software Engineer in 
                 Openjaw.  I was let go in April 2020 due to coronavirus, and moved back to 
                 Ireland in August 2020. Since then I’ve been searching for a new job and 
                 improving my skills by learning ReactJS, SASS and Adobe XD</p>
            </div>
        </div>
    )
}

export default AboutMe;