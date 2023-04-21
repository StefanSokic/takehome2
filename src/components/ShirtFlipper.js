import React, { useState, useEffect } from 'react';

import '../styles/App.css';

import Shirt1 from '../assets/flipper/shirts/shirt1.svg';
import Shirt1Blue from '../assets/flipper/shirts/shirt1-blue.svg';
import Shirt2 from '../assets/flipper/shirts/shirt2.svg';
import Shirt2Blue from '../assets/flipper/shirts/shirt2-blue.svg';
import Shirt3 from '../assets/flipper/shirts/shirt3.svg';
import Shirt3Blue from '../assets/flipper/shirts/shirt3-blue.svg';
import Shirt4 from '../assets/flipper/shirts/shirt4.svg';
import Shirt4Blue from '../assets/flipper/shirts/shirt4-blue.svg';
import Shirt5 from '../assets/flipper/shirts/shirt5.svg';
import Shirt5Blue from '../assets/flipper/shirts/shirt5-blue.svg';
import Shirt6 from '../assets/flipper/shirts/shirt6.svg';
import Shirt6Blue from '../assets/flipper/shirts/shirt6-blue.svg';
import Shirt7 from '../assets/flipper/shirts/shirt7.svg';
import Shirt7Blue from '../assets/flipper/shirts/shirt7-blue.svg';
import Shirt8 from '../assets/flipper/shirts/shirt8.svg';
import Shirt8Blue from '../assets/flipper/shirts/shirt8-blue.svg';
import Shirt9 from '../assets/flipper/shirts/shirt9.svg';
import Shirt9Blue from '../assets/flipper/shirts/shirt9-blue.svg';
import Shirt10 from '../assets/flipper/shirts/shirt10.svg';
import Shirt10Blue from '../assets/flipper/shirts/shirt10-blue.svg';

import SupremeLogo from '../assets/flipper/logos/supreme-logo.svg';
import SupremeLogoBlue from '../assets/flipper/logos/supreme-logo-blue.svg';
import BoxLogo from '../assets/flipper/logos/box-logo.svg';
import BoxLogoBlue from '../assets/flipper/logos/box-logo-blue.svg';
import NorthFaceLogo from '../assets/flipper/logos/north-face-logo.svg';
import NorthFaceLogoBlue from '../assets/flipper/logos/north-face-logo-blue.svg';
import AdidasLogo from '../assets/flipper/logos/adidas-logo.svg';
import AdidasLogoBlue from '../assets/flipper/logos/adidas-logo-blue.svg';
import StussyLogo from '../assets/flipper/logos/stussy-logo.svg';
import StussyLogoBlue from '../assets/flipper/logos/stussy-logo-blue.svg';
import BapeLogo from '../assets/flipper/logos/bape-logo.svg';
import BapeLogoBlue from '../assets/flipper/logos/bape-logo-blue.svg';
import PalaceLogo from '../assets/flipper/logos/palace-logo.svg';
import PalaceLogoBlue from '../assets/flipper/logos/palace-logo-blue.svg';
import KithLogo from '../assets/flipper/logos/kith-logo.svg';
import KithLogoBlue from '../assets/flipper/logos/kith-logo-blue.svg';
import ChinaTownLogo from '../assets/flipper/logos/chinatown-market-logo.svg';
import ChinaTownLogoBlue from '../assets/flipper/logos/chinatown-market-logo-blue.svg';
import OffWhiteLogo from '../assets/flipper/logos/offwhite-logo.svg';
import OffWhiteLogoBlue from '../assets/flipper/logos/offwhite-logo-blue.svg';

