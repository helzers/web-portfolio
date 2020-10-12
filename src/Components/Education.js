import React from 'react';
import '../CSS/Education.css'

function Education(props){
    return(
        <>
            <div className="picRight">
                {props.Orientation === "picRight" && (
                    <div className="education">
                        <div className="educationDetails">
                            <h2 id="institution">{props.Institution}</h2>
                            <h3 id="Certification">{props.Certification}</h3>
                            <h4 id="yearFinished">{props.YearFinished}</h4>
                        </div>
                        <div className="educationPic">
                            <img src={props.Logo} alt="School Logo"/>
                        </div>
                </div>
                )}
            </div>

            <div className="picLeft">
                {props.Orientation === "picLeft" && (
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
                )}
            </div>


        </>
    )
}

export default Education;