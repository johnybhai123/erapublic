import React from 'react'
import { Img, Subgrid } from './Gallery.element'
import image from '../../images/national-festival-box-img.jpg'

function GalleryPress() {
    return (
        <div style={{padding:'20px'}}>
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

export default GalleryPress
