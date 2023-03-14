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
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='https://drive.google.com/uc?id=1NMB1iVrHDGSiCuR0iaEuqUu-XcvH7K-9' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='https://drive.google.com/uc?id=1WwmXR0U-j-cbY8JwkuOLjUgYaz-LjRFH' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='https://drive.google.com/uc?id=1ztndTs8a2PQIi2ezMl_5uNuiiV-09Zav' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='https://drive.google.com/uc?id=1Z_O9y6waQxrUGLPaPw4x-X_ZXQ4t1ysJ' name='Archana Tiwari' designation='Principal'/></Link>
              
             
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
