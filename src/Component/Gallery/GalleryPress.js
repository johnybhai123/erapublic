import React from 'react'
import { Img, Subgrid } from './Gallery.element'



function GalleryPress() {
    return (
      <div style={{ padding: "20px" }}>
        <Subgrid>
          <Img src="https://drive.google.com/uc?id=1c6wxG5syE8Eu1CztpJgyFtRMBaY6HntK"></Img>
          <Img src="https://drive.google.com/uc?id=15Sofr3q008hmktc4aCKmJQgYrS5ii2-x"></Img>
          <Img src="https://drive.google.com/uc?id=1p3IZAS0uwP_kQOjtKVvmQ3hQLGNGA-jD"></Img>
          <Img src="https://drive.google.com/uc?id=1tPQG9-dyWya_OU9TjxpuTjFlFXMHA4VU"></Img>
          <Img src="https://drive.google.com/uc?id=1gXolK_72HofUqgK3K381OxeOpLYh9MmP"></Img>
          <Img src="https://drive.google.com/uc?id=1fRbe70H6soSgEN2sHTnJw56kxL8ARzpv"></Img>
        </Subgrid>
      </div>
    );
}

export default GalleryPress


