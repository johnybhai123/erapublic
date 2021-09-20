import React from 'react'
import image from '../../images/national-festival-box-img.jpg'
import { Img, Subgrid } from './Gallery.element'

function Gallerimage() {
    return (
        <div style={{padding:'60px'}}>
            <Subgrid>
            
                <Img src={image}></Img>
                <Img src={image}></Img>
                <Img src={image}></Img>
                <Img src={image}></Img>
                <Img src={image}></Img>
                <Img src={image}></Img>
              
             
            </Subgrid>
        </div>
    )
}

export default Gallerimage
