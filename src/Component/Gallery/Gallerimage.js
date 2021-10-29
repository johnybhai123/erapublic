import React from 'react'
import { Link } from 'react-router-dom';

import { Img, Subgrid } from "./Gallery.element";

function Gallerimage() {
  return (
    <div style={{ padding: "60px" }}>
      <Subgrid>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=1bMaVWk4cSUYfQ-aIF9N_plZs6bo0Szh1'></Img></Link>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=1g3H-08V5Y-AbvCj9hrIoYR_t_2jo4waz'></Img></Link>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=11obVyNMqMisvCWET5ill3mD5AtqHGKpX'></Img></Link>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=1CErwxCkY60yfeE5UQLJ7w6SBKnwNiBCA'></Img></Link>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=1-qFbwx0rcryi0vINmWNt3JexOAtgAljO'></Img></Link>
        <Link to='/annual'><Img src='https://drive.google.com/uc?id=1R-QvTCpKog7ymh98Hkaz4EupwYpyQAne'></Img></Link>
      
      </Subgrid>
    </div>
  );
}

export default Gallerimage
