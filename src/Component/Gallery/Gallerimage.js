import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../../images/gallery/IMG_1452.JPG";
import image2 from "../../images/gallery/IMG_1461.JPG";
import image3 from "../../images/gallery/IMG_1486.JPG";
import image4 from "../../images/gallery/IMG_1489.JPG";
import image5 from "../../images/gallery/IMG_1491.JPG";
import image6 from "../../images/gallery/IMG_1494.JPG";
import { Img, Subgrid } from "./Gallery.element";

function Gallerimage() {
  return (
    <div style={{ padding: "60px" }}>
      <Subgrid>
        <Link to='/annual'><Img src={image1}></Img></Link>
        <Link to='/annual'><Img src={image2}></Img></Link>
        <Link to='/annual'><Img src={image3}></Img></Link>
        <Link to='/annual'><Img src={image4}></Img></Link>
        <Link to='/annual'><Img src={image5}></Img></Link>
        <Link to='/annual'><Img src={image6}></Img></Link>
      
      </Subgrid>
    </div>
  );
}

export default Gallerimage
