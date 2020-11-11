import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

function PicCarousel(props) {
    
    var Slides = props.CarouselPictures;

    console.log("Slides:" + Slides);
    
    return(
        <Carousel>
            {Slides.map(picture => (
                <Carousel.Item>
                    <div className="imgContainer">
                        <img
                        className="d-block w-100 mx-auto"
                        src={process.env.PUBLIC_URL +picture.picURL}
                        alt="Slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <p>{picture.picTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}


export default PicCarousel;