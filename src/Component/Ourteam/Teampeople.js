import React from 'react'
import { Button } from '../Admissioninquiry/Admissioninquiry.element';
import { Main, Row3 } from './Ourteam.element'

function Teampeople(props) {
    return (
        <Main>
            <Row3>
                <img style={{margin:'auto',height:'250px',width:'250px',borderRadius:'50%'}} src={props.image}></img>
                <h4 style={{padding:'10px'}}>{props.name}</h4>
                <h6>{props.designation} <span>{props.logo}</span></h6>
                <Button  >Read More</Button>
            </Row3>
        </Main>
    )
}

export default Teampeople;
