import React from 'react'
import { Logo, Logoheading, Sub } from './Magzin.element'

function Componentmagzine(props) {
    return (
        <div>
            <Sub>
                <Logo>
                    {props.logo}
                </Logo>

                <Logoheading>
                    {props.heading}
                </Logoheading>
            </Sub>
        </div>
    )
}

export default Componentmagzine
