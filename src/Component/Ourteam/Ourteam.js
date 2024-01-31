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
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687932/Director_Sarita_Budana_rozova.jpg' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687990/Managing_Director_yejcqq.jpg' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687985/President__Deepak_Kusumakar_pihm8s.jpg' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706706746/princi_nz6yvy.jpg' name='Archana Tiwari' designation='Principal'/></Link>
              
             
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
