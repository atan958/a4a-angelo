import React, {useEffect, useState} from 'react'

import './ImageSlider.css'
import SliderData from './SliderData'

const ImageSlider = () => {
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            nextSlide();
        }, 6000);
        return(() => {
            clearTimeout(timeout);
        });
    });

    const nextSlide = () => (current === SliderData.length - 1) ? setCurrent(0) : setCurrent(current => current+1);
    const prevSlide = () => (current === 0) ? setCurrent(SliderData.length - 1) : setCurrent(current => current-1);

    return (
        <div className='slider'>
            <h1 className='slider-title'>
                Hear from some of our past students...
            </h1>
            <div className='slider-container'>
                <i className="slider-control left-control fas fa-angle-left fa-3x" onClick={prevSlide}/>
                {SliderData.map((slide,i) => {
                    return (
                        <div className={`slide ${(current === i) && 'active'}`}>
                            {(current === i) && <img src={slide.image}/>}
                            <h2>{slide.name}</h2>
                            <h3>{slide.occupation}</h3>
                        </div>
                    );
                })}
                <i className="slider-control right-control fas fa-angle-right fa-3x" onClick={nextSlide}/>
            </div>
            <div>
            </div>
        </div>
    )
}

export default ImageSlider