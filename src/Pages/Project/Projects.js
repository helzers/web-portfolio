import React, {useEffect} from 'react';
import Project from '../../Components/Project/Project';
import ProjectHeader from '../../Components/ProjectHeader/ProjectHeader';
import CollegeProject from '../../Components/CollegeProject/CollegeProject';
import './Projects.scss';

function Projects() {

    /*
    *   Variables
    */
    
    var portfolioDesc = "I created and designed the website you’re currently viewing using Adobe XD, ReactJS and Sass. This was a fun way to get more creative with the styling of the website. I even created all the svg squiggle lines you see in the headers in Adobe Illustrator for some unique CSS animations. I had several high fidelity wireframes for this website, I’ve included screenshots of some of the styling options I considered. You can view the GitHub Repository or Adobe XD project using the links above";
    var OMWLDesc = "This is a website I made and designed as a place to store all the movies you want to watch. I designed this website using Abode XD to create high fidelity wireframes. The website uses ReactJS, Sass and calls the data used from The Movie Database API. The users movie watch list is saved in their local storage. This was my first project using Adobe XD, ReactJS and Sass. You can visit this website using the link above, or view the GitHub Repository or Adobe XD Project. I've included some screenshots of the website and the wireframes";

    var GCDesc = "Created a web application with a team of international Erasmus students in Ireland, Germany and South Korea. Within the team, I had the role of secretary and had to keep a log of the team meetings and create the agendas. I also had the role of Scrum master and developed the database for the application.";
    var FYPDesc = "I developed an iOS app, to be used for navigation and organisation at festivals that used SWIFT, Google API’s, JavaScript and Firebase ";
    
    var OMWLPicsJSON = '{ "pictures" :[' +
        '{ "picURL" : "/Images/Project Page/OMWL/OMWL-HomePg.png" , "picTitle" : "Home Page"},' +
        '{ "picURL" : "/Images/Project Page/OMWL/OMWL-MyListAll.png" , "picTitle" : "Saved Watchlist Page, All Movies"},' +
        '{ "picURL" : "/Images/Project Page/OMWL/OMWL-MyListWatched.png" , "picTitle" : "Saved Watchlist Page, Watched Movies"},' +
        '{ "picURL" : "/Images/Project Page/OMWL/OMWL-Colors.jpg" , "picTitle" : "Project Color Scheme"},' +
        '{ "picURL" : "/Images/Project Page/OMWL/OMWL-XDMockup.png" , "picTitle" : "AdobeXD Mockup of Pages"}' +
    ']}';

    var PortfolioPicsJSON = '{ "pictures" :[' +
        '{ "picURL" : "/Images/Project Page/Portfolio/Portfolio-AdobeXD-Homepg.png" , "picTitle" : "AdobeXD Home Page"},' +
        '{ "picURL" : "/Images/Project Page/Portfolio/Portfolio-AdobeXD-Contactpg.png" , "picTitle" : "AdobeXD Contact Me Page"},' +
        '{ "picURL" : "/Images/Project Page/Portfolio/Portfolio-AdobeXD-AltDesigns.png" , "picTitle" : "Alternative Website Designs created in AdobeXD"},' +
        '{ "picURL" : "/Images/Project Page/Portfolio/Portfolio-SVGLines.png" , "picTitle" : "SVG Lines created in Adobe Illustrator"},' +
        '{ "picURL" : "/Images/Project Page/Portfolio/HMSemiBold.png" , "picTitle" : "Portfolio Logo and Favicon"},' +
        '{ "picURL" : "/Images/Project Page/Portfolio/Portfolio-ColorScheme.png" , "picTitle" : "Portfolio Color Scheme"}' +
    ']}';

    var OMWLSlides = JSON.parse(OMWLPicsJSON);
    var PortfolioSlides = JSON.parse(PortfolioPicsJSON);



    /*
    *   Use Effects
    */

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    

    
    return (
        < >
            <ProjectHeader />
            <div className="homeProjects">
                <Project DetailsDirection="left"  CarouselPictures={PortfolioSlides.pictures} ProjectTitle="Portfolio Website" WebsiteLink="https://helzers.github.io/web-portfolio/#/" AdobeXDLink="https://xd.adobe.com/view/e852151f-57c4-4b10-9dde-345fd35d7c89-bd01/grid/" GitHubLink="https://github.com/helzers/web-portfolio" ProjectDesc={portfolioDesc} />
                <Project DetailsDirection="right" CarouselPictures={OMWLSlides.pictures} ProjectTitle="Online Movie Watch List" WebsiteLink="https://helzers.github.io/movies-watchlist" AdobeXDLink="https://xd.adobe.com/view/a602df5b-644a-429b-8187-bbddc39b7579-f351/grid/" GitHubLink="https://github.com/helzers/movies-watchlist" ProjectDesc={OMWLDesc} />
            </div>
            <div className="collegeProjectsContainer">
                <h1>College Projects</h1>
                <div className="GC"><CollegeProject CollegeProjectTitle="Global Classroom" CollegeProjectDesc={GCDesc}/></div>
                <div className="FYP"><CollegeProject CollegeProjectTitle="Final Year Project" CollegeProjectDesc={FYPDesc}/></div>
            </div>
        </ >
    )
}

export default Projects;