import React from 'react'
import { Descriptioncomponent, Headingcomponent, Imagecomponent, Main, Subcomponent } from './Facilities.elements'
import image from '../../images/national-festival-box-img.jpg'

function Component() {
    return (
        
            <Subcomponent>
                <Imagecomponent src={image}>

                </Imagecomponent>
                <Headingcomponent>
                    Lorem ipsum dolor sit amet.
                </Headingcomponent>

                <Descriptioncomponent>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, consectetur.
                </Descriptioncomponent>
            </Subcomponent>
      
    )
}

export default Component
