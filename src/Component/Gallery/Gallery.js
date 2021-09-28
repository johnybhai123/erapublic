import React, { useState } from 'react'
import { Galleryoptions, Galleryoptions1, Galleryoptions2, Galleryoptions3, Logo, Main, Sub } from './Gallery.element'
import { AiOutlineCamera } from "react-icons/ai";
import { FiVideo } from "react-icons/fi";
import Gallerimage from './Gallerimage';
import GalleryPress from './GalleryPress';
import Galleryvideo from './Galleryvideo';
import { IconContext } from "react-icons";

function Gallery({ChangeColor1,ChangeColor2,ChangeColor3}) {
    const [color1,setColor1]=useState(1)
    const [color2,setColor2]=useState()
    const [color3,setColor3]=useState()
    {color1?ChangeColor1=true:ChangeColor1=false}
    {color2?ChangeColor2=true:ChangeColor2=false}
    {color3?ChangeColor3=true:ChangeColor3=false}
    return (
        <Main>
                <h1>News & Events</h1>

            <IconContext.Provider value={{ color: "yellow", size:'30' }}>
            <Sub>
                <Galleryoptions>
                <Galleryoptions1 ChangeColor1={ChangeColor1} onClick={()=>{setColor1(true);setColor2(false);setColor3(false)}}>
                    <Logo>{<AiOutlineCamera/>}</Logo>
                    <h5>Photo gallery</h5>
                    </Galleryoptions1>
                    <Galleryoptions2 ChangeColor2={ChangeColor2} onClick={() =>{setColor1(false);setColor2(true);setColor3(false)}}>
                    <Logo>{<FiVideo/>}</Logo>
                    <h5>Video gallery</h5>
                </Galleryoptions2  >
                <Galleryoptions3 ChangeColor3={ChangeColor3} onClick={() =>{setColor1(false);setColor2(false);setColor3(true)}}>
                <Logo>{<AiOutlineCamera/>}</Logo>
                    <h5>Celebration</h5>
                </Galleryoptions3>
                </Galleryoptions>

                
            </Sub>

            {
                color1?<Gallerimage/>:color2?<Galleryvideo></Galleryvideo>:<GalleryPress/>
                
            }
            </IconContext.Provider>

        </Main>
    )
}

export default Gallery
