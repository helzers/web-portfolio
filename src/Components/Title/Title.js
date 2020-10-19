import React from 'react';
import './Title.scss'

function Title(props) {
    return(
        <div className={props.Style}>
            <div className="title">
                <h2>{props.Title}</h2>
            </div>
            <div></div>
        </div>
    )
}

export default Title;