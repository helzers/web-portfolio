import React from 'react';
import './AboutMe.scss'


function AboutMe() {
    
    /*
    *   Functions
    */
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    


    return (
        <div className="aboutMe">
            <div className="aboutMeImage">
                <img src={process.env.PUBLIC_URL + "/Images/HomePage/BioPic-Cropped.jpg"} alt="Headshot" />
            </div>
            <div className="svg-line">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982.66 574.96">
                    <path id="svg-path" class="cls-1" stroke="#d6c3bf" strokeWidth="20" d="M18.26,17.71a92,92,0,0,0,36.33,54c35.13,24.75,79.83,16.42,118.12,32.05a52.6,52.6,0,0,1,19.72,13.53c5.26,5.89,9,12.86,12.91,19.68,8.2,14.32,17.66,28.93,36.06,28.51l.81-.1c7.43-.91,14.48-5.05,21-8.43l1-.48c13.71-6.27,22.91-7.83,35.74,1.81,11.56,8.7,15.8,19.29,21.52,31.93a34.53,34.53,0,0,0,7.24,9c.13.1,5.28,6.59,9.14,9.13,1,.63,4.59,4.08,9.1,6,22.22,9.62,49.06,7.32,68.24,24.26,15.09,13.34,23.78,32.28,33.54,49.49,12.47,22,25.68,43.73,41.34,63.61,13.23,16.8,30.43,34.55,53.22,35.5s44.07-11.28,66.26-.32l4.81,2c.94.18,4.18,2.43,6.17,3.53l.53.35c27.76,13.71,45.54,38.73,67.83,59.3,20.84,19.24,46.65,34.71,75.75,25.85,23.39-7.13,46.49-23.34,71.45-12.28,22,9.75,33.52,33.35,43.23,53.88,5.47,11.55,11,23.43,19.48,33.14,9.66,11.08,21.5,16.23,35.43,19.85l2.06.89c19.6,5.52,37.22,6.29,57.42,3.74M18.24,17.61v.09h0" transform="translate(-13.37 -16.47)"
                    />
                </svg>
            </div>

            {/*   
            
            4.83-1.33A91.79,
                    91.79,0,0,0,54.59,71.66c35.13,24.75,79.83,16.42,118.12,32.05a52.6,52.6,0,0,1,19.72,13.53c5.26,  
            
            5.89,9,12.86,12.91,19.68,8.2,14.32,17.66,28.93,36.06,28.51l.81-.1c7.43-.91,14.48-5.05,
                    21-8.43l1-.48c13.71-6.27,22.91-7.83,35.74,1.81,11.56,8.7,15.8,19.29,21.52,31.93a34.53,
                    34.53,0,0,0,7.24,9c.13.1,5.28,6.59,9.14,9.13,1,.63,4.59,4.08,9.1,6,22.22,9.62,49.06,7.32,
                    68.24,24.26,15.09,13.34,23.78,32.28,33.54,49.49,12.47,22,25.68,43.73,41.34,63.61,13.23,
                    16.8,30.43,34.55,53.22,35.5s44.07-11.28,66.26-.32l1,.4a28.14,28.14,0,0,1,10,
                    5.11l.53.35c27.76,13.71,45.54,38.73,67.83,59.3,20.84,19.24,46.65,34.71,75.75,25.85,
                    23.39-7.13,46.49-23.34,71.45-12.28,22,9.75,33.52,33.35,43.23,53.88,5.47,11.55,11,23.43,
                    19.48,33.14,9.66,11.08,21.5,16.23,35.43,19.85l2.06.89c19.6,5.52,37.22,6.29,57.42,3.74,
                    3.14-.39,3.23,4.25.2,4.75
                */}

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