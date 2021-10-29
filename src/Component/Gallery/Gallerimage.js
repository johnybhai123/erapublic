import React from 'react'
import { Link } from 'react-router-dom';

import { Img, Subgrid } from "./Gallery.element";

function Gallerimage() {
  return (
    <div style={{ padding: "60px" }}>
      <Subgrid>
        <Link to='/annual'><Img src='https://icecube-eu-403.icedrive.io/download?p=03MgP6WfyoV7ravJLXXPQpJPxfxWaLNK.om0e1LyOb7cUlwe9jmY3o3xBLqqptiHS1KUcsCHoCyytXLQKpnxn87bX0JZ3ScffVFeredcu9iGFKT5.NBb02Cn9c.Pqe1duMS5lICvUmGjLNGj5esH0sXFaTyBQ_.dYDWrLXrHPrPtIE2WNMj_V.baHStqpywz9DzB8SiaPisUHUxGZhJbWIKxesSInL4G5rqLec0jPKI5Pj0jXnuZ3Svt5zfpEcbd'></Img></Link>
        <Link to='/annual'><Img src='http://erapublicschool.herokuapp.com/media/243029214_591717272182350_136896996256780002_n.jpg'></Img></Link>
        <Link to='/annual'><Img src='http://erapublicschool.herokuapp.com/media/243047458_591715168849227_5570078910238863828_n.jpg'></Img></Link>
        <Link to='/annual'><Img src='http://erapublicschool.herokuapp.com/media/243052124_591717072182370_1730723465015863467_n.jpg'></Img></Link>
        <Link to='/annual'><Img src='http://erapublicschool.herokuapp.com/media/243318783_591715592182518_7551047071128773815_n.jpg'></Img></Link>
        <Link to='/annual'><Img src='http://erapublicschool.herokuapp.com/media/243034078_591714778849266_2892230181793293302_n.jpg'></Img></Link>
      
      </Subgrid>
    </div>
  );
}

export default Gallerimage
