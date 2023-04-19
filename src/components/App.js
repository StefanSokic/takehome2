import React from 'react';

import '../styles/App.css';

import Overlay from '../components/Overlay';
import Order from '../components/Order';
import ShirtFlipper from '../components/ShirtFlipper';

import Video from '../assets/3D-shirt-video.mp4';
import VideoLogos from '../assets/logos/brand-logos.svg';
import Image1 from '../assets/images/HMU_8679-Edit.jpg'
import Image2 from '../assets/images/m1.jpg'
import Image3 from '../assets/images/e-cs.jpg'
import Image4 from '../assets/images/HMU_8117.jpg'
import Image5 from '../assets/images/HMU_8300.jpg'
import Image6 from '../assets/images/HMU_8711.jpg'
import Image7 from '../assets/images/HMU_8615.jpg'
import Image8 from '../assets/images/HMU_7516-Edit.jpg'
import Image9 from '../assets/images/HMU_7637.jpg'
import Image10 from '../assets/images/ContactSheet.jpg'
import Image11 from '../assets/images/render2.png'
import Image12 from '../assets/images/m2.jpg'
import Image13 from '../assets/images/v-cs.png'
import Image14 from '../assets/images/render1.png'
import Image15 from '../assets/images/phone.png'

function App() {
  return (
    <div className='Main'>
      <div className='Content'>
        <Overlay />

        <div className='VideoContainer Bordered Shadowed'>
          <video className='Video' autoStart autoPlay muted loop src={Video} type="video/mp4" alt="shirt-spin" />
          <img className="VideoLogos" src={VideoLogos} alt="video-logos" />
        </div>

        <ShirtFlipper />

        <img className="Image1 Bordered Shadowed" src={Image1} alt="shirt-1" />
        <img className="Image2 Bordered Shadowed" src={Image2} alt="lookbook-1" />
        <img className="Image3 Bordered Shadowed" src={Image3} alt="selfie-1" />

        <Order />

        <img className="Image4 Bordered Shadowed" src={Image4} alt="shirt-2" />
        <img className="Image5 Bordered Shadowed" src={Image5} alt="shirt-3" />
        <img className="Image6 Bordered Shadowed" src={Image6} alt="shirt-4" />
        <img className="Image7 Bordered Shadowed" src={Image7} alt="shirt-5" />
        <img className="Image8 Bordered Shadowed" src={Image8} alt="shirt-6" />
        <img className="Image9 Bordered Shadowed" src={Image9} alt="shirt-7" />
        <img className="Image10 Bordered Shadowed" src={Image10} alt="lookbook-2" />
        <img className="Image11 Bordered Shadowed" src={Image11} alt="shirt-8" />
        <img className="Image12 Bordered Shadowed" src={Image12} alt="lookbook-3" />
        <img className="Image13 Bordered Shadowed" src={Image13} alt="lookbook-4" />
        <img className="Image14 Bordered Shadowed" src={Image14} alt="shirt-9" />
        <img className="Image15 Bordered Shadowed" src={Image15} alt="phone-1" />

        <div className='About Bordered Shadowed'>
          <h3>And lo, there was a commotion among the people, for a strange thing had come to pass. For MSCHF X had brought forth a most peculiar creation, fashioned from the scraps of ten familiar brands of streetwear.</h3>
          <p>Yea, verily, this was the twenty-fifth offering of MSCHF, and it was a thing of wonder. For though the pieces were sundered, they had been re-assembled into shirts of great variety and randomness. Each shirt was unique, and yet each contained at least one fragment from every brand.</p>
          <p>And the pieces that were cut were of many kinds, from the common and well-known (Supreme box logo tees, valued at $40-60 in the marketplaces) to the rare and revered (such as the Supreme x Louis Vuitton hoodie, worth $8-10k to those who would possess it).</p>
          <p>This work was wrought in the USA, and it was limited in number to one thousand. Verily, it was a thing of rarity, and a source of great excitement among the people.</p>
          <p>source: ChatGPT</p>
        </div>
      </div>
    </div>
  );
}

export default App;
