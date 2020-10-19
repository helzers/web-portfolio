import React from 'react';
import "./HomeIntro.scss"

function HomeIntro() {
    return (
        <div className="image">
            <img src="./Images/Moon rising.jpg" alt="background" />
            <div className="greeting">
                <h2>HELLO</h2> 
                <p>I'm Helen and I'm a software engineer</p>
            </div>
        </div>
    )

}

export default HomeIntro;