import React,{useState,useEffect} from 'react'
import { Button, Fill, Form, Input, Main, Sub, Talk } from "./Admissioninquiry.element";
import axios from 'axios'
function Admissioninquiry() {
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()
  const [email,setEmail]=useState()
  const [city,setCity]=useState()
  const [mobile,setMobile]=useState()
  const [description,setDescription]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const createPost = async () => {
      try {
        const Response = await axios.post(
          `http://127.0.0.1:8000/contact/`,{
            first_name:firstname,
            last_name:lastname,
            city:city,
            email:email,
            mobile:mobile,
            description:description
          }
        ).then(res=>{
        console.log(res.data)
        
        })
    
          
    
        
      }
     catch (error) {
      console.log(error)
    }}
    createPost()
  
  }

  useEffect(()=>{

  },[])

 
  return (
    <Main>
      <Sub>
        <Fill>
          <h1>Fill the form. It's easy.</h1>
          <Form onSubmit={handleSubmit}>
          <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
          <Input type='text' placeholder='First Name' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
          <Input type='text' placeholder='Last Name' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
          </div>
          <div style={{display:'flex',flexFlow:'column wrap',gap:'20px',marginTop:'20px'}}>
          <Input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Input type='text' placeholder='Phone' value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          <Input type='text' placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)}/>
          <Input type='text-area' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <Button type='submit' value='Submit' >Submit</Button>
          </div>
          </Form>
        </Fill>
        <Talk><h1>Let's talk about Admission.</h1><p>Our School has very simple and Fast Admission Process</p></Talk>
      </Sub>
    </Main>
  );
}

export default Admissioninquiry
