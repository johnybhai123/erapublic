import React from 'react'
    import director from '../../images/director.jpg'
import { Main,Directorbackground, Directortext, Directordescription, Directorthought, Directorimage } from './Director.element'

function Componentmessage(props) {
    return (
        <Main>
            <Directorbackground>
                <Directortext>
                    <h1>{props.heading}</h1>
                    <p>The New Era Public School| <span>{props.pen}</span> </p>
                </Directortext>
            </Directorbackground>

            <Directordescription>

                <Directorimage>
                <img src={director} style={{border:'1px solid grey',padding:'10px'}}></img>
                </Directorimage>
                
                <Directorthought>
                    <p>{props.para1}</p>
                    <p>{props.para2}</p>
                    <p>{props.para3}</p>
                    <p>{props.para4}</p>
                </Directorthought>
            </Directordescription>
        </Main>
    )
}

export default Componentmessage
