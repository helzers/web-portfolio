import React from 'react';
import './EducationTitle.scss';

function EducationTitle() {
    return (
        <div className="eduTitleContainer">
            <div className="eduTitle">
                <h1>Education</h1>
            </div>
            <div className="gradImage">
                <img src={process.env.PUBLIC_URL + "/Images/HomePage/Grad-Cropped.jpg"} 
                alt="background" />
            </div>
            <div className="hdaImage">
                <img src={process.env.PUBLIC_URL + "/Images/HomePage/HDA_BW.png"} 
                alt="background" />
            </div>
        </div>
    )
}

export default EducationTitle;