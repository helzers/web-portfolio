import React from 'react';
import './Jobs.scss';

//props for job info
function Jobs(props) {
    return(
        <div className="jobContainer" >    
            <div className="jobDetails">
                <h2 id="jobTitle">{props.jobTitle}</h2>
                <h3 id="company">{props.companyName}</h3>
                <h3>    -    </h3>
                <h3 id="companyAddr">{props.companyAddr}</h3>
                <p id="jobDesc">{props.jobDesc}</p>
            </div>
            <div className="imageLogo">
                <img id="companyLogo" src={props.companyLogo} alt="companyLogo"/>
            </div>
        </div >
    )
}

export default Jobs;