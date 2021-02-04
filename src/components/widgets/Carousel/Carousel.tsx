import React from 'react';
// https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carousel.scss'
import { Carousel } from 'react-responsive-carousel';

interface props {
    data: string[];
    legend?: string;
    name: string;
    className?: any
}


export default ({ data, legend, name, className, ...rest }: props) => {
    return (
        <Carousel
            className={className}
            autoPlay
            infiniteLoop
            interval={5000}
            useKeyboardArrows
            stopOnHover
            transitionTime={800}
            {...rest}
            showStatus={false}
            showIndicators={false}
        >
            { data.map((image, i) => (
                <div key={i}>
                    <img src={image} alt={name + 'image'} />
                    {legend ? <span>{legend}</span> : null}
                </div>
            ))}
        </Carousel>
    )
}