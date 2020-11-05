import React from 'react';
import './ProjectHeader.scss';

function ProjectHeader() {
    return (
        <div className="projectHeaderContainer">
            <div className="titleProject">
                <h1>Projects</h1>
            </div>
            <div className="image1Project">
                <img src={process.env.PUBLIC_URL + "/Images/Project Page/images-6.jpeg"} alt="background" />
            </div>
            <div className="image2Project">
                <img src={process.env.PUBLIC_URL + "/Images/Project Page/lightbulb 2 transparent.png"} alt="background" />
            </div>
            <div className="projectHeader-BG"><p></p></div>
        </div>
    )
}

export default ProjectHeader;