function ShirtFlipper() {
    const [count, setCount] = useState(9);

    function decementCounter() {
        if (count < 1) {
            setCount(9);    
        } else {
            setCount(count - 1);
        }
    }

    useEffect( () => {
        const interval = setTimeout(() => {
            decementCounter()
        }, 1500)

        return () => clearInterval(interval);
    }, [count])

    function getClassName(pos) {
        if (pos == 0) {
            return "LiftImage ShirtPosition"+pos
        }
        return "ShirtPosition"+pos
    }

    function renderShirts() {
        let pos1 = (count) % 10
        let pos2 = (count+1) % 10
        let pos3 = (count+2) % 10
        let pos4 = (count+3) % 10
        let pos5 = (count+4) % 10
        let pos6 = (count+5) % 10
        let pos7 = (count+6) % 10
        let pos8 = (count+7) % 10
        let pos9 = (count+8) % 10
        let pos10 = (count+9) % 10

        return <div className='ShirtContainer'>
            {
                pos1 === 0  || pos1 === 1
                ? <img className={getClassName(pos1)} src={Shirt1Blue} alt="shirt1"/>
                : <img className={getClassName(pos1)} src={Shirt1} alt="shirt1"/>
            }
            {
                pos2 === 0  || pos2 === 1
                ? <img className={getClassName(pos2)} src={Shirt2Blue} alt="shirt2"/>
                : <img className={getClassName(pos2)} src={Shirt2} alt="shirt2"/>
            }
            {
                pos3 === 0  || pos3 === 1
                ? <img className={getClassName(pos3)} src={Shirt3Blue} alt="shirt3"/>
                : <img className={getClassName(pos3)} src={Shirt3} alt="shirt3"/>
            }
            {
                pos4 === 0  || pos4 === 1
                ? <img className={getClassName(pos4)} src={Shirt4Blue} alt="shirt4"/>
                : <img className={getClassName(pos4)} src={Shirt4} alt="shirt4"/>
            }
            {
                pos5 === 0  || pos5 === 1
                ? <img className={getClassName(pos5)} src={Shirt5Blue} alt="shirt5"/>
                : <img className={getClassName(pos5)} src={Shirt5} alt="shirt5"/>
            }
            {
                pos6 === 0  || pos6 === 1
                ? <img className={getClassName(pos6)} src={Shirt6Blue} alt="shirt6"/>
                : <img className={getClassName(pos6)} src={Shirt6} alt="shirt6"/>
            }
            {
                pos7 === 0  || pos7 === 1
                ? <img className={getClassName(pos7)} src={Shirt7Blue} alt="shirt7"/>
                : <img className={getClassName(pos7)} src={Shirt7} alt="shirt7"/>
            }
            {
                pos8 === 0  || pos8 === 1
                ? <img className={getClassName(pos8)} src={Shirt8Blue} alt="shirt8"/>
                : <img className={getClassName(pos8)} src={Shirt8} alt="shirt8"/>
            }
            {
                pos9 === 0  || pos9 === 1
                ? <img className={getClassName(pos9)} src={Shirt9Blue} alt="shirt9"/>
                : <img className={getClassName(pos9)} src={Shirt9} alt="shirt9"/>
            }
            {
                pos10 === 0  || pos10 === 1
                ? <img className={getClassName(pos10)} src={Shirt10Blue} alt="shirt10"/>
                : <img className={getClassName(pos10)} src={Shirt10} alt="shirt10"/>
            }
        </div>
    }
    
    return <div className='ShirtFlip Bordered Shadowed'>
            <div onClick={() => decementCounter()} className='Row'>
                <div className='ShirtFlipLeft'>
                    {renderShirts()}
                    { 
                        count % 2 == 0 
                            ? <h2 className='ShirtFlipBlue'>CLICK CLICK CLICK</h2>
                            : <h2 className='ShirtFlipWhite'>CLICK CLICK CLICK</h2>
                    }
                </div>
                <div className='Column ShirtFlipRight'>
                    { 
                        count == 0
                            ? <img src={SupremeLogoBlue} alt="supreme-logo"/>
                            : <img src={SupremeLogo} alt="supreme-logo"/>
                    }
                    { 
                        count == 1
                            ? <img src={BoxLogoBlue} alt="box-logo"/>
                            : <img src={BoxLogo} alt="box-logo"/>
                    }
                    { 
                        count == 2
                            ? <img src={NorthFaceLogoBlue} alt="north-face-logo"/>
                            : <img src={NorthFaceLogo} alt="north-face-logo"/>
                    }
                    { 
                        count == 3
                            ? <img src={AdidasLogoBlue} alt="adidas-logo"/>
                            : <img src={AdidasLogo} alt="adidas-logo"/>
                    }
                    { 
                        count == 4
                            ? <img src={StussyLogoBlue} alt="stussy-logo"/>
                            : <img src={StussyLogo} alt="stussy-logo"/>
                    }
                    { 
                        count == 5
                            ? <img src={BapeLogoBlue} alt="bape-logo"/>
                            : <img src={BapeLogo} alt="bape-logo"/>
                    }
                    { 
                        count == 6
                            ? <img src={PalaceLogoBlue} alt="palace-logo"/>
                            : <img src={PalaceLogo} alt="palace-logo"/>
                    }
                    { 
                        count == 7
                            ? <img src={KithLogoBlue} alt="kith-logo"/>
                            : <img src={KithLogo} alt="kith-logo"/>
                    }
                    { 
                        count == 8
                            ? <img src={ChinaTownLogoBlue} alt="chinatown-market-logo"/>
                            : <img src={ChinaTownLogo} alt="chinatown-market-logo"/>
                    }
                    { 
                        count == 9
                            ? <img src={OffWhiteLogoBlue} alt="offwhite-logo"/>
                            : <img src={OffWhiteLogo} alt="offwhite-logo"/>
                    }
                </div>
            </div>
        </div>
}

export default ShirtFlipper;