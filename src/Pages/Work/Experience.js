import React,{useEffect} from 'react';
import Jobs from '../../Components/Jobs/Jobs';
import WorkExperienceHeader from "../../Components/WorkExperienceHeader/WorkExperienceHeader";
import Volunteer from '../../Components/Volunteer/Volunteer';
import "./Experience.scss";


function WorkExperience() {

    /*
    *   Variables
    */
    
    var OJJobDesc = "I worked on the company’s largest airline client, maintaining their online technologies using Java, JavaScript, JSP, XML, XSL, HTML, CSS and internal tools. My work included designing and implementing new features to update the website to align with EU Law. I worked on application support, fixing critical bugs. Used GitHub and SVN for version control. Tasks were organised into sprints, which had strict time estimates to complete work on time";

    var classRepDesc = "I managed communications between the class and college administration, dealing with issues regarding scheduling, grading and personal circumstances for students during final year and during Erasmus in 3rd year";
    
    var CoderDojoDesc = "I volunteered to help teach kids from ages 5-7, leading a class that taught the basics of coding through scratch and explained basic concepts such as loops";



    /*
    *   Use Effects
    */

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);



    return (
        <div>
            <WorkExperienceHeader />
            <Jobs jobTitle="Software Engineer" companyName="OpenJaw Technologies" companyAddr="Madrid" jobDesc={OJJobDesc} companyLogo={process.env.PUBLIC_URL + "/Images/WorkPage/OpenJaw-Logo.png"}/>
            <div className="volunteer">
                <h2>Volunteer Experience</h2>
                <div className="classRep"><Volunteer role="Class Representative" companyName="Technological University Dublin" roleDesc={classRepDesc} companyLogo={process.env.PUBLIC_URL + "/Images/HomePage/tudublin.png"}/></div>
                <div className="coderdojo"><Volunteer role="CoderDojo Mentor" companyName="CoderDojo Wexford" roleDesc={CoderDojoDesc} companyLogo={process.env.PUBLIC_URL + "/Images/WorkPage/coderdojologo.png"}/></div>
            </div>
        </div>
    );
}

export default WorkExperience;