import React from 'react';
import '../CSS/Volunteer.css'

function Volunteer(props) {
    return(
        <div className="roleContainer"> 
            <div className="roleDetails">
                <h2 id="role">{props.role}</h2>
                <h3 id='company'>{props.companyName}</h3>
                <h3>    -    </h3>
                <h3 id='companyAddr'>{props.companyAddr}</h3>
                <p id='roleDesc'>{props.roleDesc}</p>
            </div>
            <div className="companyLogo">
                <img id="companyLogo" src={props.companyLogo} alt='companyLogo'/>
            </div>
        </div>
    )
}

export default Volunteer;