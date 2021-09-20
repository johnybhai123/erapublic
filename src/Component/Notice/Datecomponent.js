import React from 'react'
import { Date, NoticeText, Start } from './Notice.element'

function Datecomponent() {
    return (
        <>
        <Start>
            <Date>
                <h4>11 </h4>
                <span style={{fontSize:'15px'}}>Sep</span>

            </Date>
            <NoticeText>
            <p style={{cursor:'pointer'}}> Revised Time Table Lorem, ipsum dolor sit amet consectetur adipisicing elit<span style={{color:'red'}}>New</span></p>

            </NoticeText>

        </Start>
        <hr />

    </>)
}

export default Datecomponent
