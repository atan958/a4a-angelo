import React, {useState} from 'react'

import './Slider.css'
import SliderData from './SliderData'

const Slider = () => {
    return (
        <div className='slider'>
            {SliderData.map((slide) => <img src={slide.image} style={{zIndex:5}}/>)}
        </div>
    )
}

export default Slider