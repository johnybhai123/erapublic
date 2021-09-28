import React from 'react'
import {
  Directorbackground,
  Sub,
  Main,
  Directortext,
} from "./AcademicCurriculum.element";

function AcademicCurriculum() {
    return (
        <Main>
                <Directorbackground>
                <Directortext>
                    <h1>Academic Curriculum</h1>
                    <p>The New Era Public School| <span>Academic Curriculum</span> </p>
                </Directortext>
            </Directorbackground>
            <Sub>
                <h1>Advance Curriculum</h1>
                <ul style={{textAlign:'left',padding:'10px'}}>
                    <li>The School has always stood for and promoted the principle of high levels of academic excellence.</li>
                    <li>High academic standards maintained right from lower classes until the students leave the school, have enabled them to face the challenges of the outside world confidently. We keep pace with the fast changing developments in the field of science and technology, mathematics, mathematics to help our students stay on top.</li>
                </ul>
            </Sub>
        </Main>
    )
}

export default AcademicCurriculum
