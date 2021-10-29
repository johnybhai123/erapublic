import React from 'react'
import { Main } from './Activityroom.element'
function Kindergarten() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Activity & Music Room</h1>
            <hr />
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <img src='http://erapublicschool.herokuapp.com/media/243009588_591716282182449_8379969160563946591_n.jpg' style={{height:'400px',width:'350px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='http://erapublicschool.herokuapp.com/media/243013945_591715555515855_2385183112276871353_n.jpg' style={{height:'400px',width:'350px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          
          </div>
            <p style={{padding:'40px 0 0 0'}}>The School is equipped with an Art Room where the creative surge of the student finds expression in varying forms. It provides a whetstone then their budding talents. The students are geared to excel in their artistic caliber by a team of experts. The Art room boasts of a proud collection of artwork from KGI to Grade XII.
</p>
            <p style={{padding:'40px 0 0 0'}}>Learning music early in life can make a marked differenceto the development of a child's social, cognitive and communication skills. Exposing children to music lessons early helps discover their innate talent to become better singers in the future. The Grow with Music program
</p>
            
        </Main>
    )
}

export default Kindergarten
