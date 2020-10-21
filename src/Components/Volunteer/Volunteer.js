import React from 'react';
import './Volunteer.scss'

function Volunteer(props) {
    return(
        <div className="roleContainer"> 
            <div className="companyLogo">
                <img id="companyLogo" src={props.companyLogo} alt='companyLogo'/>
            </div>
            <div className="roleDetails">
                <h2 id="role">{props.role}</h2>
                <h3 id='company'>{props.companyName}</h3>
                <p id='roleDesc'>{props.roleDesc}</p>
            </div>
        </div>
    )
}

export default Volunteer;