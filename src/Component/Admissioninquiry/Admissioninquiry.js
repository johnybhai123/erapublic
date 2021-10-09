import React,{useState,useEffect} from 'react'
import { Button, Fill, Form, Input, Main, Sub, Talk } from "./Admissioninquiry.element";
import axios from 'axios'
import { Redirect, useHistory } from 'react-router';
function Admissioninquiry() {
  let history = useHistory();
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [classn,setClassn]=useState('')
  const [lastschool,setLastschool]=useState('')
  // const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [city,setCity]=useState('')
  const [mobile,setMobile]=useState('')
  const [description,setDescription]=useState('')
  const [load,setLoad]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const createPost = async () => {
      try {
        setLoad(true)
        const Response = await axios.post(
          `https://erapublicschool.herokuapp.com/contact/`,{
            first_name:firstname,
            last_name:lastname,
            city:city,
            email:email,
            mobile:mobile,
            description:description,
            classn:classn,
            lastschool:lastschool
          }
        ).then(res=>{
          setLoad(false)
          alert('Thankyou Admission inquiry submitted successfully')
        history.push('/')

        })
    
          
    
        
      }
     catch (error) {
      console.log(error)
    }}
    createPost();
    
  
  }

 

 
  return (
    <Main>
      <Sub>
        <Fill>
          <h1>Fill the form. It's easy.</h1>
          <Form onSubmit={handleSubmit}>
          <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
          <Input type='text' placeholder='Student Name' value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
          <Input type='text' placeholder='Parent Name' value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
          </div>
          <div style={{display:'flex',flexFlow:'column wrap',gap:'20px',marginTop:'20px'}}>
          <Input type='text' placeholder='Last School' value={lastschool} onChange={(e)=>setLastschool(e.target.value)} required/>
          <Input type='text' placeholder='Class' value={classn} onChange={(e)=>setClassn(e.target.value)} required/>

          <Input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <Input type='text' placeholder='Phone' value={mobile} onChange={(e)=>setMobile(e.target.value)} required/>
          <Input type='text' placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)}/>
          <Input type='text-area' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <Button type='submit' value='Submit' >{load?(<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>):'Submit'}</Button>
          </div>
          </Form>
        </Fill>
        <Talk><h1>Let's talk about Admission.</h1><p>Our School has very simple and Fast Admission Process</p></Talk>
      </Sub>
    </Main>
  );
}

export default Admissioninquiry
