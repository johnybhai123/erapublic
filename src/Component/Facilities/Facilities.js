import React from 'react'
import { Dot, Dots, H1, Main, P, Sub } from './Facilities.elements'
import Component from './Component'
function Facilities() {
    return (
        <Main>
                <P>WHAT WE PROVIDED</P>
                <H1>SCHOOL FACILITIES</H1>
            <Sub>
               <Component/>
               <Component/>
               <Component/>
              
            </Sub>
            <Dots>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </Dots>
        </Main>
    )
}

export default Facilities
