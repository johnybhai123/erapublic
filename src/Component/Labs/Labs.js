import React from 'react'
import { Directortext } from '../Directorpen/Director.element'
import { Directorbackground } from './Labs.element'
import physicslab from '../../images/physicslab.jpg'
import chemistrylab from '../../images/chemistrylab.jpg'
import biologylab from '../../images/biologylab.jpg'
import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
                  <Directorbackground>
                <Directortext>
                    <h1>Science Labs</h1>
                    <p>The New Era Public School| <span>Science Labs</span> </p>
                </Directortext>
            </Directorbackground>

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src={physicslab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src={chemistrylab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src={biologylab} style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatem saepe mollitia molestias, animi quos impedit. Quos quo rem officia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in!</p>

        </Main>
    )
}

export default Labs
