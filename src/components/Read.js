import React from 'react';

import Overlay from '../components/Overlay';
import CollabMatrix from '../assets/read-page/collab-matrix.png'
import CollabCont from '../assets/read-page/collab-continuum.png'

function Read() {
    return <div className='Main'>
        <Overlay />
        <div className='Content ReadContainer'>
            <div style={{minWidth: '15%'}} />
            <div className='ReadSection Column'>
                <h3>MANIFESTO</h3>
                <h3>1: COLLAB MOTIVATION MATRIX</h3>
                <p>The goal of collaboration is to create a sum greater than the whole of its parts: brands collaborate out of a utilitarian urge to pool their collective audience reach. Luxury brands want to downmarket their brand (without diluting it) and so collaborate with sportswear companies; streetwear brands want the approval of fashion even as they position themselves outside its norms and so they collaborate with high end designers. This is extremely effective.</p>
                <img className="ManifestoImage" src={CollabMatrix} alt="collab-matrix" />
            </div>
            <div className='ReadSection Column'>
                <p>For the purposes of this discussion we will define “collaboration” broadly, and include all production relationships in which two (or more) brands are recognizable by a consumer at the point of retail. The utility of a given collaboration is determined by the relative cultural status of the participants, and whether the collaboration is consensual.</p>
                <h3>THE WILLING REGION</h3>
                <h3>New X New: Friends</h3>
                <p>“Lets both work together because we like and/or respect each others work and are both on the up and up.” We submit that this relationship is essentially never present in a consumer product.</p>
                <h3>New X Old: Clout Chasing</h3>
                <p>New seeks to cosign with Old to acquire the credibility of establishment in a space, or institutional approval</p>
                <h3>Old X New: Relevance Chasing</h3>
                <p>Old seeks to associate with New to demonstrate that there is still breath in the old dead body</p>
                <h3>Old X Old: Lets Get This Bread</h3>
                <p>The relationship between these two may make no semantic sense, but both are so established it doesnt matter. True profit-seeking symbiosis.</p>
            </div>
            <div className='ReadSection Column'>
                <h3>THE UNWILLING REGION</h3>
                <h3>New X New, Unwilling: Knockoff</h3>
                <p>A new or little-known brand copies from another new or little-known brand</p>
                <h3>New X Old, Unwilling: Heist</h3>
                <p>New steals from Old, gaining clout without acceding to any demands in return. Fight The Man.</p>
                <h3>Old X New, Unwilling: IP Theft</h3>
                <p>Old copies News designs and reproduces them for a mass audience New cannot reach.</p>
                <h3>Old X Old, Unwilling: Purchase</h3>
                <p>Old buys the rights to another Olds product, or buys the company outright, taking over their brand and using it for their own gain without regard to its longevity.</p>
            </div>
            <div className='ReadSection Column'>
                <h3>2. COLLAB CONTINUUM</h3>
                <p>Supreme X Louis Vuitton<br></br>
                Versace X H&M<br></br>
                Vetements X DHL<br></br>
                ...Le Creuset X Star Wars???</p>
                <p>The ubiquity of collaborative paradigms gradually moves us away from a world in which they matter. Meaningful brand collaborations rely on each component part being distinct, and the combinative result therefore a surprise, a study in contrasts, or pairing of complementary flavors. When collaboration becomes the rule of an industry, rather than the exception - when brands cross over like the fumbling, arbitrary results of sex dice - they serve to smooth the entire retail landscape into an even gradient.</p>
                <p>Nowhere is this more evident than in streetwear, the underground, outcast, rebellious power users of print on demand t-shirt services, each desperate to differentiate even as they are beholden to lowest-common-denominator production practices.</p>
                <p>Brands bandy about their logos like trading cards and after a certain point they’re all simultaneously licensing to each other such that the</p>
            </div>
            <div className='ReadSection Column'>
                <img className="CollabContinuumImage" src={CollabCont} alt="collab-continuum" />
            </div>
            <div className='ReadSection Column'>
                <p>chain of agreements goes circular. This ouroboros of usage rights ultimately boils down to one de facto conclusion: streetwear is, rather than a genre, a single uber-brand of functionally interchangeable parts.</p>
                <p>We term this the Collaborative Continuum: a distribution of brands and audiences no longer discrete but continually linked through a mesh of crossovers, blending seamlessly into one another through their history of retail association. When you buy one, odds are good you’re getting another on the side; not two brands, but one selected manifestation of a single entity.</p>
                <p>MSCHF X flattens the curation and purchase of two hands worth of individual brands into a single shirt. Simultaneously, through some applied hacksmanship, we remove these pieces from their pedestals - none have unique worth beyond the simple associative value of their logos.</p>
                <p>What remains, when these decontextualized signifiers are stitched back into a pastiche canvas, is the platonic ideal of 2020 streetwear in its entirety. This is the last shirt you’ll ever need, and a snapshot of a scene in time.</p>
            </div>
        </div>
    </div>
}

export default Read;