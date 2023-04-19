import React from 'react';

import '../styles/App.css';

import X from '../assets/menu/x2.png'

// TODO: wrap this up
function Order() {
    return (
        <div className='Order Bordered Shadowed'>
          <div className='OrderTitle'>
              <span>MSCHF </span> 
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Supreme </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> The North Face </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Adidas </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Stüssy </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Kith </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Palace </span>  
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Chinatown Market </span>
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> Off-White </span>
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> BAPE </span>
              <img width="20px" className ='X' src={X} alt="x" /> 
              <span> [CENSORED] </span>
            <p>[NO SHIT WE DIDN'T ASK FOR THEIR PERMISSION]</p>
          </div>
          <div className='OrderPrice'>
            <div className='OrderPriceLeft'>
              <p>10 BRANDS, 1 SHIRT = </p>
              <h1>$1010.10</h1>
            </div>
            <div className='OrderPriceRight'>
              <p>EVERY SHIRT HAS PIECES FROM ALL 10 BRANDS.</p>
              <p>EVERY GARMENT IS COMPLETELY DIFFERENT.</p>
            </div>
          </div>
          <div className='OrderSize'>
            <div className="OrderSizeLeft">
              <p>SELECT SIZE</p>
              <p>SEE SIZE GUIDE </p>
            </div>
            <a className='Bordered Shadowed'>S/M</a>
            <a className='Bordered Shadowed OrderSizeWhite'>M/L</a>
          </div>
        </div>
    )
}

export default Order;
