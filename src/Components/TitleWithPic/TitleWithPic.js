import React from 'react';
import './TitleWithPic.scss';

function TitleWithPic(props) {
    return (
        <div className={props.Style}>
            <div className="TitleContainer">
                <div className="titleBacker"><p>.</p></div>
                <div className="titleWithPic">
                    <h1>{props.Title}</h1>
                </div>
                <div className="TitleImage">
                    <img src={props.TitleImage} alt="background" />
                </div>
            </div>

        </div>
    )
}

export default TitleWithPic;