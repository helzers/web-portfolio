import React from 'react';
import './Education.scss'

function Education(props){
    
    var isDetailsAltSize;
    if(props.DetailsID){
        console.log(props.DetailsID);
        isDetailsAltSize = true;
    }
    else {
        isDetailsAltSize = false;
    }
    
    return(
        <div className="education">
            <div className="educationPic">
                <img src={props.Logo} alt="School Logo" id={props.PicID}/>
            </div>
            <div className={`educationDetails ${isDetailsAltSize ? "alt-size" : ""}`}>
                <h2 id="institution">{props.Institution}</h2>
                <h3 id="Certification">{props.Certification}</h3>
                <h4 id="yearFinished">{props.YearFinished}</h4>
            </div>
        </div>
    )
}

export default Education;