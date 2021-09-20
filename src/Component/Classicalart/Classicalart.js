import React from 'react'
import dance from '../../images/dance.jpg'
import { Main } from './Classicalart.element'
function Classrooms() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Modern &Classical Art</h1>
            <hr />
            <img src={dance} style={{height:'400px',width:'67vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatem saepe mollitia molestias, animi quos impedit. Quos quo rem officia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, in!</p>
        </Main>
    )
}

export default Classrooms
