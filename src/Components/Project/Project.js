import React from 'react';
import PicCarousel from '../Carousel/Carousel';
import './Project.scss';


function Project(props) {

    /*
    *   Variables
    */
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
                <PicCarousel CarouselPictures={props.CarouselPictures}/>
            </div>
        </div>
    )
}

export default Project;