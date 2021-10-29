import React from 'react'

import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src='https://drive.google.com/uc?id=1FO45KKK9vBk5QekNDgm9AKx2TN-25Abc' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src='https://drive.google.com/uc?id=1R-QvTCpKog7ymh98Hkaz4EupwYpyQAne' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src='https://drive.google.com/uc?id=15NByCygIGjQbNoaZjdjHhCd6VzpamhCP' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
