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
              <Link to='/Director' style={{textDecoration:'none'}}>  <Teampeople image='https://icecube-eu-400.icedrive.io/thumbnail?p=QR2IiqyoC17ZI0sSsv.u41GwpLiZ3obycN3bjKgIMaz8xEdzbdiBJTOe6kiJYV_Mj3T93xygqK7TqJhiTe8BD2JjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped' name='Sarita Budana' designation='Director' /></Link>
      
              <Link to='/Md'  style={{textDecoration:'none'}}>  <Teampeople image='https://icecube-eu-400.icedrive.io/thumbnail?p=eOQAdyfefd_mcp8kBzXTaKM.gc_A4rw2hUh2NIzP3feXag16AhnsEFqShmN.K3W_.WDtrpjgvtRb6a_1gE06YmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped' name='Ratna Kusumakar' designation='Managing Director'/></Link>
      
              <Link to='/president'  style={{textDecoration:'none'}}>  <Teampeople image='https://icecube-eu-400.icedrive.io/thumbnail?p=1gJDhwKTFpbKANJShpYdFojbVsGx4lgflbV0II9EZOmoiOblbVujI_yUlqm1iYmgZY3iyg3ElKmnwecZRVjGKWJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped' name='Deepak Kusumakar' designation='President'/></Link>
      
              <Link to='/principal'  style={{textDecoration:'none'}}>  <Teampeople image='https://icecube-eu-400.icedrive.io/thumbnail?p=.bFCQVXxTSdgBKU0e8xPFm9MBFAEGJznJkRbLpivWoENMxEuJwpXOEgCMIw8clu1itxbMdxVXqKqaXN5qg1rl2JjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped' name='Dyuti Sardesai' designation='Principal'/></Link>
              
      
             
      
              
               
            
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam
