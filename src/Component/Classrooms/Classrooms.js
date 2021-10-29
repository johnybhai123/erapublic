import React from 'react'

import { Main } from './Classrooms.element'
function Classrooms() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Classrooms</h1>
            <hr />
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <img src='http://erapublicschool.herokuapp.com/media/243006212_591716055515805_374113974095213513_n.jpg'style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='http://erapublicschool.herokuapp.com/media/243006311_591717178849026_3428251982410616834_n.jpg' style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='http://erapublicschool.herokuapp.com/media/243006855_591717222182355_8501833702953860932_n.jpg' style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          </div>
            <p style={{padding:'40px 0 0 0'}}>Classroom teaching and learning is a complex, multilayered, and social experience. Many things happen at the same time, and the students and teacher must interpret and process these events with considerable rapidity. Teaching is not a one-way transmission of information, for students influence the process as much as the teacher. The teacher plays an extremely important role in establishing a meaningful classroom environment for students</p>
            <p> but in the final analysis, it is the social and psychological activities and responses of each student that determines what he or she learns.</p>
        </Main>
    )
}

export default Classrooms
