import React from 'react';
import './ProjectHeader.scss';

function ProjectHeader() {
    return (
        <div className="projectHeaderContainer">
            <div className="titleProject">
                <h1>Projects</h1>
            </div>
            <div className="image1Project">
                <img src={process.env.PUBLIC_URL + "/Images/Project Page/LaptopPinkMug.jpg"} alt="background" />
            </div>
            <div className="image2Project">
                <img src={process.env.PUBLIC_URL + "/Images/Project Page/lightbulb 2 transparent.png"} alt="background" />
            </div>
            <div className="projectHeader-BG"><p></p></div>
            <div className="project-svg-1">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1036.54 502.62">
                    <path class="cls-1" stroke="#8C7F79" strokeWidth="10" d="M0,18.45C135.25,4.56,159.16,1.86,220,105.24s133.2-14.81,242.18,86.58,230.64-33.18,268.09,84.33,198.3,94.4,182.66,144,111,81,111,81c.82-.06,5,1.29,5.88,3A6.88,6.88,0,0,1,1031,507" transform="translate(0.51 -6.49)"/>
                </svg>
            </div>
            <div className="project-svg-2">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880.3 707.0">
                    <path class="cls-1" stroke="#8C7F79" strokeWidth="4" d="M877.13,703.28s-85.23-94.6-131.2-78.14-103.74,5.72-99.65,25.53,59.91-5.44,49.46-53.65-72.17,19.25-122.31-77.46S413.72,474.5,359,320.39,168.09,274.25,171.6,157.14,40.85,133.57,3.63,3.49a1.16,1.16,0,0,0-.18-.37,12.86,12.86,0,0,0-2.26-3A4.11,4.11,0,0,0,0,0" transform="translate(1.31 2.5)"/>
                </svg>
            </div>
        </div>
    )
}

export default ProjectHeader;