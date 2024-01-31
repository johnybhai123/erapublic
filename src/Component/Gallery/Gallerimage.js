import React from 'react'
import { Link } from 'react-router-dom';

import { Img, Subgrid } from "./Gallery.element";

function Gallerimage() {
  return (
    <div style={{ padding: "60px" }}>
      <Subgrid>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687977/IMG_1491_j5subk.jpg'></Img></Link>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687991/IMG_1494_rrb3gw.jpg'></Img></Link>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687974/IMG_1461_olfjd6.jpg'></Img></Link>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687984/IMG_1452_dre5ua.jpg'></Img></Link>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687984/IMG_1452_dre5ua.jpg'></Img></Link>
        <Link to='/annual'><Img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687962/IMG_0959_zxwzoo.jpg'></Img></Link>
      
      </Subgrid>
    </div>
  );
}

export default Gallerimage
