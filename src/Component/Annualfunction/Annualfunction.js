import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Main } from '../Directorpen/Director.element'
import { Directorbackground, Div } from './Annualfunction.element'

import image1 from '../../images/Annualfunction/DSC_7919.JPG'
import image2 from '../../images/Annualfunction/DSC_8345.JPG'
import image3 from '../../images/Annualfunction/DSC_7827.JPG'
import image4 from '../../images/Annualfunction/DSC_8006.JPG'
import image5 from '../../images/Annualfunction/DSC_8149.JPG'
import image6 from '../../images/Annualfunction/DSC_8233.JPG'
import image7 from '../../images/Annualfunction/DSC_8275.JPG'
import image8 from '../../images/Annualfunction/DSC_7827.JPG'

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

                        <img style={{height:'300px',width:'300px'}} src={image1} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image2} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image3} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image4} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image5} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image6} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image7} alt="" />
                        <img style={{height:'300px',width:'300px'}} src={image8} alt="" />
                </Div>


        </Main>
    )
}

export default Annualfunction
