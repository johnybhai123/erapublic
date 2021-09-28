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
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image={sarita} name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image={MD} name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image={President} name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image={Principal} name='Dyuti Sardesai' designation='Principal'/></Link>
              <Link to='/advisory'  style={{textDecoration:'none'}}>  <Teampeople image='https://choithramschool.com/TEDxChoithramSchoolIndore/images/teams/Rajesh%20Awasthi.jpg' name='Mr. Rajesh Awasthi
' designation='Advisory board'/></Link>
      
      <Link to='/advisory'  style={{textDecoration:'none'}}>  <Teampeople image='https://2.bp.blogspot.com/-EwWH4BWotws/VB05etuQ3uI/AAAAAAAAELQ/VbDkYYfoGFs/s1600/DSC_3662.jpg' name='Mr. Awadhesh Tiwari
' designation='Advisory board'/></Link>

              <Link to='/advisory'  style={{textDecoration:'none'}}>  <Teampeople image='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' name='Mrs. Simantini Sardesai 
' designation='Advisory board'/></Link>
      
           
      
              <Link to='/advisory'  style={{textDecoration:'none'}}>  <Teampeople image='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' name='Mr. Satyanarayanji Vohra 
' designation='Advisory board'/></Link>
      
             
      
              
               
            
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
