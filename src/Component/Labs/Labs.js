import React from 'react'

import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src='\website data for 2025-26\4_Laboratary\Laboratory.JPG' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src='\website data for 2025-26\4_Laboratary\WhatsApp Image 2024-12-19 at 2.24.15 PM.jpeg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src='\website data for 2025-26\4_Laboratary\WhatsApp Image 2024-12-19 at 2.25.01 PM.jpeg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
