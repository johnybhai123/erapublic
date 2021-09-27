import React,{useState} from 'react'
import { Dot3, Dot1, Dot2, Dots, H1, Main, P, Sub } from './Facilities.elements'
import classroom from '../../images/classroom1.JPG'
import chemistrylab from '../../images/chemistry.JPG'
import campus from '../../images/3.JPG'
import Activity from '../../images/Activityroom.JPG'
import library from '../../images/library.jpg'
import music from '../../images/musicroom.JPG'
import sport from '../../images/sports.JPG'
import computer from '../../images/computerlab.JPG'
import ecofriendly from '../../images/2.JPG'
import Component from './Component'
import { Link } from 'react-router-dom'
function Facilities({ChangeAnimation1,ChangeAnimation2,ChangeAnimation3}) {
    const [color1,setColor1]=useState(1)
    const [color2,setColor2]=useState()
    const [color3,setColor3]=useState()
    
    {color1?ChangeAnimation1=true:ChangeAnimation1=false}
    {color2?ChangeAnimation2=true:ChangeAnimation2=false}
    {color3?ChangeAnimation3=true:ChangeAnimation3=false}
    console.log(ChangeAnimation2)
    return (
        <Main>
                <P>WHAT WE PROVIDED</P>
                <H1>SCHOOL FACILITIES</H1>
            <Sub ChangeAnimation1={ChangeAnimation1} ChangeAnimation2={ChangeAnimation2} ChangeAnimation3={ChangeAnimation3} >
            <div style={{display:'flex',gap:'70px',maxWidth:'100%',flexWrap:'wrap'}}>
               <Component image={campus}  heading='Campus' description='Four Acre Campus with 24x7 CCTV surveillance ' />
               <Link to='/classroom'><Component image={classroom} heading=' Class Room ' description=' Digital And Smart Class Room  ' /></Link>
               <Link to='/library'><Component image={library} heading='Library' description='Well equipped Library ' /></Link>
               <Link to='/lab'><Component image={chemistrylab} heading='Laboratory ' description='Science labs-Physics, Chemistry & Biology' /></Link>
              
                
                </div>           
            <div style={{display:'flex',gap:'50px',maxWidth:'100%',flexWrap:'wrap'}}>
           <Link to='/activity'> <Component image={Activity} heading='Activity Room' description='Kids Activity Room ' /></Link>
               <Component heading=' Seminar ' description='Auditorium & Audio Visual Room   ' />
               <Link to='/activity'><Component image={music} heading='Arts' description=' Art & Craft, Music and Dance ' /></Link>
               <Link to='/transportation'><Component heading='Transportation Facility ' description='Transportation Facility' /></Link>
                
                </div>           
            <div style={{display:'flex',gap:'50px',maxWidth:'100%',flexWrap:'wrap'}}>
           <Link to='/kinder'> <Component image={ecofriendly} heading='Ecofriendly Campus' description='Secure and Eco friendly Campus' /></Link>
               <Link to='/modern'><Component image={sport} heading=' Sports ' description=' Well maintained Sports Complex  ' /></Link>
               <Component  heading='Environment' description='Motivating learning environment ' />
               <Link to='/wifi'><Component image={computer} heading='Computer Lab ' description='Computer Lab With Secure Internet for kids' /></Link>
                
                </div>           
              
            </Sub>
            <Dots>
                <Dot1 onClick={()=>{setColor1(true);setColor2(false);setColor3(false)}}></Dot1>
                <Dot2 onClick={()=>{setColor1(false);setColor2(true);setColor3(false)}}></Dot2>
                <Dot3 onClick={()=>{setColor1(false);setColor2(false);setColor3(true)}}></Dot3>
            </Dots>
        </Main>
    )
}

export default Facilities
