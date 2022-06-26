import React, {useEffect, useState} from 'react'

import './ImageSlider.css'
import Slide from './Slide';
import SlideIndicator from './SlideIndicator';
import SliderData from './SliderData'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isReading, setIsReading] = useState(false);

    useEffect(() => {
        if(isReading) return;
        const timeout = setTimeout(() => {
            nextSlide();
        }, 6000);
        return(() => {
            clearTimeout(timeout);
        });
    });

    const stopAutoSlide = () => setIsReading(true);
    const startAutoSlide = () => setIsReading(false);

    const nextSlide = () => (current === SliderData.length - 1) ? setCurrent(0) : setCurrent(current => current+1);
    const prevSlide = () => (current === 0) ? setCurrent(SliderData.length - 1) : setCurrent(current => current-1);
    const jumpSlide = (i) => setCurrent(i);

    return (
        <div className='slider'>
            <h1 className='slider-title'>
                Hear from some of our past students...
            </h1>
            <div className='slider-container'>
                <i className="slider-control left-control fas fa-angle-left fa-3x" onClick={prevSlide}/>
                {SliderData.map((slide,i) => {
                    return (
                        <Slide slide={slide} current={current} index={i} onHover={stopAutoSlide} offHover={startAutoSlide}/>
                    );
                })}
                <i className="slider-control right-control fas fa-angle-right fa-3x" onClick={nextSlide}/>
            </div>
            <div className='indicator-container'>
                {SliderData.map((slide,i) => {
                    return (
                        <SlideIndicator current={current} index={i} onClick={()=>jumpSlide(i)}/>
                    );
                })}
            </div>
        </div>
    )
}

export default ImageSlider