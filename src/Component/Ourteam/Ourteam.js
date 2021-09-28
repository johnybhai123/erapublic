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
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='https://scontent.fbho4-1.fna.fbcdn.net/v/t1.6435-9/243075101_591764492177628_5951892245893792836_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=WJ4M8QH2A_8AX-tixTP&_nc_ht=scontent.fbho4-1.fna&oh=b6bf560b17e7ab34c743f5d76cbc230c&oe=617804E4' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='https://scontent.fbho4-1.fna.fbcdn.net/v/t1.6435-9/243022211_591764562177621_8856034438891635914_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=pDgTUmqkMH4AX9hsQr3&_nc_ht=scontent.fbho4-1.fna&oh=53cfcf740771d9bbd4bc5250b86edd20&oe=6177E6CC' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243214033_591764485510962_8095304649853287399_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=NAvfzxzBqa4AX-9xvGZ&_nc_ht=scontent.fbho4-2.fna&oh=843c8f7548bfdd08ecb54425418571f8&oe=6179D325' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='https://scontent.fbho4-2.fna.fbcdn.net/v/t1.6435-9/243086802_591764482177629_5986111960242541710_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=3hNr_rwmzf4AX-QD_tk&_nc_ht=scontent.fbho4-2.fna&oh=e4e52961481ecd2924f48fcec45f1614&oe=61770040' name='Dyuti Sardesai' designation='Principal'/></Link>
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
