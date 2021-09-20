import React from 'react'

import Datecomponent from './Datecomponent'
import { Main,ExclusiveNotice, ImportantNotoice, Noticeboard, Sub } from './Notice.element'

function Notice() {
    return (
        <Main>
            <Sub>
               <ExclusiveNotice>
               COVID-19 help-care and information programme.&nbsp;<span style={{color:'red',fontSize:'20px',cursor:'pointer'}}>Exclusive</span>
                   </ExclusiveNotice> 
                   <Noticeboard>
                       <ImportantNotoice>
                           <h1>Important Notice</h1>
                            <Datecomponent></Datecomponent>
                            <Datecomponent></Datecomponent>
                            <Datecomponent></Datecomponent>
                            <Datecomponent></Datecomponent>
                       </ImportantNotoice>
                       <ImportantNotoice>
                            <h1>&nbsp;&nbsp;&nbsp;School Bytes &nbsp;&nbsp;&nbsp;</h1>
                       <Datecomponent></Datecomponent>
                       <Datecomponent></Datecomponent>
                       <Datecomponent></Datecomponent>
                       <Datecomponent></Datecomponent>
                            

                       </ImportantNotoice>
                   </Noticeboard>
            </Sub>
            
        </Main>
    )
}

export default Notice

