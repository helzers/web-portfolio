import React from 'react';
import "./Home.scss";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import AboutMe from "../../Components/AboutMe/AboutMe";
import EducationTitle from "../../Components/EducationTitle/EducationTitle";
import Education from "../../Components/Education/Education";


function Home() {
  return (
    <div>
      <HomeHeader />
      <AboutMe />
      <EducationTitle />
      <div className="EducationContainer">
        <div className="tud"><Education Institution="Technological University Dublin" Certification="BSc Computer Science International" YearFinished="2019" Logo={process.env.PUBLIC_URL + "/Images/HomePage/tudublin.png"}/></div>
        <div className="hda"><Education Institution="Hochschule Darmstadt" Certification="Erasmus Program" YearFinished="2018" Logo={process.env.PUBLIC_URL + "/Images/HomePage/Hda_logo.svg.png"}/></div>
        <div className="loreto"><Education Institution="Loreto College Wexford" Certification="Leaving Certificate" YearFinished="2015" Logo={process.env.PUBLIC_URL + "/Images/HomePage/loreto-crest.png"}/></div>
        <div className="cct"><Education Institution="College of Computer Training" Certification="FETAC Level 5 Games Analysis and Design" YearFinished="2013" Logo={process.env.PUBLIC_URL + "/Images/HomePage/CCT_Logo.png"}/></div>
        <div className="mauve-bg"><p>.</p></div>
        <div className="glamour-bg"><p></p></div>
      </div>
    </div>
  );
}

export default Home;