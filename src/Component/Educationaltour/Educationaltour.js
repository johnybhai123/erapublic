import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Main } from '../Directorpen/Director.element'
import { Directorbackground, Div } from './Educationaltour.element'
import image from '../../images/national-festival-box-img.jpg'


function Educationaltour() {
    return (
        <Main>
                <Directorbackground>
                <Directortext>
                    <h1>Educational Tour</h1>
                    <p>The New Era Public School| <span>Educational Tour</span> </p>
                </Directortext>
             


            </Directorbackground>
            <h1 style={{textAlign:'center',padding:'20px'}}>Educational Tour</h1> 

            <Div style={{display:'flex',flexWrap:'wrap'}}>

                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                </Div>


        </Main>
    )
}

export default Educationaltour
