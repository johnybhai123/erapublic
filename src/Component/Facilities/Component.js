import React from 'react'
import { Descriptioncomponent, Headingcomponent, Imagecomponent, Main, Subcomponent } from './Facilities.elements'

function Component(props) {
    return (
        
            <Subcomponent>
                <Imagecomponent src={props.image}>

                </Imagecomponent>
                <Headingcomponent>
                    {props.heading}
                </Headingcomponent>

                <Descriptioncomponent>
                    {props.description}
                </Descriptioncomponent>
            </Subcomponent>
      
    )
}

export default Component
