import React from 'react'
import { Img, Subgrid } from './Gallery.element'
import image1 from "../../images/Annualfunction/DSC_8345.JPG";
import image2 from "../../images/Annualfunction/DSC_8207.JPG";
import image3 from "../../images/Annualfunction/DSC_8149.JPG";
import image4 from "../../images/Annualfunction/DSC_7948.JPG";
import image5 from "../../images/Annualfunction/DSC_8139.JPG";
import image6 from "../../images/Annualfunction/DSC_7827.JPG";


function GalleryPress() {
    return (
        <div style={{padding:'20px'}}>
        <Subgrid>
            <Img src={image1}></Img>
            <Img src={image2}></Img>
            <Img src={image3}></Img>
            <Img src={image4}></Img>
            <Img src={image5}></Img>
            <Img src={image6}></Img>
          
          
        </Subgrid>
    </div>
    )
}

export default GalleryPress
