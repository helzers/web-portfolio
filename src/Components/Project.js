import React from 'react';
import '../CSS/Project.css';

function Project(props) {
    return(
        <div className="project" >
            <div className="projectDetails">
                <h2 id="projectTitle">{props.ProjectTitle}</h2>
                <p id="projectDesc">{props.ProjectDesc}</p>
            </div>
            <div className="projectPics">
                <img src={props.ProjectImages} alt="Project Screenshots" />
            </div>
        </div >
    )
}

export default Project;