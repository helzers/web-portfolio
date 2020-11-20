import React, {useEffect} from 'react';
import "./Home.scss";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import AboutMe from "../../Components/AboutMe/AboutMe";
import EducationTitle from "../../Components/EducationTitle/EducationTitle";
import Education from "../../Components/Education/Education";


function Home() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scrollEdu',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);
  
  return (
    <div>
      <HomeHeader />
      <AboutMe />
      <EducationTitle />
      <div className="EducationContainer">
        <div className="tud"><Education Institution="Technological University Dublin" Certification="BSc Computer Science International" YearFinished="2019" Logo={process.env.PUBLIC_URL + "/Images/HomePage/tudublin.png"} DetailsID="alt-size"/></div>
        <div className="hda"><Education Institution="Hochschule Darmstadt" Certification="Erasmus Program" YearFinished="2018" Logo={process.env.PUBLIC_URL + "/Images/HomePage/Hda_logo.svg.png"} PicID="alt-pic-size"/></div>
        <div className="loreto"><Education Institution="Loreto College Wexford" Certification="Leaving Certificate" YearFinished="2015" Logo={process.env.PUBLIC_URL + "/Images/HomePage/loreto-crest.png"} PicID="alt-pic-size"/></div>
        <div className="cct"><Education Institution="College of Computer Training" Certification="FETAC Level 5 Games Analysis and Design" YearFinished="2013" Logo={process.env.PUBLIC_URL + "/Images/HomePage/CCT_Logo.png"}/></div>
        <div className="edu-svg">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 682.62 685.39">
            <path class="cls-1" stroke="#B5A19A" strokeWidth="10" d="M7,5.18h0C41.63,109.76,113.42,30.49,149.62,122.8S212.29,243.45,306,265.21s22,121.54,83.57,157.47,141-27.91,147.63,64.82c4.65,64.51,91.79,151,144.41,197.76" transform="translate(-2.29 -3.61)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;