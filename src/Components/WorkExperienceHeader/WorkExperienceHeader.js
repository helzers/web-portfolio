import React from 'react';
import './WorkExperienceHeader.scss';

function WorkExperienceHeader() {
    return (
        <div className="workHeaderContainer">
            <div className="titleWork">
                <h1>Work Experience</h1>
            </div>
            <div className="image1">
                <img src={process.env.PUBLIC_URL + "/Images/WorkPage/workLaptop.jpg"} alt="background" />
            </div>
            <div className="image2">
                <img src={process.env.PUBLIC_URL + "/Images/WorkPage/declutter1.jpg"} alt="background" />
            </div>
            <div className="workHeader-BG"><p></p></div>
            <div className="workHeader-svg-1">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 932.97 659.05">
                    <path class="cls-1" stroke="#8C7F79" strokeWidth="5" d="M17.24,663.91c8.54.21,9.82-9.87,15.69-21.74,16-32.41,35-61.35,84.17-70.82,157.25-30.3,138.59-262.27,285.6-212.28S592.52,93.78,707,135.4C820.58,176.71,944.28,15.3,946.09,12.92v0h0" transform="translate(-17.12 -9.87)"/>
                </svg>
            </div>
            <div className="workHeader-svg-2">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1243.75 566.75">
                    <path class="cls-1" stroke="#8C7F79" strokeWidth="10" d="M1308.8,22.68s-3.31.66-3.91,1.64c-2,3.17-102.19,154.14-170.82,155.8-69.34,1.68-170.89-51.42-280.25,24.48s-150.5-15.77-205.26,79.57-68.6,63.9-156.27,72.59-78.73,71.9-172.79,89.74S212.75,518.79,66,583.25c-3.22,1.42-3.09,6.54-3.09,6.54" transform="translate(-57.94 -17.78)"/>
                </svg>
            </div>
        </div>
    )
}

export default WorkExperienceHeader;