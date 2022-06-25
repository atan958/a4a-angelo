import React from 'react'
import './Hero.css'

import Button from '../Button/Button.js'

const heroClip = require('../../videos/hero-greenhouse.mp4');

const signUpBtnStyle = {
  width: '200px'
}

const watchBtnStyle = {
  width: '200px'
}

const Hero = () => {
  return (
    <section className='hero'>
      <video src={heroClip} autoPlay loop muted></video>
      <div className='hero-shadow'>
        <div className='cta-title'>
          GROWING <span>TOMORROW'S LEADERS</span> TODAY
          <div className='cta-subtitle'>
            Join us in this wonderful adventure!
          </div>
          <div className='btn-container'>
            <Button buttonStyle='btn--outline' customStyle={signUpBtnStyle}>Sign Up</Button>
            <Button customStyle={watchBtnStyle}>Watch Clip &nbsp;<i class="fa-solid fa-circle-play"></i></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero