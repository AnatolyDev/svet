import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Preview = ({typeLight}) => {
    return (
        <div className='main-carousel'>
            <Carousel>
                <div>
                    <img src={`img/assets/${typeLight}/0.jpg`} />
                </div>
                <div>
                    <img src={`img/assets/${typeLight}/1.jpg`} />
                </div>
                <div>
                    <img src={`img/assets/${typeLight}/2.jpg`} />
                </div>
            </Carousel>
        </div>
    )
}

export default Preview;