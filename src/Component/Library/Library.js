import React from 'react'
import { Main } from '../AcademicCurriculum/AcademicCurriculum.element'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Sub } from './Library.element'

function Library() {
    return (
        <Main>
                <Directorbackground>
                <Directortext>
                    <h1>Library</h1>
                    <p>The New Era Public School| <span>Library</span> </p>
                </Directortext>
      
            </Directorbackground> 

            <Sub>
                <p>
                To introduce the students to the beautiful world of books and to inculcate good reading habits in the students, the school has three fully automated libraries one each for the primary/ middle wing, secondary wing and the senior secondary wing.
                </p>
               
            </Sub>
        </Main>
    )
}

export default Library
