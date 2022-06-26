import React, { useState, useRef, useEffect } from 'react'

const Slide = ({slide, current, index, onHover, offHover}) => {
    return (
        <div className={`slide ${(current === index) && 'active'}`} onMouseEnter={onHover} onMouseLeave={offHover}>
            <div className='slide-desc'>
                <p>{slide.description}</p> 
            </div>
            <img src={slide.image} className='slide-img'/>
            <div className='details'>
                <h2>{slide.name}</h2>
                <h3>{slide.occupation}</h3>
            </div>
        </div>
    )
}

export default Slide