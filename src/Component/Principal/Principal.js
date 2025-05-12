import React from 'react'
import { Img } from '../Strongfoundation/Strongfoundation.element'
import { Main } from './Principal.element'
function Principal() {
    return (
        <Main>
            <h1 style={{color:'green'}}>FROM PRINCIPAL DESK  </h1>
            {/* <h5 style={{color:'blue'}}>"Education is not preparation of life, education is life itself." </h5> */}
            <hr />
            <Img src='\website data for 2025-26\TABS\ABOUT US\our team\Archana Tiwari.JPG'  alt="" />
            <p style={{padding:'40px 0 0 0'}}>The aim of Education is overall development of a child. It is not mere acquiring knowledge but focus should be on developing their skills and creativity. Research done on school children also shows decline in creative skills. The concept of developing creative skills has changed with the years. As an educator we must develop their skills by merging creativity with more thinking, innovative ideas, and their practical applicability. This is what even CBSE is expanding its horizon by integrating Art, or say Health and Physical Education in their mainstream curriculum. Also giving more emphasize on Practical Learning, involving students in subject enrichment activities. Like art as an individual art form can be used alongside other discipline, eg illustration of theme of English Novel by art work or preparing collages of historical events or giving tunes to poems in their prescribed syllabus.</p>
        </Main>
    )
}

export default Principal
