import React from 'react'
import { Main } from '../AcademicCurriculum/AcademicCurriculum.element'
import { Directortext } from '../Codeofconduct/Code.element'
import { Directorbackground, Div } from './Annualfunction.element'


function Annualfunction() {
    return (
        <Main>
                <Directorbackground>
                <Directortext>
                    <h1>Annual Function</h1>
                    <p>The New Era Public School| <span>Annual Function</span> </p>
                </Directortext>
             


            </Directorbackground>
            <h1 style={{textAlign:'center',padding:'20px'}}>Annual Function</h1> 

            <Div style={{display:'flex',flexWrap:'wrap'}}>

                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687948/DSC_8006_sto6cu.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687959/DSC_8233_uqclx1.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687956/DSC_7948_ywl6om.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687969/DSC_8321_v6mnyx.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687941/DSC_7919_jsuxdb.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687940/DSC_7827_bk7qw4.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687957/DSC_8149_gzqmhu.jpg' alt="" />
                        <img style={{height:'300px',width:'300px'}} src='https://res.cloudinary.com/dvmqfke8w/image/upload/v1706687950/DSC_7869_iveovl.jpg' alt="" />
                </Div>


        </Main>
    )
}

export default Annualfunction
