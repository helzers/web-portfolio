import React from 'react';
import "./HomeHeader.scss"

function HomeHeader() {
    return (
        <div className="image">
            <img src={process.env.PUBLIC_URL + "/Images/HomePage/Header-Cropped.jpg"} alt="background" />
            <div className="greeting">
                <h2>HELLO</h2> 
                <p>I'm Helen and I'm a Developer</p>
            </div>
        </div>
    )

}

export default HomeHeader;