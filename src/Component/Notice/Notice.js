import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Datecomponent from './Datecomponent'
import { Main,ExclusiveNotice, ImportantNotoice, Noticeboard, Sub } from './Notice.element'
import Importantcomponent from './Importantcomponent'

function Notice() {
    const[head,setHead] = useState([])
    const[imp,setImp] = useState([])
    const fetchPosts = async () => {

        try {
          const Response = await axios.get(
            `http://127.0.0.1:8000/schoolbyte/`
          ).then(res=>{
          setHead(res.data)
          
          })
      
            
      
          
        }
       catch (error) {
        console.log(error)
      }}

      const fetchPosts1 = async () => {

        try {
          const Response = await axios.get(
            `http://127.0.0.1:8000/schoolemportent/`
          ).then(res=>{
          setImp(res.data)
          
          })
      
            
      
          
        }
       catch (error) {
        console.log(error)
      }}
    useEffect(()=>{
     fetchPosts()
     fetchPosts1()
    },[4])
    
    return (
        <Main>
            <Sub>
               <ExclusiveNotice>
               COVID-19 help-care and information programme.&nbsp;<span style={{color:'red',fontSize:'20px',cursor:'pointer'}}>Exclusive</span>
                   </ExclusiveNotice> 
                   <Noticeboard>
                       <ImportantNotoice>
                           <h1>Important Notice</h1>
                            <Datecomponent head={head}></Datecomponent>
                       
                       </ImportantNotoice>
                       <ImportantNotoice>
                            <h1>&nbsp;&nbsp;&nbsp;School Bytes &nbsp;&nbsp;&nbsp;</h1>
                          <Importantcomponent head={imp}/>
                            

                       </ImportantNotoice>
                   </Noticeboard>
            </Sub>
            
        </Main>
    )
}

export default Notice
