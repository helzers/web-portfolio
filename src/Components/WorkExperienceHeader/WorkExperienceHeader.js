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
        </div>
    )
}

export default WorkExperienceHeader;