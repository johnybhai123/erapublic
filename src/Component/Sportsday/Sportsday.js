import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Main } from '../Directorpen/Director.element'
import { Directorbackground, Div } from './Sportsday.element'
import image from '../../images/national-festival-box-img.jpg'


function Sportsday() {
    return (
        <Main>
                <Directorbackground>
                <Directortext>
                    <h1>Sports Day</h1>
                    <p>The New Era Public School| <span>Sports Day</span> </p>
                </Directortext>
             


            </Directorbackground>
            <h1 style={{textAlign:'center',padding:'20px'}}>Sports Day</h1> 

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

export default Sportsday
