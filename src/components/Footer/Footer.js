import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className=''></div>
      </div>
      <div className='bottom'>
        <div className='copyright'>
          Copyright (2022) by Angelo Software Solutions
        </div>
        <div className='social-media-container'>
          <div className='social-media'>
            <i class="fa-brands fa-facebook-f fa-2x"/>
          </div>
          <div className='social-media'>
            <i class="fa-brands fa-instagram fa-2x"/>
          </div>
          <div className='social-media'>
            <i class="fa-brands fa-twitter fa-2x"/>
          </div>
          <div className='social-media'>
            <i class="fa-brands fa-linkedin-in fa-2x"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer