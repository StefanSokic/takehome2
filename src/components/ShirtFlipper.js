import React, { useState, useEffect } from 'react';

import '../styles/App.css';

import Shirt1 from '../assets/flipper/shirts/shirts.png';

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
    const [count, setCount] = useState(0);

    useEffect( () => {
        const interval = setTimeout(() => {
            if (count > 8) {
                setCount(0);    
            } else {
                setCount(count + 1);
            }
        }, 1000)

        return () => clearInterval(interval);
    }, [count])
    
    return <div className='ShirtFlip Bordered Shadowed'>
            <div className='Row'>
                <div className='ShirtFlipLeft'>
                    <img src={Shirt1} alt="shirt"/>
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