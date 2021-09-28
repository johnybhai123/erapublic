import React from 'react'
import { Main } from '../AcademicCurriculum/AcademicCurriculum.element'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Sub } from './Elementaryschool.element'

function Elementaryschool() {
    return (
        <Main>
            <Directorbackground>
                <Directortext>
                    <h1>Early Childhood Education</h1>
                    <p>The New Era Public School| <span>Early Childhood Education</span> </p>
                </Directortext>
      
            </Directorbackground> 
            <Sub>
                    <p style={{width:'80%'}}>“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.” Following this belief, we realize that the first few years are very crucial in a child’s life. These years set the tone for the entire academic life of the child. Bearing this in mind, the early childhood education is given utmost importance right from the stages of planning to implementation.
The early childhood years focuses on learning through experience, interaction and inquiry. Classrooms are vibrant and colourful centres of happy activity pads. Our little ones are proud of their environment and are always eager to express their joy in learning.
The parents here get to watch their child constantly improve in their social, inter-personal, academic and vocabulary skills.
The children also enjoy their theme-related trips and fun outings, the memories of which they carry with them, even as time passes by.
The Kindergarten curriculum based on research has been exclusively.</p>
<ul style={{textAlign:'left'}}>
    <li>Stage presentations and displays</li>
    <li>Group talks</li>
    <li>Word games and language quiz</li>
    <li>Site visits</li>
    <li>Learning through art and craft</li>
    <li>Social etiquette</li>
    <li>E-Learning</li>
    <li>Smart Board Facility</li>
    <li>Basic News Paper Reading</li>
</ul>
                </Sub>
        </Main>
    )
}

export default Elementaryschool
