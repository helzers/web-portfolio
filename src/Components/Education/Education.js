import React from 'react';
import './Education.scss'

function Education(props){
    return(

        <div className="education">
            <div className="educationPic">
                <img src={props.Logo} alt="School Logo"/>
            </div>
            <div className="educationDetails">
                <h2 id="institution">{props.Institution}</h2>
                <h3 id="Certification">{props.Certification}</h3>
                <h4 id="yearFinished">{props.YearFinished}</h4>
            </div>
        </div>
    )
}

export default Education;