import React from 'react'
import { Directortext } from '../Directorpen/Director.element'
import { Directorbackground } from './Labs.element'

import { Main } from '../Classrooms/Classrooms.element'
function Labs() {
    return (
        <Main>
             

            <h1 style={{color:'green'}}>Science labs</h1>
            <hr />
           <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
           <img src='https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243034078_591714778849266_2892230181793293302_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=smk8bHiQUe0AX9cyaUO&_nc_ht=scontent-bom1-1.xx&oh=c6008b916d3e0af3273bec8b5c6189c0&oe=61762C5C' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           
            <img src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243238205_591715468849197_1484819458339817203_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=u-TKP5ETmNsAX9T6DKY&tn=M4Zyun6SeeqEsVTT&_nc_ht=scontent.fbho4-2.fna&oh=a016299045032dc7eba07d0506b05be3&oe=61779203' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
            <img src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243054964_591716202182457_6860487110440298584_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=Hc8o_bcug80AX-JL8Yu&_nc_ht=scontent.fbho4-2.fna&oh=16459cf907e99f3cfa6c84368cf897e2&oe=617968C8' style={{height:'300px',width:'300px', border:'1px solid black', padding:'10px'}} alt="" />
           </div>
            <p style={{padding:'40px 0 0 0'}}>The science labs in the school are well equipped with apparatus and chemicals and provide first –hand experience of all practical activities to each student. These labs have a unique collection of charts, models, slides and specimens as per the syllabus of each class. </p>

        </Main>
    )
}

export default Labs
