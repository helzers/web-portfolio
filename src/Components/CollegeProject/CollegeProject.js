import React from 'react';
import './CollegeProject.scss';

function CollegeProject(props) {
    return(
        <div className="collegeProject">
            <h2>{props.CollegeProjectTitle}</h2>
            <p>{props.CollegeProjectDesc}</p>
        </div>
    )
}

export default CollegeProject;