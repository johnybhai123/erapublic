import React from 'react'
import { Directorbackground, Directortext } from './Code.element'

function Componentcode(props) {
    return (
        <Directorbackground >
        <Directortext style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/${props.image}.jpg`})`}}>
            <h1>{props.heading}</h1>
            <p>The New Era Public School| <span>{props.heading}</span> </p>
        </Directortext>
    </Directorbackground>
    )
}

export default Componentcode
