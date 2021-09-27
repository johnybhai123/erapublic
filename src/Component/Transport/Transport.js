import React from 'react'
import dance from '../../images/sports.JPG'
import { Main } from './Transport.element'
function Transport() {
    return (
        <Main>
            <h1 style={{color:'green'}}>TRANSPORT</h1>
            <hr />
            <img src={dance} style={{height:'400px',width:'67vw',display:'flex',margin:'auto',border:'1px solid grey',padding:'10px'}} alt="" />
            <p style={{padding:'40px 0 0 0'}}>The Transport facility currently includes 5 buses, 6 magics & vans that are equipped with a Vehicle Tracking System (VTS) and on board cameras. This allows the School to monitor speed and location of the route. This effectively ensures the safety and security of scholars on board. Each bus is manned by a security guard and care giver who pick and drop children safely from their designated bus stops to school and back. Parents/Guardians are expected to carry the Escort Card at all times during the Pick-up and drop.</p>
        </Main>
    )
}

export default Transport
