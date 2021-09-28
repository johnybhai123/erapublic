import React from 'react'
import { Main } from '../AcademicCurriculum/AcademicCurriculum.element'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Sub } from './Mission.element'

function Mission() {
    return (
        <Main>
                   <Directorbackground>
                <Directortext>
                    <h1>Mision</h1>
                    <p>The New Era Public School| <span>Mision</span> </p>
                </Directortext>
      
            </Directorbackground> 

            <Sub>
                <p>
                To establish The New Era Public School as a front ranking high quality institution preparing educated, responsible and productive future citizens by providing multi-mode instructional facilities congruent with global trends based on excellence, innovation, research, new pedagogies and technologies through self-reliance, collaboration, diversification and service to the society.
                </p>
             


             
            </Sub>
        </Main>
    )
}

export default Mission
