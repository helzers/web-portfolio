import React from 'react';
import TitleWithPic from '../Components/TitleWithPic';
import Jobs from '../Components/Jobs';
import Title from '../Components/Title';

import Volunteer from '../Components/Volunteer';


function WorkExperience() {
    
    var OJJobDesc = "I worked on the company’s largest airline client, maintaining their online technologies using Java, JavaScript, JSP, XML, XSL, HTML, CSS and internal tools. My work included designing and implementing new features to update the website to align with EU Law. I worked on application support, fixing critical bugs. Used GitHub and SVN for version control. Tasks were organised into sprints, which had strict time estimates to complete work on time";
    var OJLogo = "/Images/OpenJaw-Logo-Updated-Travel-Sky-2016.png";

    var classRepDesc = "I managed communications between the class and college administration, dealing with issues regarding scheduling, grading and personal circumstances for students during final year and during Erasmus in 3rd year";
    var TUDLogo = "/Images/tudublin.png";

    var CoderDojoDesc = "I volunteered to help teach kids from ages 5-7, leading a class that taught the basics of coding through scratch and explained basic concepts such as loops";
    var CoderDojoLogo = "/Images/rsz_coderdojologo1.png";

    return (
        <div>
            <TitleWithPic Style="workExperience" Title="WORK EXPERIENCE" TitleImage="/Images/BedWorkSpace.jpg" />
            <Jobs jobTitle="Software Engineer" companyName="OpenJaw Technologies" companyAddr="Madrid" jobDesc={OJJobDesc} companyLogo={OJLogo}/>
            <Title Style="Volunteer" Title="Volunteer Experience"/>
            <Volunteer role="Class Representative" companyName="Technological University Dublin" companyAddr="Dublin" roleDesc={classRepDesc} companyLogo={TUDLogo}/>
            <Volunteer role="CoderDojo Mentor" companyName="CoderDojo" companyAddr="Wexford" roleDesc={CoderDojoDesc} companyLogo={CoderDojoLogo}/>
        </div>
    );
}

export default WorkExperience;