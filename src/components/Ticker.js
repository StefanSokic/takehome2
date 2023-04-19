import React from 'react';


export function Header() {
    return <header className='Ticker'>
    <div className='SubTicker Top'>
      <Text />
    </div>
    <div className='SubTicker Bottom HeaderBottom'>
      <Text />
    </div>
  </header>
}

export function Footer() {
    return <header className='Ticker Footer'>
    <div className='SubTicker Top FooterTop'>
      <Text />
    </div>
    <div className='SubTicker Bottom'>
      <Text />
    </div>
  </header>
}

function Text() {
    return <>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
          <p>STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X STEFAN X MSCHF X </p>
      </>;
  }