import React from 'react'
import { Img, Subgrid } from './Gallery.element'


function GalleryPress() {
    return (
      <div style={{ padding: "20px" }}>
        <Subgrid>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687950/DSC_7869_iveovl.jpg"></Img>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687948/DSC_8006_sto6cu.jpg"></Img>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687959/DSC_8233_uqclx1.jpg"></Img>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/5_mc6l0l.jpg"></Img>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687967/DSC_8275_rkjekp.jpg"></Img>
          <Img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687949/DSC_7914_e8kr5f.jpg"></Img>
                  </Subgrid>
      </div>
    );
}

export default GalleryPress


