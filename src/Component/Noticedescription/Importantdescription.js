import React, { useState, useEffect } from "react";
import axios from "axios";
import { Main } from "./Noticedescription.element";
function Importantdescription(props) {
  const [head, setHead] = useState([]);
const [datestr,setDatestr] = useState()
  
  const fetchPosts = async () => {

    try {
      const Response = await axios.get(
        `http://erapublicschool.herokuapp.com/schoolemportent/${props.match.params.id}`
      ).then(res=>{
        console.log(res.data)
      setHead(res.data)
      setDatestr(res.data.createAte)
      
      })
  
        
  
      
    }
   catch (error) {
    console.log(error)
  }}
  useEffect(() => {
    fetchPosts();
  }, [4]);

 
    return <Main>
   
    <h1 style={{border:'1px solid black',color:'blue'}}>{head.notice_heading}</h1>
    <p>{datestr}</p>
      <p>{head.notice_discription}</p>
 
  </Main>;
// }

  
 
}

export default Importantdescription;
