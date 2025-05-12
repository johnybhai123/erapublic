import React from 'react'
import Heading from './Heading'
import { Main, Rowcolumn33 } from './Ourteam.element'
import Teampeople from './Teampeople'

import { Link } from 'react-router-dom'
function Ourteam() {

    


    return (
        <Main>
           {/* <Teamimage></Teamimage>  */}
           <Heading/>
           <Rowcolumn33>
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='\website data for 2025-26\TABS\ABOUT US\our team\Sarita Budana.JPG' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='\website data for 2025-26\TABS\ABOUT US\our team\Ratna Kusumakar.JPG' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='\website data for 2025-26\TABS\ABOUT US\our team\Deepak Kusumakar.JPG' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='\website data for 2025-26\TABS\ABOUT US\our team\Archana Tiwari.JPG' name='Archana Tiwari' designation='Principal'/></Link>
              
             
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
