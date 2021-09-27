import React from 'react'
import strongfoundation from '../../images/President_DeepakKusumakar.JPG'
import { Main } from './President.element'
function President() {
    return (
        <Main>
            <h1 style={{color:'green'}}>PRESIDENT MESSAGE  </h1>
            <h5 style={{color:'blue'}}>"Education is not preparation of life, education is life itself." </h5>
            <hr />
            <img src={strongfoundation} style={{height:'400px',width:'40vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>Our school is constantly scaling new heights with excellent professionals training our children in a range of co-curricular activities so that they evolve as excellent individuals who have honed their skills in the microcosm of the school and are equipped to lead and inspire in the microcosm of the world. We are very glad to say that our school is being upgraded till Class XII. The school always tries its best to maintain the highest quality academic standard and provide the wonderful environment for studies.. "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we mightyet discover and create."</p>
        </Main>
    )
}

export default President
