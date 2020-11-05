import React from 'react';
import './Project.scss';

function Project(props) {

    var isDetailsLeft;
    var isBGAltColor;
    if (props.DetailsDirection === "left") {
        isDetailsLeft = true;
        isBGAltColor = false;
    }
    else {
        isDetailsLeft = false;
        isBGAltColor = true;
    }
    
    return(
        <div className={`project ${isBGAltColor ? "altColor" : ""}`} >
            <div className={`projectDetails ${isDetailsLeft ? "left" : "right"}`}>
                <h2 id="projectTitle">{props.ProjectTitle}</h2>
                <div className="websiteLinks">
                    <a href={props.WebsiteLink} id="websiteLink">Website Link</a>
                    <p>·</p>
                    <a href={props.AdobeXDLink} id="adobeXDLink">AdobeXD Project</a>
                    <p>·</p>
                    <a href={props.GitHubLink} id="gitHubLink">GitHub Repo</a>
                </div>
                <p id="projectDesc">{props.ProjectDesc}</p>
            </div>
            <div className={`projectPics ${isDetailsLeft ? "right" : "left"}`}>
                {/* <img src={props.ProjectImages1} alt="Project Screenshots" id="pic1"/>
                <img src={props.ProjectImages2} alt="Project Screenshots" id="pic2"/>
                <img src={props.ProjectImages3} alt="Project Screenshots" id="pic3"/>
                <img src={props.ProjectImages4} alt="Project Screenshots" id="pic4"/>
                <div className="picture-BG"><p></p></div> */}
            </div>
            <div className="project-BG"><p></p></div>
        </div >
    )
}

export default Project;