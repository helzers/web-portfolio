import React from 'react';
import Project from '../../Components/Project/Project';
import TitleWithPic from '../../Components/TitleWithPic/TitleWithPic';

function Projects() {
    
    var portfolioDesc = "This project is the website you're currently viewing. I built this using ReactJS";

    var GCDesc = "Created a web application with a team of international Erasmus students in Ireland, Germany and South Korea. Within the team, I had the role of secretary and had to keep a log of the team meetings and create the agendas. I also had the role of Scrum master and developed the database for the application.";

    var FYPDesc = "I developed an iOS app, to be used for navigation and organisation at festivals that used SWIFT, Google API’s, JavaScript and Firebase ";
    
    return (
        < >
            <TitleWithPic Style="projectTitle" Title="Projects" TitleImage="/Images/project.png" />
            <Project ProjectTitle="Portfolio Website" ProjectDesc={portfolioDesc} ProjectImages="/Images/WebsiteTemplate.jpg"/>
            <Project ProjectTitle="Global Classroom Website" ProjectDesc={GCDesc} ProjectImages="/Images/WebsiteTemplate.jpg"/>
            <Project ProjectTitle="Final Year Project" ProjectDesc={FYPDesc} ProjectImages="/Images/WebsiteTemplate.jpg"/>
        </ >
    )
}

export default Projects;