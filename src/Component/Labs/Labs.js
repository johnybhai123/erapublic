import React from 'react'

import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src='http://erapublicschool.herokuapp.com/media/243238205_591715468849197_1484819458339817203_n.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src='http://erapublicschool.herokuapp.com/media/243034078_591714778849266_2892230181793293302_n.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src='http://erapublicschool.herokuapp.com/media/243027734_591715838849160_7911354219088593251_n.jpg' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
