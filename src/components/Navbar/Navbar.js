import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'

import './Navbar.css'

const logoB = require('../../images/logo.png');
const logoW = require('../../images/logo-w.png');

const linkStyleW = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: '400',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const linkStyleB = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: '400',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Navbar = () => {
  /*
  * states
  */
  const [click, setClick] = useState(false);

  /*
  * states
  */
    const [pastScrollPoint, setPastScrollPoint] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [linkStyle, setLinkStyle] = useState(linkStyleW);
    const [onHome, setOnHome] = useState(true);

  /*
  * effects
  */
  useEffect(() => {
    const scrollEvent = () => {
      console.log(`ON HOME = ${onHome}`);
      if(!onHome) {

      } else if (window.scrollY >= window.innerHeight/4) {
        setPastScrollPoint(true);
        setLinkStyle(linkStyleB);
        setOpacity((window.scrollY + 80)/window.innerHeight);
      } else {
        setPastScrollPoint(false);
        setLinkStyle(linkStyleW);
      }
    };

    /*
    * scrolling adds background colour to navbar 
    */
    if(onHome) window.addEventListener('scroll', scrollEvent);

    return(() => {
      window.removeEventListener('scroll', scrollEvent)
    });
  }, [onHome]);

  /*
  * refs
  */
  const navLinkHome = useRef();


  const maxNav = () => {
    setOnHome(true);
    setPastScrollPoint(window.scrollY >= window.innerHeight/4);
    setLinkStyle(window.scrollY >= window.innerHeight/4 ? linkStyleB : linkStyleW);
    setOpacity((window.scrollY + 80)/window.innerHeight);
  }

  const minNav = () => {
    setOnHome(false);
    setPastScrollPoint(true);
    setLinkStyle(linkStyleB);
    setOpacity(1);
  };
  
  return (
    <>
        <nav className="navbar" style={{boxShadow: pastScrollPoint && '0 2px 4px 0 rgba(0,0,0,0.2)'}}>
          <div className="navbar-container" style={{backgroundColor: pastScrollPoint && `rgba(204,164,61,${opacity})`}}>
            <Link to='/' className='navbar-logo'>
              <img src={onHome ? (pastScrollPoint ? logoB : logoW) : logoB} style={{height: onHome ? (pastScrollPoint ? '80px' : '140px') : '80px'}}></img>
            </Link>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' style={linkStyle} onClick={maxNav}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/pathways' className='nav-links' style={linkStyle} onClick={minNav}>
                  Pathways
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contacts' className='nav-links' style={linkStyle} onClick={minNav}>
                  Contacts
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about-us' className='nav-links' style={linkStyle} onClick={minNav}>
                  About Us
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