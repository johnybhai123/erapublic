import React from 'react'
import Heading from './Heading'
import { Main, Rowcolumn33 } from './Ourteam.element'
import Teamimage from './Teamimage'
import Teampeople from './Teampeople'
import sarita from '../../images/Director_SaritaBudana.JPG';
import MD from '../../images/ManagingDirector.JPG';
import President from '../../images/President_DeepakKusumakar.JPG';
import Principal from '../../images/Principal_DyutiSardesai.JPG';
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Ourteam() {

    


    return (
        <Main>
           {/* <Teamimage></Teamimage>  */}
           <Heading/>
           <Rowcolumn33>
              <Link to='/Director'>  <Teampeople image={sarita} name='Sarita Budana' designation='Sarita Budana' logo={<FaLinkedin/>}/></Link>
      
              <Link to='/Md'>  <Teampeople image={MD} name='Ratna Kusumakar' designation='Managing Director' logo={<FaLinkedin/>}/></Link>
      
              <Link to='/president'>  <Teampeople image={President} name='Deepak Kusumakar' designation='President' logo={<FaLinkedin/>}/></Link>
      
              <Link to='/principal'>  <Teampeople image={Principal} name='Dyuti Sardesai' designation='Principal' logo={<FaLinkedin/>}/></Link>
      
             
      
              
               
            
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
