import React from 'react'
import strongfoundation from '../../images/Strongfoundation.jpg'
import { Main } from './Strongfoundation.element'
function Strongfoundation() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Strong Foundation</h1>
            <hr />
            <img src={strongfoundation} style={{height:'400px',width:'40vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>Grounded on Global Best Practices and our principles of "Individual Focus" and "Compete with Self", we strive to develop child's individual talent, creativity and communication skills which are essential for his success in future world, beyond 2025. Instilling ancient Values, teaching essential Life Skills and developing right habits enables child to adopt a lifestyle that creates a balance among all dimensions of life and attain complete wellness (body, mind and soul). All together they act as the greatest unifying forces in life and pillars of a strong foundation for responsible GLOBAL CITIZENS of tomorrow!</p>
        </Main>
    )
}

export default Strongfoundation
