import React from 'react'
import { Link } from 'react-router-dom';

import { Img, Subgrid } from "./Gallery.element";

function Gallerimage() {
  return (
    <div style={{ padding: "60px" }}>
      <Subgrid>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\DSC_2129 annual function.JPG'></Img></Link>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\DSC_2615kawali.JPG'></Img></Link>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\DSC_2695 AF.JPG'></Img></Link>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\DSC_2700 annual.JPG'></Img></Link>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\MAAA0030.JPG'></Img></Link>
        <Link to='/annual'><Img src='\website data for 2025-26\annual function\MAAA0489.JPG'></Img></Link>
        
      
      </Subgrid>
    </div>
  );
}

export default Gallerimage
