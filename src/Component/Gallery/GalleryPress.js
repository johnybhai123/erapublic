import React from 'react'
import { Img, Subgrid } from './Gallery.element'



function GalleryPress() {
    return (
      <div style={{ padding: "20px" }}>
        <Subgrid>
          <Img src="http://erapublicschool.herokuapp.com/media/243004532_591716415515769_396986209732220744_n.jpg"></Img>
          <Img src="http://erapublicschool.herokuapp.com/media/242991306_591716612182416_1564658554998937423_n.jpg"></Img>
          <Img src="http://erapublicschool.herokuapp.com/media/243020708_591715632182514_5967477009715586084_n.jpg"></Img>
          <Img src="http://erapublicschool.herokuapp.com/media/243029211_591716085515802_1834474687651002025_n.jpg"></Img>
          <Img src="http://erapublicschool.herokuapp.com/media/243010157_591716928849051_2988911248392873351_n.jpg"></Img>
          <Img src="http://erapublicschool.herokuapp.com/media/243000279_591716482182429_2329624462283593392_n.jpg"></Img>
        </Subgrid>
      </div>
    );
}

export default GalleryPress
