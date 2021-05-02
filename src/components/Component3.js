import React from 'react'
import {Image} from 'react-bootstrap'
import image1 from './images/image1.png'
import FadeIn from 'react-fade-in'
import '../App.js'
const Component3 = () => {
    return (
        <div>
             <FadeIn>
            <Image id='img1' src={image1} alt='pic' fluid width={950}/>
            </FadeIn>
        </div>
    )
}

export default Component3
