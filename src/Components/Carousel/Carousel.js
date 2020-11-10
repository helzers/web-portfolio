import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PicCarousel(props) {
    
    var Slides = props.CarouselPictures;

    console.log("Slides:" + Slides);
    
    return(
        <Carousel>
            {/* {Slides.pictures.map(picture => (
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL +picture.picURL}
                    alt="Slide"
                    />
                    <Carousel.Caption>
                        <h3>{picture.picTitle}</h3>
                        <p>{props.Caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))} */}
        </Carousel>
    )
}

export default PicCarousel;