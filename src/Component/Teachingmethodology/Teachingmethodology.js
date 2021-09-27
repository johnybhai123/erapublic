import React from 'react'
import strongfoundation from '../../images/Teachingmethodlogy.jpg'
import { Main } from './Teachingmethodology.element'
function Teachingmethodlogy() {
    return (
        <Main>
            <h1 style={{color:'green'}}>Teaching Methodlogy</h1>
            <hr />
            <img src={strongfoundation} style={{height:'400px',width:'40vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>We strongly believe that for a child to achieve best in life there should be a complete coordination and cooperation of Teachers, Students and Parents of teachers, amongst each other. We impart education by integrating proven, world-class teaching methods with modern infrastructure and technology Our curriculum emphasizes on activity-based learning for which we create a suitable environment and focus on learning needs of each child rather than a predetermined set of pattern. We add further value by inculcating a strong sense of discipline and hard work in our kids; thus nurturing them to be future ready to face global challenges. The school lays strong emphasis on constructivist approach where the child is encouraged to be the architect of her/his own knowledge and Mentor act as guides rather than instructors.</p>
        </Main>
    )
}

export default Teachingmethodlogy
