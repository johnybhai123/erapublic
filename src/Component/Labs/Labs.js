import React from 'react'

import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687932/chemistry_lab_anlesb.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687962/IMG_0959_zxwzoo.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687965/IMG_0963_luhjkh.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
