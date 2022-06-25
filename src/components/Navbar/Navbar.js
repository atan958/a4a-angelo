import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'

import './Navbar.css'

import Button from '../Button/Button.js'

const logo = require('../../images/logo.png');
const logoW = require('../../images/logo-w.png');

const linkStyleD = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: '400',
};

const linkStyleH = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: '400',
};

const Navbar = () => {
  /*
  * states
  */
  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState(false);

  /*
  * effects
  */
  useEffect(() => {
    /*
    * scrolling adds background colour to navbar 
    */
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight/4) {
        setBgColur(true);
        setLinkStyle(linkStyleH);
        setOpacity((window.scrollY + 80)/window.innerHeight);
      } else {
        setBgColur(false);
        setLinkStyle(linkStyleD);
      }
    });
  }, []);

  /*
  * refs
  */
  const navLinkHome = useRef();

  /*
  * used for navbar css properties
  */
  const [bgColor, setBgColur] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [linkStyle, setLinkStyle] = useState(linkStyleD);

  const handleClick = () => setClick(!click);
  




  return (
    <>
        <nav className="navbar" style={{backgroundColor: bgColor && `rgba(204,164,61,${opacity})`}}>
          <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
              <img src={bgColor ? logo : logoW} style={{height: bgColor ? '80px' : '140px'}}></img>
            </Link>
            {menu && <div className='menu-icon' onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>}
            <ul className={`nav-menu ${click && 'active'}`}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' style={linkStyle}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' style={linkStyle}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' style={linkStyle}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links-mobile' style={linkStyle}>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar

/*
  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
*/ 