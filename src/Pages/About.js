import React from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import Education from '../Components/Education/Education';
import TitleWithPic from '../Components/TitleWithPic/TitleWithPic';
import Title from '../Components/Title/Title';

function About() {
    return(
        < >
            <AboutMe />
            <TitleWithPic Style="educationTitle" Title="Education" TitleImage="/Images/IMG_0101.jpeg"/>
            <Education Orientation="picLeft" Institution="Technological University Dublin" Certification="Bachelors of Science(Hons)" YearFinished="2019" Logo="/Images/tudublin.png"/>
            <Education Orientation="picRight" Institution="Hochschule Darmstadt" Certification="Erasmus Program" YearFinished="2018" Logo="/Images/Hda_logo.svg.png"/>
            <Education Orientation="picLeft" Institution="Loreto College Wexford" Certification="Leaving Certificate" YearFinished="2015" Logo="/Images/loreto-crest.png"/>
            <Education Orientation="picRight" Institution="College of Computer Training" Certification="FETAC Level 5 Games Analysis and Design" YearFinished="2013" Logo="/Images/CCT_Logo.jpg"/>
            <Title Title="Skills" />
        </ >
    )
}

export default About;