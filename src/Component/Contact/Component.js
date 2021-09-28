import React from 'react'
import { IconContext } from 'react-icons/lib'

function Component(props) {
    return (
        <IconContext.Provider value={{ color: "blue", size: "50",gap:'10px' }}>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',alignItems:'center'}}>
            {props.logo}
            <h5 style={{maxWidth:'50%'}}>{props.name}</h5>
        </div>
        </IconContext.Provider>
    )
}

export default Component
