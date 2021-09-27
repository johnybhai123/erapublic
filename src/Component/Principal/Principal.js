import React from 'react'
import strongfoundation from '../../images/Principal_DyutiSardesai.JPG'
import { Main } from './Principal.element'
function Principal() {
    return (
        <Main>
            <h1 style={{color:'green'}}>FROM PRINCIPAL DESK  </h1>
            {/* <h5 style={{color:'blue'}}>"Education is not preparation of life, education is life itself." </h5> */}
            <hr />
            <img src={strongfoundation} style={{height:'400px',width:'40vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>The aim of Education is overall development of a child. It is not mere acquiring knowledge but focus should be on developing their skills and creativity. Research done on school children also shows decline in creative skills. The concept of developing creative skills has changed with the years. As an educator we must develop their skills by merging creativity with more thinking, innovative ideas, and their practical applicability. This is what even CBSE is expanding its horizon by integrating Art, or say Health and Physical Education in their mainstream curriculum. Also giving more emphasize on Practical Learning, involving students in subject enrichment activities. Like art as an individual art form can be used alongside other discipline, eg illustration of theme of English Novel by art work or preparing collages of historical events or giving tunes to poems in their prescribed syllabus.</p>
        </Main>
    )
}

export default Principal
