import React from 'react';
import '../styles/App.css';

import { Link } from "react-router-dom";
import Logo from '../assets/menu/mschf-x-logo.gif' ;
import PDF from '../assets/terms-and-conditions.pdf'
import MenuEye from '../assets/menu/eye-icon.gif'
import MenuLightning from '../assets/menu/lightning-icon.gif'
import MenuClipBoard from '../assets/menu/clipboard-icon.gif'
import LeftArrow from '../assets/menu/arrow-button-left.png';
import RightArrow from '../assets/menu/arrow-button-right.png';


function Overlay() {
    return <>
      <Link to='/'><img className='Logo' width="138px" height="150px" src={Logo} alt="logo" /></Link>
      <div className='Menu'>
        <a className='MenuOption Row'>
          <img className='MenuLogo' src={MenuEye} alt="look-logo" />
          <Link className='MenuOption' to='/look'>LOOK</Link>
        </a>
        <a className='MenuOption Row'>
          <img className='MenuLogo' src={MenuLightning} alt="read-logo" />
          <Link className='MenuOption' to='/read'>READ</Link>
        </a>
        <a href={PDF} target='_blank' className='Terms MenuOption Row'>
          <img className='Terms MenuLogo' src={MenuClipBoard} alt="terms-logo" />
          <span className='Terms'>TERMS + CONDITIONS</span>
        </a>
      </div>
      <a className='ArrowContainer'>
        <img src={LeftArrow} className='LeftArrow Bordered Shadowed' alt="left-arrow" />
      </a>
      <a className='ArrowContainer'>
        <img src={RightArrow} className='RightArrow Bordered Shadowed' alt="right-arrow" />
      </a>
    </>
}

export default Overlay;