import React from 'react'

import { Main } from './Classrooms.element'
function Classrooms() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Classrooms</h1>
            <hr />
          <div style={{display:'flex',flexWrap:'wrap'}}>
          <img src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243018839_591715928849151_7645543950741479550_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=ilpalfZA7uQAX8RnTpB&_nc_ht=scontent.fbho4-2.fna&oh=3402ee0baaa6bdb65412f68e61e07246&oe=6178843E'style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/243033007_591715788849165_6424498731375916284_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=WKQ9hWs5_oQAX81kXy1&_nc_ht=scontent-bom1-1.xx&oh=a4e1b0e4a0eab6f79674b565fc6a7a39&oe=61777B22' style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          <img src='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243006855_591717222182355_8501833702953860932_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=jfjshvy6EyAAX8A7qNc&_nc_ht=scontent.fbho4-2.fna&oh=8a6be533e891ce79af7f1cf92eaa9a9e&oe=6178E207' style={{height:'400px',width:'320px',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
          </div>
            <p style={{padding:'40px 0 0 0'}}>Classroom teaching and learning is a complex, multilayered, and social experience. Many things happen at the same time, and the students and teacher must interpret and process these events with considerable rapidity. Teaching is not a one-way transmission of information, for students influence the process as much as the teacher. The teacher plays an extremely important role in establishing a meaningful classroom environment for students</p>
            <p> but in the final analysis, it is the social and psychological activities and responses of each student that determines what he or she learns.</p>
        </Main>
    )
}

export default Classrooms
