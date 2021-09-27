import React from 'react'
import { Directortext } from '../Directorpen/Director.element'
import { Directorbackground } from './Labs.element'
import physicslab from '../../images/physics.jpg'
import chemistrylab from '../../images/chemistry.JPG'
import biologylab from '../../images/biologylab.jpg'
import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src={physicslab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src={chemistrylab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src={biologylab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
