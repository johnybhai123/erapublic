import React, { useState, useEffect } from "react";
import axios from "axios";
import { Main } from "./Noticedescription.element";
function Noticedescription(props) {
  const [head, setHead] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const fetchPosts = async () => {

    try {
      const Response = await axios.get(
        `http://127.0.0.1:8000/schoolbyte/${props.match.params.id}`
      ).then(res=>{
      setHead(res.data)
      
      console.log(loading)
      })
  
        
  
      
    }
   catch (error) {
    console.log(error)
  }}
  useEffect(() => {
    fetchPosts();
  }, [4]);
//   if(loading)
//   {  return <div>
//       Loading
//     </div>}
// else{

    return <Main>
   
    <h1>{head.notice_heading}</h1>
      <p>{head.notice_discription}</p>
 
  </Main>;
// }

  
 
}

export default Noticedescription;
