import React, { useState, useEffect } from 'react';
import '../styles/App.css';

import Shirt1 from '../assets/shirts/1.jpg'
import Shirt2 from '../assets/shirts/2.jpg'
import Shirt3 from '../assets/shirts/3.jpg'
import Shirt4 from '../assets/shirts/4.jpg'
import Shirt5 from '../assets/shirts/5.jpg'
import Shirt6 from '../assets/shirts/6.jpg'
import Shirt7 from '../assets/shirts/7.jpg'
import Shirt8 from '../assets/shirts/8.jpg'
import Shirt9 from '../assets/shirts/9.jpg'
import Shirt10 from '../assets/shirts/10.jpg'
import Shirt11 from '../assets/shirts/11.jpg'
import Shirt12 from '../assets/shirts/12.jpg'
import Shirt13 from '../assets/shirts/13.jpg'
import Shirt14 from '../assets/shirts/14.jpg'
import Shirt15 from '../assets/shirts/15.jpg'
import Shirt16 from '../assets/shirts/16.jpg'
import Shirt17 from '../assets/shirts/17.jpg'
import Shirt18 from '../assets/shirts/18.jpg'
import Shirt19 from '../assets/shirts/19.jpg'
import Shirt20 from '../assets/shirts/20.jpg'
import Shirt21 from '../assets/shirts/21.jpg'
import Shirt22 from '../assets/shirts/22.jpg'
import Shirt23 from '../assets/shirts/23.jpg'
import Shirt24 from '../assets/shirts/24.jpg'
import Shirt25 from '../assets/shirts/25.jpg'
import Shirt26 from '../assets/shirts/26.jpg'
import Shirt27 from '../assets/shirts/27.jpg'
import Shirt28 from '../assets/shirts/28.jpg'
import Shirt29 from '../assets/shirts/29.jpg'
import Shirt30 from '../assets/shirts/30.jpg'
import Shirt31 from '../assets/shirts/31.jpg'
import Shirt32 from '../assets/shirts/32.jpg'
import Shirt33 from '../assets/shirts/33.jpg'
import Shirt34 from '../assets/shirts/34.jpg'
import Shirt35 from '../assets/shirts/35.jpg'
import Shirt36 from '../assets/shirts/36.jpg'
import Shirt37 from '../assets/shirts/37.jpg'
import Shirt38 from '../assets/shirts/38.jpg'
import Shirt39 from '../assets/shirts/39.jpg'
import Shirt40 from '../assets/shirts/40.jpg'
import Shirt41 from '../assets/shirts/41.jpg'
import Shirt42 from '../assets/shirts/42.jpg'
import Shirt43 from '../assets/shirts/43.jpg'
import Shirt44 from '../assets/shirts/44.jpg'
import Shirt45 from '../assets/shirts/45.jpg'
import Shirt46 from '../assets/shirts/46.jpg'
import Shirt47 from '../assets/shirts/47.jpg'
import Shirt48 from '../assets/shirts/48.jpg'
import Shirt49 from '../assets/shirts/49.jpg'
import Shirt50 from '../assets/shirts/50.jpg'
import Shirt51 from '../assets/shirts/51.jpg'
import Shirt52 from '../assets/shirts/52.jpg'
import Shirt53 from '../assets/shirts/53.jpg'
import Shirt54 from '../assets/shirts/54.jpg'
import Shirt55 from '../assets/shirts/55.jpg'
import Shirt56 from '../assets/shirts/56.jpg'
import Shirt57 from '../assets/shirts/57.jpg'
import Shirt58 from '../assets/shirts/58.jpg'
import Shirt59 from '../assets/shirts/59.jpg'
import Shirt60 from '../assets/shirts/60.jpg'

import Overlay from '../components/Overlay';

const shirtMap = {
    Shirt1,
    Shirt2,
    Shirt3,
    Shirt4,
    Shirt5,
    Shirt6,
    Shirt7,
    Shirt8,
    Shirt9,
    Shirt10,
    Shirt11,
    Shirt12,
    Shirt13,
    Shirt14,
    Shirt15,
    Shirt16,
    Shirt17,
    Shirt18,
    Shirt19,
    Shirt20,
    Shirt21,
    Shirt22,
    Shirt23,
    Shirt24,
    Shirt25,
    Shirt26,
    Shirt27,
    Shirt28,
    Shirt29,
    Shirt30,
    Shirt31,
    Shirt32,
    Shirt33,
    Shirt34,
    Shirt35,
    Shirt36,
    Shirt37,
    Shirt38,
    Shirt39,
    Shirt40,
    Shirt41,
    Shirt42,
    Shirt43,
    Shirt44,
    Shirt45,
    Shirt46,
    Shirt47,
    Shirt48,
    Shirt49,
    Shirt50,
    Shirt51,
    Shirt52,
    Shirt53,
    Shirt54,
    Shirt55,
    Shirt56,
    Shirt57,
    Shirt58,
    Shirt59,
    Shirt60,
}

// This can be pulled into a constants file in the future
const API_URL = 'https://sy7mh3qqd4.execute-api.us-east-1.amazonaws.com/dev/products'

function RenderImages() {
    let res = []
    for (let i = 1; i < 60; i+=3) {
        var first = shirtMap["Shirt"+i.toString()]
        var second = shirtMap["Shirt"+(i+1).toString()]
        var third = shirtMap["Shirt"+(i+2).toString()]
        res.push(
            <div className='Column' key={first+"parent"}>
                <img className='LookImage Bordered Shadowed' key={first} src={first} alt={first} />
                <img className='LookImage Bordered Shadowed' key={second} src={second} alt={second} />
                <img className='LookImage Bordered Shadowed' key ={third} src={third} alt={third} />
            </div>
        )
    }
    return res;
}
 
function Look() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log("Successful response from API: ", data);
            setProducts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Connecting to backend part of the takehome, for fun :)
    function renderAPIResults() {
        return <div className='Column' key={"parent"}>
            {
                products.map((product, i) => {
                    var first = shirtMap["Shirt"+(product.number).toString()]
                    return <img className='LookImage Bordered Shadowed' key ={first} src={first} alt={first} />
                })
            }
        </div>
    }

    return <div className='Main'>
        <Overlay />
        <div style={{ paddingTop: '8%'}}>
            <div className='Content' style={{ zIndex: '100'}}>
                <div style={{minWidth: '10%'}} />
                {RenderImages()}
                {products.length > 0 && renderAPIResults()}
            </div>
        </div>
    </div>
}

export default Look;