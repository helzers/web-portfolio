import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PicCarousel(props) {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.ProjectImages1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{props.CaptionTitle}</h3>
                    <p>{props.Caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PicCarousel;