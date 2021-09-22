import React from 'react'
import { Directortext } from '../Codeofconduct/Code.element'
import { Main } from '../Directorpen/Director.element'
import { Directorbackground, Sub } from './Admissioninquiry.element'

function Admissioninquiry() {
    return (
        <Main>
            <Directorbackground>
                <Directortext>
                    <h1>Admission Inquiry</h1>
                    <p>The New Era Public School| <span>Admission Inquiry</span> </p>
                </Directortext>
      
            </Directorbackground> 
            
            <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </Main>
    )
}

export default Admissioninquiry
